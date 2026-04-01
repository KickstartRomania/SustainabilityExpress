import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ArrowRight, Clock, MapPin, Coffee, Luggage, Moon } from 'lucide-react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
const Agenda = () => {
  return <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-16">
            <span className="inline-block bg-primary/20 text-primary px-4 py-2 rounded-full text-lg font-semibold border border-primary/30 mb-6">
              3-5 April 2026
            </span>
            <h1 className="text-5xl font-bold text-foreground mb-6">Detailed Agenda</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Your complete 48-hour journey from Bucharest to Timisoara and back. 
              Every moment designed for maximum collaboration and innovation.
            </p>
          </div>

          {/* Timeline */}
          <div className="max-w-4xl mx-auto mb-16">
            <div className="space-y-8">
              {/* Friday */}
              <Card className="card-elevated">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                    <Clock className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <h2 className="text-2xl font-bold text-foreground">Friday - Departure Day</h2>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="w-20 text-sm font-medium text-muted-foreground pt-1">19:30</div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-foreground">Boarding & Check-in</h3>
                      <p className="text-muted-foreground">Meet at Bucharest station, receive welcome packages</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="w-20 text-sm font-medium text-muted-foreground pt-1">20:30</div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-foreground">Depart Bucharest</h3>
                      <p className="text-muted-foreground">Icebreakers, challenge reveal, team formation, late-night brainstorm</p>
                    </div>
                  </div>
                </div>
              </Card>

              {/* Saturday */}
              <Card className="card-elevated">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                    <MapPin className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <h2 className="text-2xl font-bold text-foreground">Saturday - Full Hack Day in Timisoara</h2>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="w-20 text-sm font-medium text-muted-foreground pt-1">09:00</div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-foreground">Arrive Timisoara</h3>
                      <p className="text-muted-foreground">Transfer to venue, breakfast, workspace setup</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="w-20 text-sm font-medium text-muted-foreground pt-1">10:00</div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-foreground">Mentorship & Build Session</h3>
                      <p className="text-muted-foreground">Full day of development with mentor checkpoints</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="w-20 text-sm font-medium text-muted-foreground pt-1">20:00</div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-foreground">Depart Back to Bucharest</h3>
                      <p className="text-muted-foreground">Board train for return journey</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="w-20 text-sm font-medium text-muted-foreground pt-1">00:30</div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-foreground">Midnight Coding Sprints</h3>
                      <p className="text-muted-foreground">Overnight development sessions (quiet coach designated)</p>
                    </div>
                  </div>
                </div>
              </Card>

              {/* Sunday */}
              <Card className="card-elevated">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                    <ArrowRight className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <h2 className="text-2xl font-bold text-foreground">Sunday - Presentations & Awards</h2>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="w-20 text-sm font-medium text-muted-foreground pt-1">09:00</div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-foreground">Arrive Bucharest</h3>
                      <p className="text-muted-foreground">Final workspace setup for presentations</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="w-20 text-sm font-medium text-muted-foreground pt-1">10:00</div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-foreground">Final Polish</h3>
                      <p className="text-muted-foreground">Last-minute improvements, presentation prep</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="w-20 text-sm font-medium text-muted-foreground pt-1">17:00</div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-foreground">Final Presentations & Awards</h3>
                      <p className="text-muted-foreground">Team pitches, jury deliberation, and celebration</p>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </div>

          {/* What to Bring & Sleep Plan */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <Card className="card-elevated">
              <Luggage className="h-8 w-8 text-primary mb-4" />
              <h2 className="text-2xl font-bold text-foreground mb-6">What to Bring</h2>
              <ul className="space-y-2 text-muted-foreground">
                <li>💻 Laptop and charger</li>
                <li>👕 Comfortable clothes for the journey</li>
                <li>🔧 Any hardware you may need</li>
                <li>⚡ Lots of energy</li>
                <li>🎉 Enthusiasm</li>
                <li>🤝 An open, collaborative mindset</li>
              </ul>
            </Card>

            <Card className="card-elevated">
              <Moon className="h-8 w-8 text-primary mb-4" />
              <h2 className="text-2xl font-bold text-foreground mb-6">Sleep Plan</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>Sustainability Express is an intense, hands-on experience designed to stretch your creativity and teamwork skills. It’s up to you to manage your sleep and stay sharp to help your team finish the project on time.</p>
                <p>Many participants choose to work through the night. It's part of the unique experience! Coffee will be available throughout the journey.</p>
              </div>
            </Card>
          </div>

          {/* CTA */}
          <div className="text-center">
            <h2 className="text-3xl font-bold text-foreground mb-6">Ready for the Journey?</h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Pack light, think big, and prepare for 48 hours of innovation on rails.
            </p>
            <Button asChild className="btn-hero text-xl px-12 py-6">
              <a href="https://luma.com/lxs8xxfm" target="_blank" rel="noopener noreferrer">
                Join Demo Day <ArrowRight className="ml-2 h-6 w-6" />
              </a>
            </Button>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>;
};
export default Agenda;