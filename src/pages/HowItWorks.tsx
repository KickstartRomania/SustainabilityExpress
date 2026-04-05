import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ArrowRight, Users, Laptop, Award, Clock, Target, Star } from 'lucide-react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
const HowItWorks = () => {
  return <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-16">
            <span className="inline-block bg-primary/20 text-primary px-4 py-2 rounded-full text-lg font-semibold border border-primary/30 mb-6">
              Summer 2026
            </span>
            <h1 className="text-5xl font-bold text-foreground mb-6">How It Works</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We turn the journey into the destination. Sustainability Express brings innovators on board a night train, combining intense teamwork, expert mentorship, and real-world challenges to transform bold ideas into feasible solutions for sustainable travel.
            </p>
          </div>

          {/* Format Section */}
          <section className="mb-20">
            <h2 className="text-3xl font-bold text-foreground mb-8 text-center">Format</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="card-elevated">
                <Users className="h-12 w-12 text-primary mb-4" />
                <h3 className="text-xl font-bold text-foreground mb-4">Team Formation</h3>
                <p className="text-muted-foreground">
                  The journey starts together. On Friday night, ideas meet people, and we help form balanced teams with complementary skills and perspectives.

                </p>
              </Card>

              <Card className="card-elevated">
                <Laptop className="h-12 w-12 text-primary mb-4" />
                <h3 className="text-xl font-bold text-foreground mb-4">Build & Prototype</h3>
                <p className="text-muted-foreground">
                  Turn your idea into a tangible prototype (digital or strategic) prioritizing solutions that are realistic and testable.

                </p>
              </Card>

              <Card className="card-elevated">
                <Award className="h-12 w-12 text-primary mb-4" />
                <h3 className="text-xl font-bold text-foreground mb-4">Mentorship & Pitch</h3>
                <p className="text-muted-foreground">
                  Refine your idea with expert guidance along the way, then pitch your solution to an experienced jury for feedback, recognition, and awards.

                </p>
              </Card>
            </div>
          </section>

          {/* Deliverables Section */}
          <section className="mb-20 bg-secondary/20 rounded-3xl p-12">
            <h2 className="text-3xl font-bold text-foreground mb-8 text-center">Deliverables</h2>
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white font-bold text-sm">1</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground mb-2">5-7 Minute Pitch
                  </h3>
                    <p className="text-muted-foreground">
                      Bring your solution to life through a live demo, interactive mockup, or a compelling presentation that clearly shows how it works and why it matters.


                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white font-bold text-sm">2</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground mb-2">One-Page Summary</h3>
                    <p className="text-muted-foreground">
                      Capture your idea on a single page, outlining the problem, your solution, its expected impact, and the next steps toward real-world implementation.





                    </p>
                  </div>
                </div>
              </div>
              
              <div className="bg-card rounded-2xl p-6 border border-border">
                <h4 className="font-bold text-foreground mb-4">💡 Pro Tips</h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Solve a real, well-defined problem.



                </li>
                  <li>• Design for feasibility, not complexity.

                </li>
                  <li>• Use mentors to validate key assumptions early.

                </li>
                  <li>• Show clear impact and next steps beyond the weekend.
                </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Judging Criteria */}
          <section className="mb-20">
            <h2 className="text-3xl font-bold text-foreground mb-8 text-center">Judging Criteria</h2>
            <div className="grid md:grid-cols-5 gap-6">
              {[{
              category: 'Impact',
              description: 'Potential to create meaningful change',
              icon: Target
            }, {
              category: 'Feasibility',
              description: 'Realistic implementation path',
              icon: Clock
            }, {
              category: 'Innovation',
              description: 'Creative approach to the problem',
              icon: Star
            }, {
              category: 'Prototype',
              description: 'Quality of working demonstration',
              icon: Laptop
            }, {
              category: 'Storytelling',
              description: 'Clear communication of vision',
              icon: Users
            }].map((criteria, index) => {
              const Icon = criteria.icon;
              return <Card key={index} className="p-6 text-center hover:shadow-card transition-shadow duration-300">
                    <Icon className="h-8 w-8 text-primary mx-auto mb-3" />
                    <h3 className="font-bold text-foreground mb-2">{criteria.category}</h3>
                    <p className="text-sm text-muted-foreground">{criteria.description}</p>
                  </Card>;
            })}
            </div>
          </section>

          {/* Selection & Eligibility */}
          <section className="mb-20 bg-primary/5 rounded-3xl p-12">
            <h2 className="text-3xl font-bold text-foreground mb-8 text-center">Selection & Eligibility</h2>
            <div className="max-w-4xl mx-auto">
              <div className="grid md:grid-cols-2 gap-12">
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-4">Who Can Apply</h3>
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      Students and recent graduates
                    </li>
                    <li className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      Junior and mid-level professionals
                    </li>
                    <li className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      Developers, designers, product managers
                    </li>
                    <li className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      Business and marketing professionals
                    </li>
                    <li className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      Sustainability enthusiasts
                    </li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-4">Selection Process</h3>
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-accent rounded-full"></div>
                      Limited to 20 participants
                    </li>
                    <li className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-accent rounded-full"></div>
                      Priority for diverse skill sets




                    </li>
                    <li className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-accent rounded-full"></div>
                      Focus on motivation and enthusiasm

                    </li>
                    <li className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-accent rounded-full"></div>
                      Interdisciplinary teams with varied backgrounds

                    </li>
                    <li className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-accent rounded-full"></div>
                      Confirmation includes next steps
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* What We Provide */}
          <section className="mb-20">
            <h2 className="text-3xl font-bold text-foreground mb-8 text-center">What We Provide</h2>
            <Card className="card-elevated max-w-4xl mx-auto">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-4">Included</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>✅ Train seats and workspace</li>
                    <li>✅ Venue space in Chisinau</li>
                    <li>✅ All meals and coffee</li>
                    <li>✅ Wi-Fi (where available)</li>
                    <li>✅ On-board mentorship</li>
                    <li>✅ Event swag and materials</li>
                  </ul>
                </div>
                
                <div>
                <h3 className="text-xl font-bold text-foreground mb-4">Bring Yourself</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>💻 Laptop and charger</li>
                    <li>👕 Comfortable clothes for the journey</li>
                    <li>🔧 Any hardware you may need</li>
                    <li>⚡ Lots of energy</li>
                    <li>🎉 Enthusiasm</li>
                    <li>🤝 An open, collaborative mindset</li>
                  </ul>
                </div>
              </div>
            </Card>
          </section>

          {/* CTA */}
          <div className="text-center">
            <h2 className="text-3xl font-bold text-foreground mb-6">Ready to Board?</h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Join us for an unforgettable weekend of innovation, collaboration, and sustainable impact.
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
    </div>;
};
export default HowItWorks;