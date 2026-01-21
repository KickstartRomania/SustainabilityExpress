import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';
import { useToast } from '@/hooks/use-toast';
import { ArrowRight, CheckCircle, Users, Lightbulb, CreditCard, Loader2 } from 'lucide-react';
import { supabase } from '@/integrations/supabase/client';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { z } from 'zod';
import { logError } from '@/lib/error-handler';
import { checkRateLimit, recordSubmission, formatResetTime } from '@/lib/rate-limiter';

// Validation schema for application form
const applicationSchema = z.object({
  name: z.string().trim().min(2, 'Name must be at least 2 characters').max(100, 'Name must be less than 100 characters'),
  email: z.string().trim().email('Please enter a valid email address').max(255, 'Email must be less than 255 characters'),
  phone: z.string().trim().min(8, 'Phone must be at least 8 characters').max(20, 'Phone must be less than 20 characters'),
  role: z.string().min(1, 'Please select a role'),
  skillLevel: z.enum(['student', 'junior', 'mid', 'senior'], { 
    errorMap: () => ({ message: 'Please select an experience level' }) 
  }),
  portfolio: z.string().trim().min(1, 'Portfolio/LinkedIn/GitHub is required').max(500, 'Portfolio URL must be less than 500 characters'),
  motivation: z.string().trim().min(10, 'Motivation must be at least 10 characters').max(250, 'Motivation must be less than 250 characters'),
  idea: z.string().trim().max(500, 'Idea must be less than 500 characters').optional().or(z.literal('')),
  accessibility: z.string().trim().max(500, 'Accessibility requirements must be less than 500 characters').optional().or(z.literal('')),
  codeOfConduct: z.literal(true, { errorMap: () => ({ message: 'You must agree to the Code of Conduct' }) }),
  photoConsent: z.literal(true, { errorMap: () => ({ message: 'You must consent to photos/videos' }) }),
});

type ApplicationFormData = z.infer<typeof applicationSchema>;

const Apply = () => {
  const { toast } = useToast();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    role: '',
    skillLevel: '',
    portfolio: '',
    motivation: '',
    idea: '',
    accessibility: '',
    codeOfConduct: false,
    photoConsent: false,
  });

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate form data with Zod
    const validationResult = applicationSchema.safeParse(formData);
    
    if (!validationResult.success) {
      const firstError = validationResult.error.errors[0];
      toast({
        title: "Validation Error",
        description: firstError.message,
        variant: "destructive",
      });
      return;
    }

    const validatedData = validationResult.data;
    
    // Check rate limit before submission
    const rateLimitResult = checkRateLimit('application_form', { maxSubmissions: 3, windowMs: 3600000 });
    if (!rateLimitResult.allowed) {
      const resetTimeStr = rateLimitResult.resetTime ? formatResetTime(rateLimitResult.resetTime) : 'later';
      toast({
        title: "Too Many Submissions",
        description: `You can only submit 3 applications per hour. Please try again in ${resetTimeStr}.`,
        variant: "destructive",
      });
      return;
    }
    
    setIsSubmitting(true);

    try {
      const { error } = await supabase.from('applications').insert({
        name: validatedData.name,
        email: validatedData.email,
        phone: validatedData.phone,
        role: validatedData.role,
        skill_level: validatedData.skillLevel,
        portfolio: validatedData.portfolio || null,
        motivation: validatedData.motivation,
        idea: validatedData.idea || null,
        accessibility: validatedData.accessibility || null,
        code_of_conduct: validatedData.codeOfConduct,
        photo_consent: validatedData.photoConsent,
      });

      if (error) throw error;

      // Record successful submission for rate limiting
      recordSubmission('application_form', 3600000);

      // Send to Make.com webhook (non-blocking - don't fail if webhook fails)
      fetch(`${import.meta.env.VITE_SUPABASE_URL}/functions/v1/send-to-make`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: validatedData.name,
          email: validatedData.email,
          phone: validatedData.phone,
          role: validatedData.role,
          skill_level: validatedData.skillLevel,
          portfolio: validatedData.portfolio,
          motivation: validatedData.motivation,
          idea: validatedData.idea || null,
          accessibility: validatedData.accessibility || null,
          submitted_at: new Date().toISOString()
        })
      }).catch(err => console.error('Make.com webhook failed:', err));
      
      setIsSubmitted(true);
      toast({
        title: "Application Submitted!",
        description: "We'll review your application and get back to you within 5-7 days.",
      });
    } catch (error: unknown) {
      logError(error, 'application-submission');
      
      // Check if this is a rate limit error from the database trigger
      const errorMessage = error instanceof Error ? error.message : String(error);
      const isRateLimitError = errorMessage.includes('Rate limit exceeded');
      
      toast({
        title: isRateLimitError ? "Too Many Submissions" : "Submission Failed",
        description: isRateLimitError 
          ? "You can only submit 3 applications per hour. Please try again later."
          : "There was an error submitting your application. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-background">
        <Navigation />
        <div className="pt-24 pb-16">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto text-center">
              <div className="mb-8">
                <CheckCircle className="h-20 w-20 text-primary mx-auto mb-6" />
                <h1 className="text-4xl font-bold text-foreground mb-4">Application Received!</h1>
                <p className="text-xl text-muted-foreground mb-8">
                  Thanks for applying to Sustainability Express! We'll review applications and email you within 5-7 days. 
                  Seats are limited; priority goes to diverse skills and motivation.
                </p>
              </div>
              
              <Card className="card-elevated text-left">
                <h2 className="text-xl font-bold text-foreground mb-4">What's Next?</h2>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    Check your email for a confirmation message
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    Start thinking about potential project ideas (optional)
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    Pack your reusables and get ready for innovation on rails!
                  </li>
                </ul>
              </Card>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-5xl font-bold text-foreground mb-6">Apply Now</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Join us for 48 hours of innovation on rails. Limited seats available for passionate builders, 
              designers, and sustainability enthusiasts.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-12 max-w-7xl mx-auto">
            {/* Application Form */}
            <div className="lg:col-span-2">
              <Card className="card-elevated">
                <h2 className="text-2xl font-bold text-foreground mb-8">Application Form</h2>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Personal Information */}
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name *</Label>
                      <Input
                        id="name"
                        value={formData.name}
                        onChange={(e) => handleInputChange('name', e.target.value)}
                        placeholder="Your full name"
                        required
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address *</Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleInputChange('email', e.target.value)}
                        placeholder="your.email@example.com"
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number *</Label>
                    <Input
                      id="phone"
                      value={formData.phone}
                      onChange={(e) => handleInputChange('phone', e.target.value)}
                      placeholder="+40 123 456 789"
                      required
                    />
                  </div>

                  {/* Professional Information */}
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="role">You are: *</Label>
                      <Select onValueChange={(value) => handleInputChange('role', value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select your primary role" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectGroup>
                            <SelectLabel className="font-bold text-primary-foreground bg-primary px-2 py-1 rounded -mx-1">Tech</SelectLabel>
                            <SelectItem value="software_developer">Software Developer / Engineer</SelectItem>
                            <SelectItem value="web_developer">Web Developer (Frontend / Backend / Full Stack)</SelectItem>
                            <SelectItem value="data_analyst">Data Analyst / Data Scientist</SelectItem>
                            <SelectItem value="ai_ml_engineer">AI / Machine Learning Engineer</SelectItem>
                            <SelectItem value="devops">DevOps / Cloud Engineer</SelectItem>
                            <SelectItem value="qa_engineer">QA Engineer / Software Tester</SelectItem>
                            <SelectItem value="cybersecurity">Cybersecurity Specialist</SelectItem>
                            <SelectItem value="ux_ui_designer">UX / UI Designer</SelectItem>
                            <SelectItem value="product_engineer">Product Engineer</SelectItem>
                            <SelectItem value="it_support">IT Support / System Administrator</SelectItem>
                            <SelectItem value="other_tech">Something else in Tech</SelectItem>
                          </SelectGroup>
                          <SelectGroup>
                            <SelectLabel className="font-bold text-primary-foreground bg-primary px-2 py-1 rounded -mx-1">Business</SelectLabel>
                            <SelectItem value="business_analyst">Business Analyst</SelectItem>
                            <SelectItem value="product_manager">Product Manager</SelectItem>
                            <SelectItem value="project_manager">Project Manager</SelectItem>
                            <SelectItem value="operations_manager">Operations Manager</SelectItem>
                            <SelectItem value="consultant">Strategy & Management Consultant</SelectItem>
                            <SelectItem value="entrepreneur">Entrepreneur / Startup Founder</SelectItem>
                            <SelectItem value="sales_bd">Sales Manager / Business Development</SelectItem>
                            <SelectItem value="financial_analyst">Financial Analyst</SelectItem>
                            <SelectItem value="investment_vc">Investment / Venture Capital Associate</SelectItem>
                            <SelectItem value="supply_chain">Supply Chain & Logistics Specialist</SelectItem>
                            <SelectItem value="other_business">Something else in Business area</SelectItem>
                          </SelectGroup>
                          <SelectGroup>
                            <SelectLabel className="font-bold text-primary-foreground bg-primary px-2 py-1 rounded -mx-1">Communication</SelectLabel>
                            <SelectItem value="marketing_specialist">Marketing Specialist</SelectItem>
                            <SelectItem value="digital_marketing">Digital Marketing Manager</SelectItem>
                            <SelectItem value="content_creator">Content Creator / Copywriter</SelectItem>
                            <SelectItem value="social_media">Social Media Manager</SelectItem>
                            <SelectItem value="brand_manager">Brand Manager</SelectItem>
                            <SelectItem value="pr_communications">PR & Communications Specialist</SelectItem>
                            <SelectItem value="community_manager">Community Manager</SelectItem>
                            <SelectItem value="growth_marketer">Growth Marketer</SelectItem>
                            <SelectItem value="employer_branding">Employer Branding Specialist</SelectItem>
                            <SelectItem value="events_partnerships">Event & Partnerships Manager</SelectItem>
                            <SelectItem value="other_communication">Something else in Communication</SelectItem>
                          </SelectGroup>
                          <SelectGroup>
                            <SelectLabel className="font-bold text-primary-foreground bg-primary px-2 py-1 rounded -mx-1">Teenager</SelectLabel>
                            <SelectItem value="teenager">Passionate teenager</SelectItem>
                          </SelectGroup>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="skillLevel">Experience Level *</Label>
                      <Select onValueChange={(value) => handleInputChange('skillLevel', value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select your experience level" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="student">Student</SelectItem>
                          <SelectItem value="junior">Junior (0-2 years)</SelectItem>
                          <SelectItem value="mid">Mid-level (3-5 years)</SelectItem>
                          <SelectItem value="senior">Senior (5+ years)</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="portfolio">Portfolio/LinkedIn/GitHub *</Label>
                    <Input
                      id="portfolio"
                      value={formData.portfolio}
                      onChange={(e) => handleInputChange('portfolio', e.target.value)}
                      placeholder="Link to your work or professional profile"
                      required
                    />
                  </div>

                  {/* Motivation & Ideas */}
                  <div className="space-y-2">
                    <Label htmlFor="motivation">Why do you want to join? (100-250 characters) *</Label>
                    <Textarea
                      id="motivation"
                      value={formData.motivation}
                      onChange={(e) => handleInputChange('motivation', e.target.value)}
                      placeholder="Share what excites you about this hackathon and sustainability..."
                      maxLength={250}
                      required
                    />
                    <div className="text-sm text-muted-foreground">
                      {formData.motivation.length}/250 characters
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="idea">Which sustainability topics are you most passionate about? (optional)</Label>
                    <Textarea
                      id="idea"
                      value={formData.idea}
                      onChange={(e) => handleInputChange('idea', e.target.value)}
                      placeholder="Briefly describe any project idea you'd like to work on..."
                    />
                  </div>

                  {/* Accessibility */}
                  <div className="space-y-2">
                    <Label htmlFor="accessibility">Accessibility or Dietary Requirements</Label>
                    <Textarea
                      id="accessibility"
                      value={formData.accessibility}
                      onChange={(e) => handleInputChange('accessibility', e.target.value)}
                      placeholder="Let us know about any dietary restrictions, accessibility needs, or other requirements..."
                    />
                  </div>

                  {/* Consent */}
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <Checkbox
                        id="codeOfConduct"
                        checked={formData.codeOfConduct}
                        onCheckedChange={(checked) => handleInputChange('codeOfConduct', checked === true)}
                      />
                      <Label htmlFor="codeOfConduct" className="text-sm leading-relaxed">
                        I agree to the Code of Conduct: Be kind, respectful, and professional. 
                        No harassment will be tolerated. *
                      </Label>
                    </div>

                    <div className="flex items-start space-x-3">
                      <Checkbox
                        id="photoConsent"
                        checked={formData.photoConsent}
                        onCheckedChange={(checked) => handleInputChange('photoConsent', checked === true)}
                      />
                      <Label htmlFor="photoConsent" className="text-sm leading-relaxed">
                        I consent to being photographed/filmed for event documentation and marketing materials. *
                      </Label>
                    </div>
                  </div>

                  <Button type="submit" className="btn-hero w-full text-lg py-6" disabled={isSubmitting}>
                    {isSubmitting ? (
                      <>
                        <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                        Submitting...
                      </>
                    ) : (
                      <>
                        Submit Application <ArrowRight className="ml-2 h-5 w-5" />
                      </>
                    )}
                  </Button>
                </form>
              </Card>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              <Card className="card-elevated">
                <Users className="h-8 w-8 text-primary mb-4" />
                <h3 className="text-xl font-bold text-foreground mb-4">Selection Process</h3>
                <ul className="space-y-2 text-muted-foreground text-sm">
                  <li>• Limited to 20 participants</li>
                  <li>• Priority for diverse skill sets</li>
                  <li>• Focus on motivation and enthusiasm</li>
                  <li>• Interdisciplinary teams with varied backgrounds</li>
                  <li>• Confirmation includes next steps</li>
                </ul>
              </Card>

              <Card className="card-elevated">
                <Lightbulb className="h-8 w-8 text-primary mb-4" />
                <h3 className="text-xl font-bold text-foreground mb-4">Free for Teenagers (16-18 y.o.)</h3>
                <p className="text-muted-foreground text-sm">
                  Some of the spots reserved for teenagers are offered to our partners: <a href="https://www.valentina-romania.ro/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Asociația Valentina</a>, <a href="https://www.carteadaliei.ro/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Cartea Daliei</a>, <a href="https://www.eduup.ro/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Edu Up</a>, and <a href="https://alacrity.education/en" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Alacrity</a>.
                </p>
              </Card>

              <Card className="card-elevated border-2 border-primary/20">
                <CreditCard className="h-8 w-8 text-primary mb-4" />
                <h3 className="text-xl font-bold text-foreground mb-3">Participation Fee</h3>
                <div className="text-3xl font-bold text-primary mb-2">250 RON</div>
                <p className="text-muted-foreground text-sm">
                  Payment is required only after your application is accepted. You'll receive payment instructions via email.
                </p>
              </Card>

              <Card className="p-6 bg-gradient-hero text-white">
                <h3 className="text-xl font-bold mb-3">Questions?</h3>
                <p className="text-white/90 text-sm mb-4">
                  Need help with your application or have specific questions about the event?
                </p>
                <div className="flex gap-2 w-full">
                  <a href="mailto:george@sustainabilityexpress.eu" className="flex-1">
                    <Button variant="outline" className="w-full border-white text-white hover:bg-white hover:text-primary">
                      Email Us
                    </Button>
                  </a>
                  <a href="http://wa.me/+40750728423" target="_blank" rel="noopener noreferrer" className="flex-1">
                    <Button variant="outline" className="w-full border-white text-white hover:bg-white hover:text-primary">
                      WhatsApp
                    </Button>
                  </a>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Apply;