import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { Link } from 'react-router-dom';
import { ArrowRight, Train, Users, Zap, Globe, Handshake } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { z } from 'zod';
import { logError } from '@/lib/error-handler';

// Partner logos
import samedayLogo from '@/assets/partners/sameday.png';
import diarkLogo from '@/assets/partners/diark.png';
import booksterLogo from '@/assets/partners/bookster.png';
import protvLogo from '@/assets/partners/protv.png';
import skillabLogo from '@/assets/partners/skillab.png';
import hackingworkLogo from '@/assets/partners/hackingwork.png';
import pozitivestiLogo from '@/assets/partners/pozitivesti.png';
import stripeLogo from '@/assets/partners/stripe.png';
import valentinaLogo from '@/assets/partners/valentina.png';
import carteadalieiLogo from '@/assets/partners/carteadaliei.png';
import howtowebLogo from '@/assets/partners/howtoweb.png';
import vsfaLogo from '@/assets/partners/vsfa.png';
import founderInstituteLogo from '@/assets/partners/founder-institute.png';
import prowLogo from '@/assets/partners/prow.png';
import amplifyOngLogo from '@/assets/partners/amplify-ong.png';
import launchRomaniaLogo from '@/assets/partners/launch-romania.png';
import eduupLogo from '@/assets/partners/eduup.png';
import alacrityLogo from '@/assets/partners/alacrity.png';
import curteaVecheLogo from '@/assets/partners/curtea-veche.png';
import skvotLogo from '@/assets/partners/skvot.png';

const partners = [
  { name: 'Sameday', logo: samedayLogo },
  { name: 'diARK', logo: diarkLogo },
  { name: 'Bookster', logo: booksterLogo },
  { name: 'PRO TV', logo: protvLogo },
  { name: 'Skillab', logo: skillabLogo },
  { name: 'Hacking Work', logo: hackingworkLogo },
  { name: 'Pozitivești', logo: pozitivestiLogo },
  { name: 'Stripe', logo: stripeLogo },
  { name: 'Valentina România', logo: valentinaLogo },
  { name: 'Cartea Daliei', logo: carteadalieiLogo },
  { name: 'How to Web', logo: howtowebLogo },
  { name: 'VSFA', logo: vsfaLogo },
  { name: 'Founder Institute', logo: founderInstituteLogo },
  { name: 'Prow', logo: prowLogo },
  { name: 'AmpliFY ONG', logo: amplifyOngLogo },
  { name: 'Launch Romania', logo: launchRomaniaLogo },
  { name: 'EduUP', logo: eduupLogo },
  { name: 'Alacrity', logo: alacrityLogo },
  { name: 'Curtea Veche Publishing', logo: curteaVecheLogo },
  { name: 'SKVOT', logo: skvotLogo },
];

// Validation schema for partner inquiry form
const partnerInquirySchema = z.object({
  firstName: z.string().trim().min(2, 'First name must be at least 2 characters').max(50, 'First name must be less than 50 characters'),
  lastName: z.string().trim().min(2, 'Last name must be at least 2 characters').max(50, 'Last name must be less than 50 characters'),
  email: z.string().trim().email('Please enter a valid email address').max(255, 'Email must be less than 255 characters'),
  phone: z.string().trim().min(8, 'Phone must be at least 8 characters').max(20, 'Phone must be less than 20 characters'),
  company: z.string().trim().min(2, 'Company name must be at least 2 characters').max(100, 'Company name must be less than 100 characters'),
  sponsorType: z.string().min(1, 'Sponsor type is required').max(50, 'Sponsor type too long'),
});
const handleDownloadKit = async () => {
  try {
    const response = await fetch('/Sustainability_Express_partners.pdf');
    const blob = await response.blob();
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'Sustainability_Express_partners.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    window.URL.revokeObjectURL(url);
  } catch (error) {
    logError(error, 'partner-kit-download');
    window.open('/Sustainability_Express_partners.pdf', '_blank');
  }
};
const Partners = () => {
  const {
    toast
  } = useToast();
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [sponsorType, setSponsorType] = useState('');
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    company: ''
  });
  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };
  const openSponsorDialog = (type: string) => {
    setSponsorType(type);
    setIsDialogOpen(true);
  };
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate form data with Zod
    const validationResult = partnerInquirySchema.safeParse({
      ...formData,
      sponsorType,
    });
    
    if (!validationResult.success) {
      const firstError = validationResult.error.errors[0];
      toast({
        title: "Validation Error",
        description: firstError.message,
        variant: "destructive",
      });
      return;
    }
    
    // Form is valid, proceed with submission
    setIsDialogOpen(false);
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      company: ''
    });
    toast({
      title: "Thanks for getting in touch!",
      description: "We will reach out by email."
    });
  };
  return <div className="min-h-screen bg-background">
      <Navigation />
      
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>{sponsorType} Inquiry</DialogTitle>
            <DialogDescription>
              Fill out the form below and we'll get back to you about {sponsorType.toLowerCase()} opportunities.
            </DialogDescription>
          </DialogHeader>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="firstName">First Name *</Label>
                <Input id="firstName" value={formData.firstName} onChange={e => handleInputChange('firstName', e.target.value)} placeholder="First name" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="lastName">Last Name *</Label>
                <Input id="lastName" value={formData.lastName} onChange={e => handleInputChange('lastName', e.target.value)} placeholder="Last name" required />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email *</Label>
              <Input id="email" type="email" value={formData.email} onChange={e => handleInputChange('email', e.target.value)} placeholder="your.email@company.com" required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="phone">Phone Number *</Label>
              <Input id="phone" value={formData.phone} onChange={e => handleInputChange('phone', e.target.value)} placeholder="+40 123 456 789" required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="company">Company *</Label>
              <Input id="company" value={formData.company} onChange={e => handleInputChange('company', e.target.value)} placeholder="Your company name" required />
            </div>
            <Button type="submit" className="w-full btn-hero">
              Submit Inquiry
            </Button>
          </form>
        </DialogContent>
      </Dialog>
      
      <div className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-foreground mb-6">Partners</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Meet the organizations making Sustainability Express possible. Together, we're building 
              the future of sustainable transportation and innovation.
            </p>
          </div>

          {/* Partner Logos Grid */}
          <section className="mb-20">
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8">
              {partners.map((partner, index) => (
                <div
                  key={index}
                  className="flex items-center justify-center h-20 hover:scale-105 transition-transform duration-300"
                >
                  <img
                    src={partner.logo}
                    alt={partner.name}
                    className="max-w-full max-h-full object-contain rounded-lg"
                  />
                </div>
              ))}
            </div>
          </section>

          <section className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">Supporting Partners</h2>
              <p className="text-lg text-muted-foreground">
                Organizations that share our vision for sustainable innovation
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Tech Partners */}
              <Card className="card-elevated text-center hover:scale-105 transition-transform duration-300">
                <Zap className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-lg font-bold text-foreground mb-2">Tech Partners</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Providing tools, platforms, and technical expertise
                </p>
                <div className="space-y-2 text-xs text-muted-foreground">
                  <div className="bg-secondary/50 rounded px-2 py-1">AWS</div>
                  <div className="bg-secondary/50 rounded px-2 py-1">Microsoft</div>
                  <div className="bg-secondary/50 rounded px-2 py-1">Google Cloud</div>
                </div>
              </Card>

              {/* Community Partners */}
              <Card className="card-elevated text-center hover:scale-105 transition-transform duration-300">
                <Users className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-lg font-bold text-foreground mb-2">Community</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Developer and sustainability communities
                </p>
                <div className="space-y-2 text-xs text-muted-foreground">
                  <div className="bg-secondary/50 rounded px-2 py-1">TechHub Bucharest</div>
                  <div className="bg-secondary/50 rounded px-2 py-1">Green Tech Romania</div>
                  <div className="bg-secondary/50 rounded px-2 py-1">Startup Grind</div>
                </div>
              </Card>

              {/* Media Partners */}
              <Card className="card-elevated text-center hover:scale-105 transition-transform duration-300">
                <Globe className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-lg font-bold text-foreground mb-2">Media</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Amplifying our impact and message
                </p>
                <div className="space-y-2 text-xs text-muted-foreground">
                  <div className="bg-secondary/50 rounded px-2 py-1">TechCrunch</div>
                  <div className="bg-secondary/50 rounded px-2 py-1">Ziarul Financiar</div>
                  <div className="bg-secondary/50 rounded px-2 py-1">Romanian Startups</div>
                </div>
              </Card>

              {/* Sustainability Partners */}
              <Card className="card-elevated text-center hover:scale-105 transition-transform duration-300">
                <div className="h-12 w-12 bg-primary rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-primary-foreground font-bold text-lg">🌱</span>
                </div>
                <h3 className="text-lg font-bold text-foreground mb-2">Sustainability</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Environmental and climate organizations
                </p>
                <div className="space-y-2 text-xs text-muted-foreground">
                  <div className="bg-secondary/50 rounded px-2 py-1">WWF Romania</div>
                  <div className="bg-secondary/50 rounded px-2 py-1">Climate Action</div>
                  <div className="bg-secondary/50 rounded px-2 py-1">EcoVisio</div>
                </div>
              </Card>
            </div>
          </section>

          {/* Partner Benefits */}
          <section className="mb-20 bg-secondary/30 rounded-3xl p-12">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">Partnership Benefits</h2>
              <p className="text-lg text-muted-foreground">
                Why leading organizations choose to partner with Sustainability Express
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary rounded-full mx-auto mb-6 flex items-center justify-center">
                  <Handshake className="h-8 w-8 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-4">Brand Association</h3>
                <p className="text-muted-foreground">
                  Associate your brand with innovation, sustainability, and cutting-edge technology 
                  in the transportation sector.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-primary rounded-full mx-auto mb-6 flex items-center justify-center">
                  <Users className="h-8 w-8 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-4">Talent Access</h3>
                <p className="text-muted-foreground">
                  Connect with top developers, designers, and entrepreneurs who are passionate 
                  about sustainable solutions.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-primary rounded-full mx-auto mb-6 flex items-center justify-center">
                  <Zap className="h-8 w-8 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-4">Innovation Pipeline</h3>
                <p className="text-muted-foreground">
                  Get early access to breakthrough ideas and solutions that could transform 
                  your industry or create new opportunities.
                </p>
              </div>
            </div>
          </section>

          {/* Sponsor Packages */}
          <section className="mb-16">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">Sponsorship Opportunities</h2>
              <p className="text-lg text-muted-foreground">
                Multiple ways to support innovation and sustainability
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
              <Card className="card-elevated">
                <h3 className="text-2xl font-bold text-foreground mb-6">Title Sponsor</h3>
                <div className="space-y-4 mb-6">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-muted-foreground">Logo on all event materials</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-muted-foreground">Speaking opportunity at opening</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-muted-foreground">Branded workspace area</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-muted-foreground">Access to all participant data</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-muted-foreground">Post-event networking session</span>
                  </div>
                </div>
                <Button className="w-full btn-hero" onClick={() => openSponsorDialog('Title Sponsor')}>
                  Become Title Sponsor
                </Button>
              </Card>

              <Card className="card-elevated">
                <h3 className="text-2xl font-bold text-foreground mb-6">Supporting Sponsor</h3>
                <div className="space-y-4 mb-6">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-accent rounded-full"></div>
                    <span className="text-muted-foreground">Logo on website and materials</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-accent rounded-full"></div>
                    <span className="text-muted-foreground">Social media mentions</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-accent rounded-full"></div>
                    <span className="text-muted-foreground">Branded swag distribution</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-accent rounded-full"></div>
                    <span className="text-muted-foreground">Networking opportunities</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-accent rounded-full"></div>
                    <span className="text-muted-foreground">Event photos and highlights</span>
                  </div>
                </div>
                <Button variant="outline" className="w-full" onClick={() => openSponsorDialog('Supporting Sponsor')}>
                  Become Supporting Sponsor  
                </Button>
              </Card>
            </div>
          </section>

          {/* Partner CTA */}
          <div className="text-center">
            <h2 className="text-3xl font-bold text-foreground mb-6">Partner with Us</h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Join leading organizations in supporting the next generation of sustainable transportation innovators.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="btn-hero text-xl px-12 py-6" onClick={() => openSponsorDialog('Partnership')}>
                Partner with Us <ArrowRight className="ml-2 h-6 w-6" />
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 py-6" onClick={handleDownloadKit}>
                Download Partnership Kit
              </Button>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>;
};
export default Partners;