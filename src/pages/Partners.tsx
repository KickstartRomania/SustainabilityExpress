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
import phiniaLogo from '@/assets/partners/phinia.png';
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

import amplifyOngLogo from '@/assets/partners/amplify-ong.png';
import launchRomaniaLogo from '@/assets/partners/launch-romania.png';
import eduupLogo from '@/assets/partners/eduup.png';
import alacrityLogo from '@/assets/partners/alacrity.png';
import curteaVecheLogo from '@/assets/partners/curtea-veche.png';
import skvotLogo from '@/assets/partners/skvot.png';
import cariereLogo from '@/assets/partners/cariere.png';
import bizLogo from '@/assets/partners/biz.png';
import iqadsLogo from '@/assets/partners/iqads.png';
import zileNoptiLogo from '@/assets/partners/zile-nopti.png';
import smarkLogo from '@/assets/partners/smark.png';
import buletinBucurestiLogo from '@/assets/partners/buletin-bucuresti.png';
import coworkTimisoaraLogo from '@/assets/partners/cowork-timisoara.png';
const partners = [{
  name: 'Sameday',
  logo: samedayLogo
}, {
  name: 'diARK',
  logo: diarkLogo
}, {
  name: 'Bookster',
  logo: booksterLogo
}, {
  name: 'PRO TV',
  logo: protvLogo
}, {
  name: 'Skillab',
  logo: skillabLogo
}, {
  name: 'Hacking Work',
  logo: hackingworkLogo
}, {
  name: 'Pozitivești',
  logo: pozitivestiLogo
}, {
  name: 'Stripe',
  logo: stripeLogo
}, {
  name: 'Valentina România',
  logo: valentinaLogo
}, {
  name: 'Cartea Daliei',
  logo: carteadalieiLogo
}, {
  name: 'How to Web',
  logo: howtowebLogo
}, {
  name: 'VSFA',
  logo: vsfaLogo
}, {
  name: 'Founder Institute',
  logo: founderInstituteLogo
}, {
  name: 'AmpliFY ONG',
  logo: amplifyOngLogo
}, {
  name: 'Launch Romania',
  logo: launchRomaniaLogo
}, {
  name: 'EduUP',
  logo: eduupLogo
}, {
  name: 'Alacrity',
  logo: alacrityLogo
}, {
  name: 'Curtea Veche Publishing',
  logo: curteaVecheLogo
}, {
  name: 'SKVOT',
  logo: skvotLogo
}, {
  name: 'Cariere',
  logo: cariereLogo
}, {
  name: 'Biz',
  logo: bizLogo
}, {
  name: 'IQads',
  logo: iqadsLogo
}, {
  name: 'Zile și Nopți',
  logo: zileNoptiLogo
}, {
  name: 'SMARK',
  logo: smarkLogo
}, {
  name: 'Buletin de București',
  logo: buletinBucurestiLogo
}, {
  name: 'CO-work Timișoara',
  logo: coworkTimisoaraLogo
}];

// Validation schema for partner inquiry form
const partnerInquirySchema = z.object({
  firstName: z.string().trim().min(2, 'First name must be at least 2 characters').max(50, 'First name must be less than 50 characters'),
  lastName: z.string().trim().min(2, 'Last name must be at least 2 characters').max(50, 'Last name must be less than 50 characters'),
  email: z.string().trim().email('Please enter a valid email address').max(255, 'Email must be less than 255 characters'),
  phone: z.string().trim().min(8, 'Phone must be at least 8 characters').max(20, 'Phone must be less than 20 characters'),
  company: z.string().trim().min(2, 'Company name must be at least 2 characters').max(100, 'Company name must be less than 100 characters'),
  sponsorType: z.string().min(1, 'Sponsor type is required').max(50, 'Sponsor type too long')
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
      sponsorType
    });
    if (!validationResult.success) {
      const firstError = validationResult.error.errors[0];
      toast({
        title: "Validation Error",
        description: firstError.message,
        variant: "destructive"
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

          {/* Main Sponsor Section */}
          <section className="mb-12">
            <div className="flex justify-center">
              <div className="relative p-8 bg-gradient-to-br from-primary/10 to-card/60 rounded-2xl border-2 border-primary/30 shadow-lg shadow-primary/10 hover:scale-105 transition-transform duration-300">
                <img src={phiniaLogo} alt="PHINIA" className="h-24 w-auto object-contain" />
              </div>
            </div>
          </section>

          {/* Partner Logos Grid */}
          <section className="mb-20">
            <div className="grid grid-cols-4 sm:grid-cols-5 md:grid-cols-6 lg:grid-cols-7 xl:grid-cols-8 gap-2">
              {partners.map((partner, index) => <div key={index} className="flex items-center justify-center h-20 hover:scale-105 transition-transform duration-300">
                  <img src={partner.logo} alt={partner.name} className="max-w-full max-h-full object-contain rounded-lg" />
                </div>)}
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
                  Connect your brand to meaningful innovation and sustainability, supporting ideas that turn ambition into real-world impact.

                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-primary rounded-full mx-auto mb-6 flex items-center justify-center">
                  <Users className="h-8 w-8 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-4">Talent Access</h3>
                <p className="text-muted-foreground">
                  Build relationships with next-generation talent combining technical expertise, creativity, and a strong sustainability mindset.

                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-primary rounded-full mx-auto mb-6 flex items-center justify-center">
                  <Zap className="h-8 w-8 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-4">Innovation Pipeline</h3>
                <p className="text-muted-foreground">
                  Gain early visibility into high-potential ideas and solutions that can unlock new opportunities across your industry.

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
            
            <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto items-start">
              <Card className="card-elevated flex flex-col md:col-span-1 md:row-span-1 ring-2 ring-primary/20 scale-[1.02]">
                <h3 className="text-2xl font-bold text-foreground mb-2">Title Partner</h3>
                <p className="text-muted-foreground mb-6">Strategic leadership & maximum visibility</p>
                <div className="space-y-4 mb-6 flex-1">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-muted-foreground">Brand integrated in the official event title ("Supported by")</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-muted-foreground">Category exclusivity (e.g. banking, energy, telecom, mobility)</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-muted-foreground">Priority logo placement across all online & offline materials</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-muted-foreground">Seat on the jury and active role in defining evaluation criteria</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-muted-foreground">Mentor or speaker role in workshops</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-muted-foreground">Priority rights to pilot winning solutions</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-muted-foreground">Strong presence in media content, PR, and social media storytelling</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-muted-foreground">Access to full innovation outputs and co-branded impact reporting</span>
                  </div>
                </div>
                <Button className="w-full btn-hero mt-auto" onClick={() => openSponsorDialog('Title Sponsor')}>
                  Become Title Partner
                </Button>
              </Card>

              <Card className="card-elevated flex flex-col h-full">
                <h3 className="text-2xl font-bold text-foreground mb-2">Main Partner</h3>
                <p className="text-muted-foreground mb-6">High visibility & active involvement</p>
                <div className="space-y-4 mb-6 flex-1">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-muted-foreground">Logo placement on key communication materials</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-muted-foreground">Dedicated social media content highlighting the partnership</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-muted-foreground">Mentions in press releases and media coverage</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-muted-foreground">Opportunity to contribute mentors or speakers</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-muted-foreground">Access to solution summaries and participant talent pool</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-muted-foreground">Visibility in final presentations and demo day</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-muted-foreground">Inclusion in post-event impact and ESG reporting</span>
                  </div>
                </div>
                <Button className="w-full btn-hero mt-auto" onClick={() => openSponsorDialog('Main Partner')}>
                  Become Main Partner
                </Button>
              </Card>

              <Card className="card-elevated flex flex-col h-full">
                <h3 className="text-2xl font-bold text-foreground mb-2">Supporting Partner</h3>
                <p className="text-muted-foreground mb-6">Focused, flexible contribution</p>
                <div className="space-y-4 mb-6 flex-1">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-accent rounded-full"></div>
                    <span className="text-muted-foreground">Support through services, technology, prizes, or in-kind contributions</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-accent rounded-full"></div>
                    <span className="text-muted-foreground">Logo visibility on website, final presentations, and thank-you materials</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-accent rounded-full"></div>
                    <span className="text-muted-foreground">Brand mention in selected communication outputs</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-accent rounded-full"></div>
                    <span className="text-muted-foreground">Presence during final pitches and networking moments</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-accent rounded-full"></div>
                    <span className="text-muted-foreground">Association with sustainability, education, and innovation initiatives</span>
                  </div>
                </div>
                <Button className="w-full btn-hero mt-auto" onClick={() => openSponsorDialog('Supporting Sponsor')}>
                  Become Supporting Partner  
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