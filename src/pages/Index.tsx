import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import { ArrowRight, Users, Lightbulb, Train, Leaf, Zap } from 'lucide-react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import heroTrain from '@/assets/hero-train.jpg';
import RailLine from '@/components/decorative/RailLine';
import RailSection from '@/components/decorative/RailSection';
import SectionDivider from '@/components/decorative/SectionDivider';
import RouteVisualization from '@/components/decorative/RouteVisualization';
import JourneyRail from '@/components/decorative/JourneyRail';
import ScrollProgressRail from '@/components/decorative/ScrollProgressRail';

const sections = [
  { id: 'hero', label: 'Welcome' },
  { id: 'what-it-is', label: 'What it is' },
  { id: 'why-join', label: 'Why Join' },
  { id: 'journey', label: 'The Journey' },
  { id: 'themes', label: 'Themes' },
  { id: 'apply', label: 'Apply' },
];

const Index = () => {
  return <div className="min-h-screen bg-background">
      <Navigation />
      <ScrollProgressRail sections={sections} />
      
      {/* Hero Section */}
      <section id="hero" className="relative pt-16 pb-32 overflow-hidden">
      
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-hero opacity-5"></div>
        
        {/* Side rails */}
        <div className="absolute left-6 md:left-12 top-24 bottom-8 w-5 opacity-30">
          <RailLine variant="vertical" showLeaves />
        </div>
        <div className="absolute right-6 md:right-12 top-24 bottom-8 w-5 opacity-20">
          <RailLine variant="vertical" />
        </div>
        
        <div className="container mx-auto px-4 py-16 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Hero Text */}
            <div className="space-y-8">
              <div className="space-y-4">
                {/* Rail accent line */}
                <div className="w-32 mb-6">
                  <RailLine />
                </div>
                
                <h1 className="text-5xl lg:text-7xl font-bold text-foreground leading-tight">
                  Sustainability Express
                </h1>
                <p className="text-2xl lg:text-3xl text-gradient font-semibold">
                  Hackathon on Rails
                </p>
                <p className="text-xl text-muted-foreground max-w-lg">
                  48 hours. On a moving train. Real solutions for greener travel.
                </p>
              </div>
              
              {/* Stats Strip */}
              <div className="flex flex-wrap gap-4 text-sm font-medium text-muted-foreground">
                <span className="flex items-center gap-2 bg-secondary/50 px-4 py-2 rounded-full border border-border/50">
                  <Users className="h-4 w-4 text-primary" /> 20 participants
                </span>
                <span className="flex items-center gap-2 bg-secondary/50 px-4 py-2 rounded-full border border-border/50">
                  <Lightbulb className="h-4 w-4 text-accent" /> Prototype-first
                </span>
                <span className="flex items-center gap-2 bg-secondary/50 px-4 py-2 rounded-full border border-border/50">
                  <Train className="h-4 w-4 text-primary" /> Mentors on board
                </span>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild className="btn-hero text-lg px-8 py-6">
                  <Link to="/apply">
                    Apply Now <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="text-lg px-8 py-6 border-2">
                  <Link to="/how-it-works">Learn More</Link>
                </Button>
              </div>
            </div>

            {/* Hero Image */}
            <div className="relative">
              {/* Glowing backdrop */}
              <div className="absolute inset-0 bg-gradient-hero rounded-3xl blur-3xl opacity-20 animate-pulse"></div>
              
              {/* Rail frame corners */}
              <div className="absolute -top-3 -left-3 w-12 h-12">
                <div className="absolute top-0 left-0 w-full h-1 bg-primary/40 rounded-full" />
                <div className="absolute top-0 left-0 h-full w-1 bg-primary/40 rounded-full" />
              </div>
              <div className="absolute -bottom-3 -right-3 w-12 h-12">
                <div className="absolute bottom-0 right-0 w-full h-1 bg-accent/40 rounded-full" />
                <div className="absolute bottom-0 right-0 h-full w-1 bg-accent/40 rounded-full" />
              </div>
              
              {/* Small leaf accents */}
              <Leaf className="absolute -top-4 right-16 h-6 w-6 text-primary/40 rotate-45 animate-float" />
              <Leaf className="absolute bottom-12 -left-4 h-5 w-5 text-primary/30 -rotate-12 animate-float" style={{ animationDelay: '1.5s' }} />
              
              <img src={heroTrain} alt="Sustainability Express - Innovation on Rails" className="relative rounded-3xl shadow-2xl animate-float" />
            </div>
          </div>
        </div>
        
        {/* Bottom rail */}
        <div className="absolute bottom-0 left-0 right-0 opacity-40">
          <RailLine showTrain showLeaves />
        </div>
      </section>

      {/* What it is Section */}
      <RailSection 
        id="what-it-is"
        className="py-24 bg-secondary/20" 
        showSideRails
        railVariant="subtle"
      >
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <SectionDivider icon={Leaf} className="mb-8" />
            
            <h2 className="text-4xl font-bold text-foreground mb-8">What it is</h2>
            <p className="text-xl text-muted-foreground leading-relaxed mb-12">
              A weekend hackathon hosted on a train, traveling Bucharest → Timisoara → Bucharest. 
              Build practical, weekend-ready solutions that make train travel more sustainable and more loved.
            </p>
            
            {/* Route visualization */}
            <RouteVisualization stops={['Bucharest', 'Timisoara', 'Bucharest']} />
          </div>
        </div>
      </RailSection>

      {/* Why Join Section */}
      <section id="why-join" className="py-24 relative overflow-hidden">
        {/* Subtle side rails */}
        <div className="absolute left-6 md:left-12 top-0 bottom-0 w-5 opacity-20">
          <RailLine variant="vertical" showLeaves />
        </div>
        <div className="absolute right-6 md:right-12 top-0 bottom-0 w-5 opacity-15">
          <RailLine variant="vertical" />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <SectionDivider icon={Train} className="mb-8" />
            <h2 className="text-4xl font-bold text-foreground">Why Join</h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="card-elevated text-center group hover:scale-105 transition-transform duration-300 relative overflow-hidden">
              {/* Rail accent top */}
              <div className="absolute top-0 left-4 right-4 opacity-30">
                <RailLine />
              </div>
              <div className="pt-4">
                <div className="w-16 h-16 bg-primary rounded-full mx-auto mb-6 flex items-center justify-center">
                  <Lightbulb className="h-8 w-8 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-4">Build a real prototype with on-train mentoring</h3>
                <p className="text-muted-foreground">
                  Get hands-on mentoring while building something tangible that could actually change how people experience train travel.
                </p>
              </div>
            </Card>

            <Card className="card-elevated text-center group hover:scale-105 transition-transform duration-300 relative overflow-hidden">
              <div className="absolute top-0 left-4 right-4 opacity-30">
                <RailLine />
              </div>
              <div className="pt-4">
                <div className="w-16 h-16 bg-primary rounded-full mx-auto mb-6 flex items-center justify-center">
                  <Users className="h-8 w-8 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-4">Meet future co-founders and collaborators</h3>
                <p className="text-muted-foreground">
                  Connect with passionate developers, designers, and entrepreneurs who share your vision for sustainable innovation.
                </p>
              </div>
            </Card>

            <Card className="card-elevated text-center group hover:scale-105 transition-transform duration-300 relative overflow-hidden">
              <div className="absolute top-0 left-4 right-4 opacity-30">
                <RailLine />
              </div>
              <div className="pt-4">
                <div className="w-16 h-16 bg-primary rounded-full mx-auto mb-6 flex items-center justify-center">
                  <Leaf className="h-8 w-8 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-4">Shape the future of sustainable mobility</h3>
                <p className="text-muted-foreground">
                  Be part of the movement that makes eco-friendly travel the preferred choice for the next generation.
                </p>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <RailSection 
        id="journey"
        className="py-24 bg-secondary/20"
        showSideRails
        railVariant="subtle"
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <SectionDivider icon={Train} className="mb-8" />
            <h2 className="text-4xl font-bold text-foreground mb-4">The Journey</h2>
            <p className="text-xl text-muted-foreground">3 steps to sustainable innovation</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto relative">
            {/* Connecting rail between steps */}
            <JourneyRail steps={3} activeStep={1} />
            
            <div className="text-center relative z-10">
              <div className="w-20 h-20 bg-primary rounded-full mx-auto mb-6 flex items-center justify-center text-white font-bold text-2xl shadow-lg">
                1
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">Depart</h3>
              <p className="text-muted-foreground">
                Friday 20:30 from Bucharest. Icebreakers, team formation, and late-night brainstorming as we roll towards Timisoara.
              </p>
            </div>

            <div className="text-center relative z-10">
              <div className="w-20 h-20 bg-primary rounded-full mx-auto mb-6 flex items-center justify-center text-white font-bold text-2xl shadow-lg">
                2
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">Build</h3>
              <p className="text-muted-foreground">
                Saturday in Timisoara: full hack day with mentorship. Evening departure back to Bucharest with overnight coding sprints.
              </p>
            </div>

            <div className="text-center relative z-10">
              <div className="w-20 h-20 bg-primary rounded-full mx-auto mb-6 flex items-center justify-center text-white font-bold text-2xl shadow-lg">
                3
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">Return with Impact</h3>
              <p className="text-muted-foreground">
                Sunday 14:00 final presentations & awards in Bucharest. Take home connections, prototypes, and inspiration.
              </p>
            </div>
          </div>
        </div>
      </RailSection>

      {/* Themes Teaser */}
      <section id="themes" className="py-24 relative overflow-hidden">
        {/* Side rails */}
        <div className="absolute left-6 md:left-12 top-0 bottom-0 w-5 opacity-20">
          <RailLine variant="vertical" />
        </div>
        <div className="absolute right-6 md:right-12 top-0 bottom-0 w-5 opacity-15">
          <RailLine variant="vertical" showLeaves />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <SectionDivider icon={Zap} className="mb-8" />
            <h2 className="text-4xl font-bold text-foreground mb-4">Challenge Themes</h2>
            <p className="text-xl text-muted-foreground">Five focus areas for sustainable innovation</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {[{
              icon: Leaf,
              title: 'Green Passenger Experience',
              color: 'bg-green-500'
            }, {
              icon: Zap,
              title: 'Smart Waste & Circular',
              color: 'bg-blue-500'
            }, {
              icon: Lightbulb,
              title: 'Eco-Nudges & Awareness',
              color: 'bg-yellow-500'
            }, {
              icon: Users,
              title: 'Community & Culture',
              color: 'bg-purple-500'
            }, {
              icon: Train,
              title: 'Digital Tools for Crew',
              color: 'bg-orange-500'
            }].map((theme, index) => {
              const Icon = theme.icon;
              return (
                <Card key={index} className="p-6 text-center hover:shadow-card transition-all duration-300 group relative overflow-hidden hover:-translate-y-1">
                  {/* Rail accent */}
                  <div className="absolute bottom-0 left-4 right-4 opacity-20">
                    <RailLine />
                  </div>
                  <div className={`w-12 h-12 ${theme.color} rounded-full mx-auto mb-4 flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="font-semibold text-foreground">{theme.title}</h3>
                </Card>
              );
            })}
          </div>
          
          <div className="text-center mt-12">
            <Button asChild variant="outline" size="lg" className="group">
              <Link to="/themes">
                Explore All Themes
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section id="apply" className="py-24 bg-primary relative overflow-hidden">
        {/* Rail decorations in CTA */}
        <div className="absolute top-0 left-0 right-0 opacity-20">
          <div className="h-6 flex flex-col justify-between">
            <div className="h-0.5 bg-white/30" />
            <div className="flex justify-between px-8">
              {Array.from({ length: 20 }).map((_, i) => (
                <div key={i} className="w-1 h-3 bg-white/20 rounded-sm" />
              ))}
            </div>
            <div className="h-0.5 bg-white/30" />
          </div>
        </div>
        
        <div className="absolute bottom-0 left-0 right-0 opacity-20">
          <div className="h-6 flex flex-col justify-between">
            <div className="h-0.5 bg-white/30" />
            <div className="flex justify-between px-8">
              {Array.from({ length: 20 }).map((_, i) => (
                <div key={i} className="w-1 h-3 bg-white/20 rounded-sm" />
              ))}
            </div>
            <div className="h-0.5 bg-white/30" />
          </div>
        </div>
        
        {/* Subtle floating elements */}
        <Leaf className="absolute top-12 left-12 h-10 w-10 text-white/15 rotate-45 animate-float" />
        <Train className="absolute bottom-12 right-16 h-8 w-8 text-white/15 animate-float" style={{ animationDelay: '1s' }} />
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-4xl font-bold text-white mb-6">Seats Are Limited</h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Join innovators, builders, and sustainability enthusiasts for an unforgettable weekend of creation on rails.
          </p>
          <Button asChild size="lg" className="bg-white text-primary hover:bg-white/90 text-xl px-12 py-6 font-bold group">
            <Link to="/apply">
              Apply Now <ArrowRight className="ml-2 h-6 w-6 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
        </div>
      </section>
      
      <Footer />
    </div>;
};

export default Index;