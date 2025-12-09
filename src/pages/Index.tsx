import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import { ArrowRight, Calendar, Users, Lightbulb, Train, Leaf, Zap } from 'lucide-react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import heroTrain from '@/assets/hero-train.jpg';
const Index = () => {
  return <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative pt-16 pb-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-hero opacity-5"></div>
        <div className="container mx-auto px-4 py-16">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Hero Text */}
            <div className="space-y-8">
              <div className="space-y-4">
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
              <div className="flex flex-wrap gap-6 text-sm font-medium text-muted-foreground">
                <span className="flex items-center gap-2">
                  <Users className="h-4 w-4" /> 20 participants
                </span>
                <span className="flex items-center gap-2">
                  <Lightbulb className="h-4 w-4" /> Prototype-first
                </span>
                <span className="flex items-center gap-2">
                  <Train className="h-4 w-4" /> Mentors on board
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
              <div className="absolute inset-0 bg-gradient-hero rounded-3xl blur-3xl opacity-20 animate-pulse"></div>
              <img src={heroTrain} alt="Sustainability Express - Innovation on Rails" className="relative rounded-3xl shadow-2xl animate-float" />
            </div>
          </div>
        </div>
      </section>

      {/* What it is Section */}
      <section className="py-24 bg-secondary/20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-foreground mb-8">What it is</h2>
            <p className="text-xl text-muted-foreground leading-relaxed">A weekend hackathon hosted on a train, traveling Bucharest → Timisoara → Bucharest. Build practical, weekend-ready solutions that make train travel more sustainable and more loved.</p>
          </div>
        </div>
      </section>

      {/* Why Join Section */}
      <section className="py-24">
        <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-foreground mb-6">Why Join</h2>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              <Card className="card-elevated text-center group hover:scale-105 transition-transform duration-300">
                <div className="w-16 h-16 bg-primary rounded-full mx-auto mb-6 flex items-center justify-center">
                  <Lightbulb className="h-8 w-8 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-4">Build a real prototype with on-train mentoring</h3>
                <p className="text-muted-foreground">
                  Get hands-on mentoring while building something tangible that could actually change how people experience train travel.
                </p>
              </Card>

              <Card className="card-elevated text-center group hover:scale-105 transition-transform duration-300">
                <div className="w-16 h-16 bg-primary rounded-full mx-auto mb-6 flex items-center justify-center">
                  <Users className="h-8 w-8 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-4">Meet future co-founders and collaborators</h3>
                <p className="text-muted-foreground">
                  Connect with passionate developers, designers, and entrepreneurs who share your vision for sustainable innovation.
                </p>
              </Card>

              <Card className="card-elevated text-center group hover:scale-105 transition-transform duration-300">
                <div className="w-16 h-16 bg-primary rounded-full mx-auto mb-6 flex items-center justify-center">
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
      <section className="py-24 bg-secondary/20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-6">The Journey</h2>
            <p className="text-xl text-muted-foreground">3 steps to sustainable innovation</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="text-center">
              <div className="w-20 h-20 bg-primary rounded-full mx-auto mb-6 flex items-center justify-center text-white font-bold text-2xl">
                1
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">Depart</h3>
              <p className="text-muted-foreground">
                Friday 20:30 from Bucharest. Icebreakers, team formation, and late-night brainstorming as we roll towards Timisoara.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-primary rounded-full mx-auto mb-6 flex items-center justify-center text-white font-bold text-2xl">
                2
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">Build</h3>
              <p className="text-muted-foreground">
                Saturday in Timisoara: full hack day with mentorship. Evening departure back to Bucharest with overnight coding sprints.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-primary rounded-full mx-auto mb-6 flex items-center justify-center text-white font-bold text-2xl">
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
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-6">Challenge Themes</h2>
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
            return <Card key={index} className="p-6 text-center hover:shadow-card transition-shadow duration-300">
                  <div className={`w-12 h-12 ${theme.color} rounded-full mx-auto mb-4 flex items-center justify-center`}>
                    <Icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="font-semibold text-foreground">{theme.title}</h3>
                </Card>;
          })}
          </div>
          
          <div className="text-center mt-12">
            <Button asChild variant="outline" size="lg">
              <Link to="/themes">Explore All Themes</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-primary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Seats Are Limited</h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Join innovators, builders, and sustainability enthusiasts for an unforgettable weekend of creation on rails.
          </p>
          <Button asChild size="lg" className="bg-white text-primary hover:bg-white/90 text-xl px-12 py-6 font-bold">
            <Link to="/apply">
              Apply Now <ArrowRight className="ml-2 h-6 w-6" />
            </Link>
          </Button>
        </div>
      </section>
      
      <Footer />
    </div>;
};
export default Index;