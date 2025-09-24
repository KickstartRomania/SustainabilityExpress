import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ArrowRight, Users, Star, Plus } from 'lucide-react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

const Mentors = () => {
  // Placeholder mentor data - in a real app this would come from a CMS or API
  const mentors = [
    {
      name: 'Dr. Elena Popescu',
      role: 'Sustainability Director',
      company: 'Astra Trans Carpatic',
      expertise: ['Sustainable Transport', 'Green Operations', 'Rail Innovation'],
      image: '/api/placeholder/150/150'
    },
    {
      name: 'Andrei Ionescu',
      role: 'Lead Developer',
      company: 'TechForGood',
      expertise: ['Mobile Apps', 'IoT', 'Environmental Tech'],
      image: '/api/placeholder/150/150'
    },
    {
      name: 'Maria Stanescu',
      role: 'UX Design Lead',
      company: 'GreenDesign Studio',
      expertise: ['User Experience', 'Sustainable Design', 'Behavioral Psychology'],
      image: '/api/placeholder/150/150'
    },
    {
      name: 'Radu Gheorghiu',
      role: 'Venture Partner',
      company: 'EcoVentures',
      expertise: ['Startup Funding', 'Business Strategy', 'Climate Tech'],
      image: '/api/placeholder/150/150'
    },
    {
      name: 'Carmen Dumitrescu',
      role: 'Operations Manager',
      company: 'Romanian Railways',
      expertise: ['Railway Operations', 'Logistics', 'Efficiency Optimization'],
      image: '/api/placeholder/150/150'
    },
    {
      name: 'Vlad Petre',
      role: 'Data Scientist',
      company: 'TransportAI',
      expertise: ['Machine Learning', 'Transportation Data', 'Predictive Analytics'],
      image: '/api/placeholder/150/150'
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-foreground mb-6">Mentors & Jury</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Learn from industry experts who will guide your innovation journey and 
              evaluate the impact of your sustainable transportation solutions.
            </p>
          </div>

          {/* Mentor Grid */}
          <section className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">Meet Our Expert Panel</h2>
              <p className="text-lg text-muted-foreground">
                Experienced professionals from sustainability, technology, design, and business
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {mentors.map((mentor, index) => (
                <Card key={index} className="card-elevated text-center group hover:scale-105 transition-transform duration-300">
                  <div className="w-24 h-24 bg-primary/20 rounded-full mx-auto mb-6 flex items-center justify-center">
                    <Users className="h-12 w-12 text-primary" />
                  </div>
                  
                  <h3 className="text-xl font-bold text-foreground mb-2">{mentor.name}</h3>
                  <p className="text-primary font-semibold mb-1">{mentor.role}</p>
                  <p className="text-muted-foreground mb-4">{mentor.company}</p>
                  
                  <div className="flex flex-wrap gap-2 justify-center">
                    {mentor.expertise.map((skill, skillIndex) => (
                      <span 
                        key={skillIndex}
                        className="px-3 py-1 bg-secondary text-secondary-foreground text-xs rounded-full"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </Card>
              ))}
            </div>
          </section>

          {/* Mentorship Process */}
          <section className="mb-20 bg-secondary/30 rounded-3xl p-12">
            <div className="text-center mb-12">
              <Star className="h-16 w-16 text-primary mx-auto mb-6" />
              <h2 className="text-3xl font-bold text-foreground mb-4">How Mentorship Works</h2>
              <p className="text-lg text-muted-foreground">
                Get guidance throughout your 48-hour innovation journey
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary rounded-full mx-auto mb-6 flex items-center justify-center">
                  <span className="text-primary-foreground font-bold text-xl">1</span>
                </div>
                <h3 className="text-xl font-bold text-foreground mb-4">Initial Guidance</h3>
                <p className="text-muted-foreground">
                  Meet mentors during team formation to validate ideas and get initial direction for your project.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-primary rounded-full mx-auto mb-6 flex items-center justify-center">
                  <span className="text-primary-foreground font-bold text-xl">2</span>
                </div>
                <h3 className="text-xl font-bold text-foreground mb-4">Regular Checkpoints</h3>
                <p className="text-muted-foreground">
                  Scheduled mentorship sessions throughout Saturday to review progress and provide strategic advice.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-primary rounded-full mx-auto mb-6 flex items-center justify-center">
                  <span className="text-primary-foreground font-bold text-xl">3</span>
                </div>
                <h3 className="text-xl font-bold text-foreground mb-4">Final Evaluation</h3>
                <p className="text-muted-foreground">
                  Mentors serve as jury members, providing feedback and selecting winners based on impact and innovation.
                </p>
              </div>
            </div>
          </section>

          {/* What Mentors Provide */}
          <section className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">What Our Mentors Provide</h2>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
              <Card className="card-elevated">
                <h3 className="text-xl font-bold text-foreground mb-6">Expert Knowledge</h3>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    Industry insights and best practices
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    Technical expertise and validation
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    Sustainability framework guidance
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    Market opportunity assessment
                  </li>
                </ul>
              </Card>

              <Card className="card-elevated">
                <h3 className="text-xl font-bold text-foreground mb-6">Career Development</h3>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-accent rounded-full"></div>
                    Networking opportunities
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-accent rounded-full"></div>
                    Professional advice and tips
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-accent rounded-full"></div>
                    Potential collaboration offers
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-accent rounded-full"></div>
                    Future opportunity introductions
                  </li>
                </ul>
              </Card>
            </div>
          </section>

          {/* Become a Mentor CTA */}
          <section className="mb-16">
            <Card className="card-elevated max-w-4xl mx-auto text-center bg-gradient-to-r from-primary/10 to-accent/10 border-primary/20">
              <Plus className="h-16 w-16 text-primary mx-auto mb-6" />
              <h2 className="text-3xl font-bold text-foreground mb-4">Become a Mentor</h2>
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                Are you an expert in sustainability, technology, design, or business? 
                Join our mentor network and help shape the future of sustainable transportation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button className="btn-hero">
                  Apply as Mentor <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button variant="outline" size="lg">
                  Learn More
                </Button>
              </div>
            </Card>
          </section>

          {/* CTA for Participants */}
          <div className="text-center">
            <h2 className="text-3xl font-bold text-foreground mb-6">Ready to Learn from the Best?</h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Join our hackathon and get direct access to industry leaders who are passionate about sustainable innovation.
            </p>
            <Button asChild className="btn-hero text-xl px-12 py-6">
              <Link to="/apply">
                Apply Now <ArrowRight className="ml-2 h-6 w-6" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Mentors;