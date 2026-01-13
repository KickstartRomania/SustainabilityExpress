import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ArrowRight, Heart, Brain, Recycle, BarChart3, Users, GraduationCap } from 'lucide-react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
const Themes = () => {
  const themes = [{
    icon: Heart,
    title: 'Sustainable Lifestyles & Everyday Choices',
    description: 'Solutions that help individuals and communities adopt more sustainable habits in daily life — from consumption and waste to energy and food.'
  }, {
    icon: Brain,
    title: 'Climate Awareness & Behavior Change',
    description: 'Ideas that translate climate challenges into clear, relatable actions, using nudges, storytelling, or incentives to drive long-term behavior change.'
  }, {
    icon: Recycle,
    title: 'Circular Economy & Resource Efficiency',
    description: 'Concepts focused on reducing waste, extending product lifecycles, and designing systems for reuse, repair, and responsible consumption.'
  }, {
    icon: BarChart3,
    title: 'Digital Tools for Sustainability Impact',
    description: 'Platforms or data-driven solutions that help people, organizations, or cities measure, understand, and reduce their environmental footprint.'
  }, {
    icon: Users,
    title: 'Community-Led Sustainability Solutions',
    description: 'Initiatives that empower local communities, schools, or NGOs to co-create and implement sustainability projects with real local impact.'
  }, {
    icon: GraduationCap,
    title: 'Education, Youth & Future Skills for Sustainability',
    description: 'Programs, tools, or experiences that build sustainability literacy, green skills, and future-ready mindsets, especially among young people.'
  }];
  
  return <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-foreground mb-6">Themes & Challenges</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Six pathways to sustainable impact. Explore one of the challenge areas and turn bold ideas into solutions that can make sustainability real and actionable.

            </p>
          </div>

          {/* Broad Themes */}
          <section className="mb-20">
            <h2 className="text-3xl font-bold text-foreground mb-8 text-center">Broad Themes</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {themes.map((theme, index) => {
              const Icon = theme.icon;
              return <Card key={index} className="card-elevated text-center hover:scale-105 transition-transform duration-300">
                    <div className="w-16 h-16 bg-primary rounded-full mx-auto mb-6 flex items-center justify-center">
                      <Icon className="h-8 w-8 text-primary-foreground" />
                    </div>
                    <h3 className="text-xl font-bold text-foreground mb-4">{theme.title}</h3>
                    <p className="text-muted-foreground">{theme.description}</p>
                  </Card>;
            })}
            </div>
          </section>


          {/* Challenge Guidelines */}
          <section className="mb-20 bg-secondary/50 rounded-3xl p-12">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-foreground mb-4">Challenge Guidelines</h2>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              <div className="text-center">
                <div className="w-12 h-12 bg-primary rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-primary-foreground font-bold">1</span>
                </div>
                <h3 className="font-bold text-foreground mb-2">Focus on Impact</h3>
                <p className="text-muted-foreground text-sm">
                  Choose solutions that can create meaningful change in train travel sustainability
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-12 h-12 bg-primary rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-primary-foreground font-bold">2</span>
                </div>
                <h3 className="font-bold text-foreground mb-2">Build Something Real</h3>
                <p className="text-muted-foreground text-sm">
                  Create working prototypes - apps, campaigns, or tools that can be demonstrated
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-12 h-12 bg-primary rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-primary-foreground font-bold">3</span>
                </div>
                <h3 className="font-bold text-foreground mb-2">Think Beyond Code</h3>
                <p className="text-muted-foreground text-sm">
                  Business models, user experiences, and behavior change can be just as powerful
                </p>
              </div>
            </div>
          </section>

          {/* Inspiration */}
          <section className="mb-16">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">Need Inspiration?</h2>
              <p className="text-xl text-muted-foreground mb-8">
                Think about your own train travel experiences. What could make them better?
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <Card className="card-elevated">
                <h3 className="text-xl font-bold text-foreground mb-4">For Passengers</h3>
                <ul className="space-y-2 text-muted-foreground text-sm">
                  <li>• Real-time sustainability impact tracking</li>
                  <li>• Gamified waste reduction challenges</li>
                  <li>• Community building apps for eco-travelers</li>
                  <li>• Digital tools for seamless green journeys</li>
                </ul>
              </Card>
              
              <Card className="card-elevated">
                <h3 className="text-xl font-bold text-foreground mb-4">For Operations</h3>
                <ul className="space-y-2 text-muted-foreground text-sm">
                  <li>• Staff tools for resource optimization</li>
                  <li>• Predictive maintenance for efficiency</li>
                  <li>• Supply chain sustainability tracking</li>
                  <li>• Energy consumption dashboards</li>
                </ul>
              </Card>
            </div>
          </section>

          {/* CTA */}
          <div className="text-center">
            <h2 className="text-3xl font-bold text-foreground mb-6">Ready to Choose Your Challenge?</h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Join us on the rails and help shape the future of sustainable transportation.
            </p>
            <Button asChild className="btn-hero text-xl px-12 py-6">
              <Link to="/apply">
                Start Building <ArrowRight className="ml-2 h-6 w-6" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>;
};
export default Themes;