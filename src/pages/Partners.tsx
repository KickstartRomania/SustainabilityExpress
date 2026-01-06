import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ArrowRight, Train, Users, Zap, Globe, Handshake } from 'lucide-react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

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
    console.error('Download failed:', error);
    window.open('/Sustainability_Express_partners.pdf', '_blank');
  }
};

const Partners = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
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

          {/* Partner Categories */}
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
                <Button className="w-full btn-hero">
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
                <Button variant="outline" className="w-full">
                  Learn More
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
              <Button className="btn-hero text-xl px-12 py-6">
                Partner with Us <ArrowRight className="ml-2 h-6 w-6" />
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="text-lg px-8 py-6"
                onClick={handleDownloadKit}
              >
                Download Partnership Kit
              </Button>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Partners;