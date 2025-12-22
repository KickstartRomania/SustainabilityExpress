import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import { ArrowRight, Calendar, Users, Lightbulb, Train, Leaf, Zap } from 'lucide-react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import heroTrain from '@/assets/hero-train.jpg';
import FloatingLeaves from '@/components/decorative/FloatingLeaves';
import MovingTrain from '@/components/decorative/MovingTrain';
import CircuitLines from '@/components/decorative/CircuitLines';
import RailPattern from '@/components/decorative/RailPattern';

const Index = () => {
  return <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative pt-16 pb-32 overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute inset-0 bg-gradient-hero opacity-5"></div>
        <FloatingLeaves className="z-0" count={8} />
        <CircuitLines className="left-0 top-20 w-64 h-64 text-primary/20" />
        <CircuitLines className="right-0 bottom-20 w-48 h-48 text-primary/20 rotate-180" />
        
        {/* Moving train decoration */}
        <MovingTrain className="top-32 left-0 right-0 w-full" direction="right" />
        
        <div className="container mx-auto px-4 py-16 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Hero Text */}
            <div className="space-y-8">
              <div className="space-y-4">
                {/* Decorative rail line */}
                <div className="flex items-center gap-3 mb-4">
                  <div className="h-0.5 w-12 bg-gradient-to-r from-primary to-accent animate-gradient-shift" style={{ backgroundSize: '200% 200%' }}></div>
                  <Train className="h-5 w-5 text-primary animate-bounce-subtle" />
                  <div className="h-0.5 w-8 bg-gradient-to-r from-accent to-transparent"></div>
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
              
              {/* Stats Strip with icons */}
              <div className="flex flex-wrap gap-6 text-sm font-medium text-muted-foreground">
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
                <Button asChild className="btn-hero text-lg px-8 py-6 animate-pulse-glow">
                  <Link to="/apply">
                    Apply Now <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="text-lg px-8 py-6 border-2">
                  <Link to="/how-it-works">Learn More</Link>
                </Button>
              </div>
            </div>

            {/* Hero Image with decorations */}
            <div className="relative">
              {/* Glowing backdrop */}
              <div className="absolute inset-0 bg-gradient-hero rounded-3xl blur-3xl opacity-20 animate-pulse"></div>
              
              {/* Decorative corner elements */}
              <div className="absolute -top-4 -left-4 w-16 h-16 border-l-2 border-t-2 border-primary/40 rounded-tl-2xl"></div>
              <div className="absolute -bottom-4 -right-4 w-16 h-16 border-r-2 border-b-2 border-accent/40 rounded-br-2xl"></div>
              
              {/* Leaf decorations */}
              <Leaf className="absolute -top-6 right-12 h-8 w-8 text-primary/30 animate-float" />
              <Leaf className="absolute bottom-8 -left-6 h-6 w-6 text-primary/40 animate-float" style={{ animationDelay: '1s' }} />
              
              <img src={heroTrain} alt="Sustainability Express - Innovation on Rails" className="relative rounded-3xl shadow-2xl animate-float" />
            </div>
          </div>
        </div>
        
        {/* Bottom rail track decoration */}
        <div className="absolute bottom-0 left-0 right-0 h-8 overflow-hidden">
          <div className="flex items-center justify-center gap-4 h-full opacity-20">
            <div className="flex-1 h-0.5 bg-gradient-to-r from-transparent via-primary to-transparent"></div>
          </div>
          <div className="absolute bottom-2 left-0 right-0 flex justify-between px-8">
            {Array.from({ length: 30 }).map((_, i) => (
              <div key={i} className="w-1 h-3 bg-muted-foreground/10 rounded-sm"></div>
            ))}
          </div>
        </div>
      </section>

      {/* What it is Section */}
      <section className="py-24 bg-secondary/20 relative overflow-hidden">
        {/* Rail pattern on sides */}
        <RailPattern className="left-4 top-0 w-12 h-full opacity-30" />
        <RailPattern className="right-4 top-0 w-12 h-full opacity-30" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            {/* Section decoration */}
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="h-0.5 w-16 bg-gradient-to-r from-transparent to-primary"></div>
              <Leaf className="h-6 w-6 text-primary" />
              <div className="h-0.5 w-16 bg-gradient-to-l from-transparent to-primary"></div>
            </div>
            
            <h2 className="text-4xl font-bold text-foreground mb-8">What it is</h2>
            <p className="text-xl text-muted-foreground leading-relaxed">A weekend hackathon hosted on a train, traveling Bucharest → Timisoara → Bucharest. Build practical, weekend-ready solutions that make train travel more sustainable and more loved.</p>
            
            {/* Route visualization */}
            <div className="mt-12 flex items-center justify-center gap-4 flex-wrap">
              <div className="flex items-center gap-2 bg-card px-6 py-3 rounded-full border border-border">
                <div className="w-3 h-3 rounded-full bg-primary animate-pulse"></div>
                <span className="font-semibold text-foreground">Bucharest</span>
              </div>
              <div className="flex items-center gap-1">
                <Train className="h-5 w-5 text-primary" />
                <div className="w-12 h-0.5 bg-gradient-to-r from-primary to-accent"></div>
                <Train className="h-5 w-5 text-primary" />
              </div>
              <div className="flex items-center gap-2 bg-card px-6 py-3 rounded-full border border-border">
                <div className="w-3 h-3 rounded-full bg-accent animate-pulse" style={{ animationDelay: '0.5s' }}></div>
                <span className="font-semibold text-foreground">Timisoara</span>
              </div>
              <div className="flex items-center gap-1">
                <Train className="h-5 w-5 text-primary" />
                <div className="w-12 h-0.5 bg-gradient-to-r from-accent to-primary"></div>
                <Train className="h-5 w-5 text-primary" />
              </div>
              <div className="flex items-center gap-2 bg-card px-6 py-3 rounded-full border border-border">
                <div className="w-3 h-3 rounded-full bg-primary animate-pulse" style={{ animationDelay: '1s' }}></div>
                <span className="font-semibold text-foreground">Bucharest</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Join Section */}
      <section className="py-24 relative overflow-hidden">
        {/* Floating leaves background */}
        <FloatingLeaves className="z-0 opacity-50" count={4} />
        
        <div className="container mx-auto px-4 relative z-10">
            <div className="text-center mb-16">
              <div className="flex items-center justify-center gap-3 mb-4">
                <Leaf className="h-6 w-6 text-primary" />
                <h2 className="text-4xl font-bold text-foreground">Why Join</h2>
                <Leaf className="h-6 w-6 text-primary" />
              </div>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              <Card className="card-elevated text-center group hover:scale-105 transition-transform duration-300 relative overflow-hidden">
                {/* Decorative corner */}
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-primary/10 to-transparent rounded-bl-full"></div>
                <div className="w-16 h-16 bg-primary rounded-full mx-auto mb-6 flex items-center justify-center group-hover:animate-pulse-glow">
                  <Lightbulb className="h-8 w-8 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-4">Build a real prototype with on-train mentoring</h3>
                <p className="text-muted-foreground">
                  Get hands-on mentoring while building something tangible that could actually change how people experience train travel.
                </p>
              </Card>

              <Card className="card-elevated text-center group hover:scale-105 transition-transform duration-300 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-accent/10 to-transparent rounded-bl-full"></div>
                <div className="w-16 h-16 bg-primary rounded-full mx-auto mb-6 flex items-center justify-center group-hover:animate-pulse-glow">
                  <Users className="h-8 w-8 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-4">Meet future co-founders and collaborators</h3>
                <p className="text-muted-foreground">
                  Connect with passionate developers, designers, and entrepreneurs who share your vision for sustainable innovation.
                </p>
              </Card>

              <Card className="card-elevated text-center group hover:scale-105 transition-transform duration-300 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-primary/10 to-transparent rounded-bl-full"></div>
                <div className="w-16 h-16 bg-primary rounded-full mx-auto mb-6 flex items-center justify-center group-hover:animate-pulse-glow">
                  <Leaf className="h-8 w-8 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-4">Shape the future of sustainable mobility</h3>
                <p className="text-muted-foreground">
                  Be part of the movement that makes eco-friendly travel the preferred choice for the next generation.
                </p>
              </Card>
            </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-24 bg-secondary/20 relative overflow-hidden">
        {/* Track pattern background */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-primary"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-4 mb-4">
              <Train className="h-6 w-6 text-primary" />
              <h2 className="text-4xl font-bold text-foreground">The Journey</h2>
              <Train className="h-6 w-6 text-primary" />
            </div>
            <p className="text-xl text-muted-foreground">3 steps to sustainable innovation</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="text-center relative">
              {/* Connecting line to next step */}
              <div className="hidden md:block absolute top-10 left-1/2 w-full h-0.5 bg-gradient-to-r from-primary to-primary/30"></div>
              <div className="w-20 h-20 bg-primary rounded-full mx-auto mb-6 flex items-center justify-center text-white font-bold text-2xl relative z-10 animate-pulse-glow">
                1
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">Depart</h3>
              <p className="text-muted-foreground">
                Friday 20:30 from Bucharest. Icebreakers, team formation, and late-night brainstorming as we roll towards Timisoara.
              </p>
            </div>

            <div className="text-center relative">
              <div className="hidden md:block absolute top-10 left-1/2 w-full h-0.5 bg-gradient-to-r from-primary to-primary/30"></div>
              <div className="w-20 h-20 bg-primary rounded-full mx-auto mb-6 flex items-center justify-center text-white font-bold text-2xl relative z-10 animate-pulse-glow" style={{ animationDelay: '0.5s' }}>
                2
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">Build</h3>
              <p className="text-muted-foreground">
                Saturday in Timisoara: full hack day with mentorship. Evening departure back to Bucharest with overnight coding sprints.
              </p>
            </div>

            <div className="text-center relative">
              <div className="w-20 h-20 bg-primary rounded-full mx-auto mb-6 flex items-center justify-center text-white font-bold text-2xl relative z-10 animate-pulse-glow" style={{ animationDelay: '1s' }}>
                3
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">Return with Impact</h3>
              <p className="text-muted-foreground">
                Sunday 14:00 final presentations & awards in Bucharest. Take home connections, prototypes, and inspiration.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Themes Teaser */}
      <section className="py-24 relative overflow-hidden">
        <CircuitLines className="right-0 top-0 w-64 h-64 text-primary/10" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Zap className="h-6 w-6 text-accent" />
              <h2 className="text-4xl font-bold text-foreground">Challenge Themes</h2>
              <Zap className="h-6 w-6 text-accent" />
            </div>
            <p className="text-xl text-muted-foreground mb-8">Five focus areas for sustainable innovation</p>
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
            return <Card key={index} className="p-6 text-center hover:shadow-card transition-all duration-300 group relative overflow-hidden hover:-translate-y-1">
                  {/* Hover glow effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className={`w-12 h-12 ${theme.color} rounded-full mx-auto mb-4 flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="font-semibold text-foreground">{theme.title}</h3>
                </Card>;
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
      <section className="py-24 bg-primary relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-64 h-64 bg-white/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
        </div>
        
        {/* Floating leaves */}
        <Leaf className="absolute top-10 left-10 h-12 w-12 text-white/20 animate-float" />
        <Leaf className="absolute bottom-10 right-20 h-8 w-8 text-white/30 animate-float" style={{ animationDelay: '1s' }} />
        <Train className="absolute top-20 right-10 h-10 w-10 text-white/20 animate-float" style={{ animationDelay: '0.5s' }} />
        
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