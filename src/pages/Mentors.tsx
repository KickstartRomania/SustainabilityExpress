import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ArrowRight, Users, Star, Plus, Linkedin } from 'lucide-react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

// Mentor images
import razvanSuta from '@/assets/mentors/razvan-suta.jpeg';
import aleodorTabarcea from '@/assets/mentors/aleodor-tabarcea.jpeg';
import andreiMunteanu from '@/assets/mentors/andrei-munteanu.jpeg';
import cosminPirvu from '@/assets/mentors/cosmin-pirvu.jpeg';
import georgeBonea from '@/assets/mentors/george-bonea.jpeg';
import adrianGheorghe from '@/assets/mentors/adrian-gheorghe.jpeg';
const mentors = [{
  name: 'Răzvan Suta',
  role: 'Angel investor & VC',
  company: '',
  image: razvanSuta,
  linkedin: 'https://www.linkedin.com/in/razvansuta/'
}, {
  name: 'Aleodor Tabarcea',
  role: 'Engineering Manager',
  company: 'Stripe',
  image: aleodorTabarcea,
  linkedin: 'https://www.linkedin.com/in/aleodor-tabarcea/'
}, {
  name: 'Andrei Munteanu',
  role: 'CEO & Co-founder',
  company: 'Cowork & Prow',
  image: andreiMunteanu,
  linkedin: 'https://www.linkedin.com/in/andreicosminmunteanu/'
}, {
  name: 'Adrian Gheorghe',
  role: 'Startup Advisor',
  company: 'Doers Ventures',
  image: adrianGheorghe,
  linkedin: 'https://www.linkedin.com/in/adrian-gheorghe/'
}, {
  name: 'Cosmin Pîrvu',
  role: 'Startup Program Manager',
  company: 'Veridion',
  image: cosminPirvu,
  linkedin: 'https://www.linkedin.com/in/cosminpirvu/'
}, {
  name: 'George Bonea',
  role: 'Copywriter &',
  company: 'Communication Consultant',
  image: georgeBonea,
  linkedin: 'https://www.linkedin.com/in/george-bonea-b0494b91/'
}];
const Mentors = () => {
  return <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-foreground mb-6">Meet Our Expert Panel</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">Experienced professionals from sustainability, technology, design, and business</p>
          </div>

          {/* Mentor Grid */}
          <section className="mb-20">
            <div className="text-center mb-12">
              
              
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {mentors.map((mentor, index) => <Card key={index} className="card-elevated text-center group hover:scale-[1.02] transition-transform duration-300">
                  <div className="pt-4">
                    <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden border-4 border-primary/20">
                      <img src={mentor.image} alt={mentor.name} className="w-full h-full object-cover" />
                    </div>
                    <h3 className="text-xl font-bold text-foreground mb-1">{mentor.name}</h3>
                    <p className="text-muted-foreground text-sm">{mentor.role}</p>
                    <p className="text-muted-foreground text-sm mb-3">{mentor.company || '\u00A0'}</p>
                    <a href={mentor.linkedin} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-primary/10 hover:bg-primary/20 transition-colors">
                      <Linkedin className="h-5 w-5 text-primary" />
                    </a>
                  </div>
                </Card>)}
            </div>
            
            {/* More mentors announcement */}
            <p className="text-center text-lg text-muted-foreground mt-12 italic">
              ✨ More mentors to be announced soon...
            </p>
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
                <Button asChild className="btn-hero">
                  <Link to="/mentor-apply">
                    Apply as Mentor <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
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
    </div>;
};
export default Mentors;