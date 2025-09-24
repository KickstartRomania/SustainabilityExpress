import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';
import { useToast } from '@/hooks/use-toast';
import { ArrowRight, CheckCircle, Users, Lightbulb } from 'lucide-react';
import Navigation from '@/components/Navigation';

const Apply = () => {
  const { toast } = useToast();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    role: '',
    skillLevel: '',
    portfolio: '',
    motivation: '',
    idea: '',
    teamPreference: '',
    teamName: '',
    accessibility: '',
    codeOfConduct: false,
    photoConsent: false,
  });

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.codeOfConduct) {
      toast({
        title: "Code of Conduct Required",
        description: "Please agree to the Code of Conduct to continue.",
        variant: "destructive",
      });
      return;
    }

    // Simulate form submission
    setIsSubmitted(true);
    toast({
      title: "Application Submitted!",
      description: "We'll review your application and get back to you within 5-7 days.",
    });
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
                      <Label htmlFor="role">Primary Role *</Label>
                      <Select onValueChange={(value) => handleInputChange('role', value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select your primary role" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="developer">Developer</SelectItem>
                          <SelectItem value="designer">Designer</SelectItem>
                          <SelectItem value="product">Product Manager</SelectItem>
                          <SelectItem value="business">Business/Marketing</SelectItem>
                          <SelectItem value="sustainability">Sustainability Professional</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
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
                    <Label htmlFor="portfolio">Portfolio/LinkedIn/GitHub</Label>
                    <Input
                      id="portfolio"
                      value={formData.portfolio}
                      onChange={(e) => handleInputChange('portfolio', e.target.value)}
                      placeholder="Link to your work or professional profile"
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
                    <Label htmlFor="idea">Got an idea to pitch? (optional)</Label>
                    <Textarea
                      id="idea"
                      value={formData.idea}
                      onChange={(e) => handleInputChange('idea', e.target.value)}
                      placeholder="Briefly describe any project idea you'd like to work on..."
                    />
                  </div>

                  {/* Team Preferences */}
                  <div className="space-y-4">
                    <Label>Team Preference *</Label>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="flex items-center space-x-2">
                        <input
                          type="radio"
                          id="team"
                          name="teamPreference"
                          value="team"
                          onChange={(e) => handleInputChange('teamPreference', e.target.value)}
                          className="focus-ring"
                        />
                        <Label htmlFor="team">I want to join/form a team</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <input
                          type="radio"
                          id="solo"
                          name="teamPreference"
                          value="solo"
                          onChange={(e) => handleInputChange('teamPreference', e.target.value)}
                          className="focus-ring"
                        />
                        <Label htmlFor="solo">I prefer to work solo</Label>
                      </div>
                    </div>
                    
                    {formData.teamPreference === 'team' && (
                      <div className="space-y-2">
                        <Label htmlFor="teamName">Team Name (if you have one)</Label>
                        <Input
                          id="teamName"
                          value={formData.teamName}
                          onChange={(e) => handleInputChange('teamName', e.target.value)}
                          placeholder="Leave blank if looking to join a team"
                        />
                      </div>
                    )}
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
                        I consent to being photographed/filmed for event documentation and marketing materials.
                      </Label>
                    </div>
                  </div>

                  <Button type="submit" className="btn-hero w-full text-lg py-6">
                    Submit Application <ArrowRight className="ml-2 h-5 w-5" />
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
                  <li>• Limited to 20-30 participants</li>
                  <li>• Priority for diverse skill combinations</li>
                  <li>• Focus on motivation and enthusiasm</li>
                  <li>• Review within 5-7 days</li>
                </ul>
              </Card>

              <Card className="card-elevated">
                <Lightbulb className="h-8 w-8 text-primary mb-4" />
                <h3 className="text-xl font-bold text-foreground mb-4">Tips for Success</h3>
                <ul className="space-y-2 text-muted-foreground text-sm">
                  <li>• Be specific about your motivation</li>
                  <li>• Highlight relevant experience</li>
                  <li>• Show enthusiasm for sustainability</li>
                  <li>• Mention collaboration skills</li>
                </ul>
              </Card>

              <Card className="p-6 bg-gradient-hero text-white">
                <h3 className="text-xl font-bold mb-3">Questions?</h3>
                <p className="text-white/90 text-sm mb-4">
                  Need help with your application or have specific questions about the event?
                </p>
                <Button variant="outline" className="w-full border-white text-white hover:bg-white hover:text-primary">
                  Contact Us
                </Button>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Apply;