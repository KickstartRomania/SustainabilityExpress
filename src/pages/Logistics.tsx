import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ArrowRight, Coffee, Shield, Heart } from 'lucide-react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
const Logistics = () => {
  return <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-16">
            <span className="inline-block bg-primary/20 text-primary px-4 py-2 rounded-full text-lg font-semibold border border-primary/30 mb-6">
              3-5 April 2026
            </span>
            <h1 className="text-5xl font-bold text-foreground mb-6">Logistics</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Everything you need to know about the train journey, venue details, 
              safety protocols, and what to expect during your 48 hours on rails.
            </p>
          </div>

          {/* Meals & Refreshments */}
          <section className="mb-20">
            <div className="text-center mb-12">
              <Coffee className="h-16 w-16 text-primary mx-auto mb-6" />
              <h2 className="text-3xl font-bold text-foreground mb-4">Meals & Refreshments</h2>
            </div>
            
            <Card className="card-elevated max-w-4xl mx-auto">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-4">What's Included</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>✅ 7 meals throughout the journey</li>
                    <li>✅ Unlimited coffee and beverages</li>
                    <li>✅ Healthy snacks and energy boosters</li>
                    <li>✅ Special dietary accommodations</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-4">Sustainability Rewards</h3>
                  <div className="bg-primary/10 rounded-2xl p-4">
                    <p className="text-foreground font-semibold mb-2">🌱 Be sustainable </p>
                    <p className="text-muted-foreground text-sm">
                      Bring your reusables. Win our deep respect.

                    </p>
                  </div>
                </div>
              </div>
            </Card>
          </section>

          {/* Safety Protocols */}
          <section className="mb-20">
            <div className="text-center mb-12">
              <Shield className="h-16 w-16 text-primary mx-auto mb-6" />
              <h2 className="text-3xl font-bold text-foreground mb-4">Safety & Security</h2>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
              <Card className="card-elevated">
                <h3 className="text-xl font-bold text-foreground mb-4">Safety Measures</h3>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    Staffed coaches throughout the journey
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    Emergency contacts shared at boarding
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    24/7 support team available
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    First aid kits and medical protocols
                  </li>
                </ul>
              </Card>

              <Card className="card-elevated">
                <h3 className="text-xl font-bold text-foreground mb-4">Emergency Procedures</h3>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-accent rounded-full"></div>
                    Clear evacuation plans posted
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-accent rounded-full"></div>
                    Direct line to train security
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-accent rounded-full"></div>
                    Medical emergency protocols
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-accent rounded-full"></div>
                    Organizer contact information
                  </li>
                </ul>
              </Card>
            </div>
          </section>

          {/* Code of Conduct */}
          <section className="mb-20">
            <div className="text-center mb-12">
              <Heart className="h-16 w-16 text-primary mx-auto mb-6" />
              <h2 className="text-3xl font-bold text-foreground mb-4">Code of Conduct</h2>
            </div>
            
            <Card className="card-elevated max-w-4xl mx-auto">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-foreground mb-4">Our Community Principles</h3>
                <p className="text-muted-foreground">
                  Creating a safe, inclusive, and productive environment for everyone
                </p>
              </div>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-bold text-foreground mb-4 text-primary">✓ Expected Behavior</h4>
                  <ul className="space-y-2 text-muted-foreground text-sm">
                    <li>• Be kind and respectful to all participants</li>
                    <li>• Respect train staff and follow their instructions</li>
                    <li>• Collaborate openly and share knowledge</li>
                    <li>• Maintain workspace cleanliness</li>
                    <li>• Support fellow participants</li>
                    <li>• Focus on constructive feedback</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-bold text-foreground mb-4 text-accent">✗ Unacceptable Behavior</h4>
                  <ul className="space-y-2 text-muted-foreground text-sm">
                    <li>• No harassment of any kind</li>
                    <li>• No discrimination or offensive language</li>
                    <li>• No disruptive or aggressive behavior</li>
                    <li>• No unauthorized recording/photography</li>
                    <li>• No violation of train safety rules</li>
                    <li>• No substance abuse</li>
                  </ul>
                </div>
              </div>
              
              <div className="mt-8 p-4 bg-accent/10 rounded-2xl">
                <h4 className="font-bold text-foreground mb-2">🚨 Reporting Issues</h4>
                <p className="text-muted-foreground text-sm">
                  Report any issues immediately to organizers. We take all reports seriously and 
                  will respond promptly to ensure everyone's safety and comfort.
                </p>
              </div>
            </Card>
          </section>

          {/* Packing List */}
          <section className="mb-16">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">Final Packing Checklist</h2>
              <p className="text-xl text-muted-foreground">
                Make sure you're prepared for 48 hours of innovation
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              <Card className="card-elevated">
                <h3 className="text-lg font-bold text-foreground mb-4">🔧 Tech Essentials</h3>
                <ul className="space-y-2 text-muted-foreground text-sm">
                  <li>□ Laptop & charger</li>
                  <li>□ Mobile hotspot/USB data</li>
                  <li>□ Power bank</li>
                  <li>□ Cables & adapters</li>
                  <li>□ Any sensors/hardware needed</li>
                </ul>
              </Card>
              
              <Card className="card-elevated">
                <h3 className="text-lg font-bold text-foreground mb-4">👕 Personal Items</h3>
                <ul className="space-y-2 text-muted-foreground text-sm">
                  <li>□ Comfortable clothes</li>
                  <li>□ Toiletries</li>
                  <li>□ ID</li>
                  <li>□ Small pillow (optional)</li>
                  <li>□ Personal medications</li>
                </ul>
              </Card>
              
              
            </div>
          </section>

          {/* CTA */}
          <div className="text-center">
            <h2 className="text-3xl font-bold text-foreground mb-6">Ready to Board?</h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              All set with logistics? Time to secure your seat on the most innovative train journey in Romania.
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
export default Logistics;