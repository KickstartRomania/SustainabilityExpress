import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ArrowRight, Star, Plus, Linkedin, ChevronDown, ChevronUp } from 'lucide-react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { useMemo, useState } from 'react';

// Mentor images
import razvanSuta from '@/assets/mentors/razvan-suta.jpeg';
import aleodorTabarcea from '@/assets/mentors/aleodor-tabarcea.jpeg';
import alexandraJivan from '@/assets/mentors/alexandra-jivan.jpeg';
import andreiMunteanu from '@/assets/mentors/andrei-munteanu.jpeg';
import cosminPirvu from '@/assets/mentors/cosmin-pirvu.jpeg';
import georgeBonea from '@/assets/mentors/george-bonea.jpeg';
import adrianGheorghe from '@/assets/mentors/adrian-gheorghe.jpeg';
import catalinAnghel from '@/assets/mentors/catalin-anghel.jpeg';
import maximRotaru from '@/assets/mentors/maxim-rotaru.jpeg';
import raduTiciu from '@/assets/mentors/radu-ticiu.jpeg';
import iuliaAndritoiuCaizer from '@/assets/mentors/iulia-andritoiu-caizer.jpeg';
import ralucaMessai from '@/assets/mentors/raluca-messai.jpeg';

type Mentor = {
  name: string;
  role: string;
  company?: string;
  image: string;
  linkedin?: string;
};

// NOTE: New mentor photos weren't found in the workspace upload bucket during this edit,
// so these 3 use /placeholder.svg for now. Re-upload and I’ll swap them in.
const mentors: Mentor[] = [
  // Requested order:
  // 1. Aleodor
  // 2. Alexandra
  // 3. Andrei Munteanu
  // 4. Razvan
  // 5. Adrian Gheorghe
  // 6. Cosmin
  // 7. George
  // 8. Catalin
  // 9. Maxim
  {
    name: 'Aleodor Tabarcea',
    role: 'Engineering Manager',
    company: 'Stripe',
    image: aleodorTabarcea,
    linkedin: 'https://www.linkedin.com/in/aleodor-tabarcea/',
  },
  {
    name: 'Raluca Messai',
    role: 'Entrepreneur & Brand strategist',
    company: 'diARK',
    image: ralucaMessai,
    linkedin: 'https://www.linkedin.com/in/ralucamessai/',
  },
  {
    name: 'Andrei Munteanu',
    role: 'CEO & Co-founder',
    company: 'Cowork & Prow',
    image: andreiMunteanu,
    linkedin: 'https://www.linkedin.com/in/andreicosminmunteanu/',
  },
  {
    name: 'Radu Ticiu',
    role: 'Co-founder',
    company: 'Growceanu',
    image: raduTiciu,
    linkedin: 'https://www.linkedin.com/in/raduticiu/',
  },
  {
    name: 'Razvan Suta',
    role: 'Angel investor & VC',
    company: '',
    image: razvanSuta,
    linkedin: 'https://www.linkedin.com/in/razvansuta/',
  },
  {
    name: 'Adrian Gheorghe',
    role: 'Startup Advisor',
    company: 'Doers Ventures',
    image: adrianGheorghe,
    linkedin: 'https://www.linkedin.com/in/adrian-gheorghe/',
  },
  {
    name: 'Iulia Andritoiu Caizer',
    role: 'CEO and co-founder',
    company: 'QuickLegal',
    image: iuliaAndritoiuCaizer,
    linkedin: 'https://www.linkedin.com/in/iulia-caizer/',
  },
  {
    name: 'Catalin Anghel',
    role: 'Founder',
    company: 'Cautcurier',
    image: catalinAnghel,
    linkedin: 'https://www.linkedin.com/in/catalin-anghel-v/',
  },
  {
    name: 'Alexandra Jivan',
    role: 'Partner',
    company: 'LegalFor',
    image: alexandraJivan,
    linkedin: 'https://www.linkedin.com/in/alexandra-jivan-451794127/',
  },
  {
    name: 'Cosmin Pirvu',
    role: 'Startup Program Manager',
    company: 'Veridion',
    image: cosminPirvu,
    linkedin: 'https://www.linkedin.com/in/cosminpirvu/',
  },
  {
    name: 'George Bonea',
    role: 'Copywriter &',
    company: 'Communication Consultant',
    image: georgeBonea,
    linkedin: 'https://www.linkedin.com/in/george-bonea-b0494b91/',
  },
  {
    name: 'Maxim Rotaru',
    role: 'CEO & Founder',
    company: 'Webamboos',
    image: maximRotaru,
    linkedin: 'https://www.linkedin.com/in/maxim-rotaru/',
  },
];
const Mentors = () => {
  const [expanded, setExpanded] = useState(false);

  // Default visible mentors: 8 on desktop (lg), fewer on smaller screens.
  // We use CSS to hide extra items per breakpoint.
  const defaultVisible = {
    base: 4,
    md: 6,
    lg: 8,
  };

  const shouldShowToggle = mentors.length > defaultVisible.lg;
  const renderedMentors = useMemo(() => mentors, []);

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
            
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 max-w-6xl mx-auto">
              {renderedMentors.map((mentor, index) => {
              const visibilityClass = expanded ? 'block' : index < defaultVisible.base ? 'block' : index < defaultVisible.md ? 'hidden md:block' : index < defaultVisible.lg ? 'hidden lg:block' : 'hidden';
              return <Card key={`${mentor.name}-${mentor.company ?? ''}`} className={`card-elevated text-center group transition-transform duration-300 hover:scale-[1.01] ${visibilityClass}`}>
                    <div className="p-4">
                      <div className="w-20 h-20 md:w-24 md:h-24 mx-auto mb-3 rounded-full overflow-hidden border-2 border-primary/20">
                        <img src={mentor.image} alt={mentor.name} loading="lazy" className="w-full h-full object-cover" />
                      </div>
                      <h3 className="text-base md:text-lg font-bold text-foreground leading-snug mb-1">{mentor.name}</h3>
                      <p className="text-muted-foreground text-xs md:text-sm">{mentor.role}</p>
                      <p className="text-muted-foreground text-xs md:text-sm mb-3">{mentor.company || '\u00A0'}</p>
                      {mentor.linkedin ? <a href={mentor.linkedin} target="_blank" rel="noopener noreferrer" aria-label={`Open ${mentor.name} on LinkedIn`} className="inline-flex items-center justify-center w-9 h-9 rounded-full bg-primary/10 hover:bg-primary/20 transition-colors">
                          <Linkedin className="h-4 w-4 text-primary" />
                        </a> : null}
                    </div>
                  </Card>;
            })}
            </div>

            {shouldShowToggle && <div className="mt-10 flex justify-center">
                <Button variant="outline" onClick={() => setExpanded(v => !v)}>
                  {expanded ? <>Show less <ChevronUp className="ml-2 h-4 w-4" /></> : <>Show more <ChevronDown className="ml-2 h-4 w-4" /></>}
                </Button>
              </div>}
            
            {/* More mentors announcement */}
            <p className="text-center text-lg text-muted-foreground mt-12 italic">✨ More mentors to be announced soon...</p>
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