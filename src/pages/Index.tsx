import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import { ArrowRight, Users, Lightbulb, Train, Leaf, Zap, Trophy, Code, Megaphone, Briefcase, GraduationCap, Linkedin, Handshake } from 'lucide-react';
import razvanSuta from '@/assets/mentors/razvan-suta.jpeg';
import aleodorTabarcea from '@/assets/mentors/aleodor-tabarcea.jpeg';
import andreiMunteanu from '@/assets/mentors/andrei-munteanu.jpeg';
import cosminPirvu from '@/assets/mentors/cosmin-pirvu.jpeg';
import georgeBonea from '@/assets/mentors/george-bonea.jpeg';
import adrianGheorghe from '@/assets/mentors/adrian-gheorghe.jpeg';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import heroTrain from '@/assets/hero-train.jpg';
import RailLine from '@/components/decorative/RailLine';
import RailSection from '@/components/decorative/RailSection';
import SectionDivider from '@/components/decorative/SectionDivider';
import RouteVisualization from '@/components/decorative/RouteVisualization';
import JourneyRail from '@/components/decorative/JourneyRail';
import ScrollProgressRail from '@/components/decorative/ScrollProgressRail';

// Partner logos
import samedayLogo from '@/assets/partners/sameday.png';
import diarkLogo from '@/assets/partners/diark.png';
import booksterLogo from '@/assets/partners/bookster.png';
import protvLogo from '@/assets/partners/protv.png';
import skillabLogo from '@/assets/partners/skillab.png';
import hackingworkLogo from '@/assets/partners/hackingwork.png';
import pozitivestiLogo from '@/assets/partners/pozitivesti.png';
import stripeLogo from '@/assets/partners/stripe.png';

const partners = [
  { name: 'Sameday', logo: samedayLogo },
  { name: 'diARK', logo: diarkLogo },
  { name: 'Bookster', logo: booksterLogo },
  { name: 'PRO TV', logo: protvLogo },
  { name: 'Skillab', logo: skillabLogo },
  { name: 'Hacking Work', logo: hackingworkLogo },
  { name: 'Pozitivești', logo: pozitivestiLogo },
  { name: 'Stripe', logo: stripeLogo },
];
const sections = [{
  id: 'hero',
  label: 'Welcome'
}, {
  id: 'what-it-is',
  label: 'What it is'
}, {
  id: 'why-join',
  label: 'Why Join'
}, {
  id: 'journey',
  label: 'The Journey'
}, {
  id: 'themes',
  label: 'Themes'
}, {
  id: 'apply',
  label: 'Apply'
}];
const Index = () => {
  return <div className="min-h-screen bg-background">
      <Navigation />
      <ScrollProgressRail sections={sections} />
      
      {/* Hero Section */}
      <section id="hero" className="relative min-h-screen overflow-hidden">
        {/* Full-bleed background image */}
        <div className="absolute inset-0">
          <img alt="Sustainability Express - Innovation on Rails" className="w-full h-full object-cover" src="/lovable-uploads/31752dd9-3c94-4627-a76e-99dbbef51f60.png" />
          {/* Dark overlay for text readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/85 to-background/40" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/60" />
        </div>
        
        {/* Side rails */}
        <div className="absolute left-6 md:left-12 top-24 bottom-8 w-5 opacity-30 z-10">
          <RailLine variant="vertical" showLeaves />
        </div>
        
        <div className="container mx-auto px-4 py-32 relative z-10 flex items-center min-h-screen">
          <div className="max-w-2xl space-y-8">
            {/* Rail accent line */}
            <div className="w-32">
              <RailLine />
            </div>
            
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-7xl font-bold text-foreground leading-tight">
                Sustainability Express
              </h1>
              <p className="text-2xl lg:text-3xl text-gradient font-semibold">
                From Point A to Solution Station.

              </p>
              <p className="text-xl text-muted-foreground max-w-lg">
                An on-train hackathon focused on real solutions.

              </p>
            </div>
            
            {/* Stats Strip */}
            <div className="flex flex-wrap gap-4 text-sm font-medium">
              <span className="flex items-center gap-2 bg-background/60 backdrop-blur-sm px-4 py-2 rounded-full border border-border/50 text-foreground">
                <Users className="h-4 w-4 text-primary" /> 20 participants
              </span>
              <span className="flex items-center gap-2 bg-background/60 backdrop-blur-sm px-4 py-2 rounded-full border border-border/50 text-foreground">
                <Lightbulb className="h-4 w-4 text-accent" /> 10+ mentors
              </span>
              <span className="flex items-center gap-2 bg-background/60 backdrop-blur-sm px-4 py-2 rounded-full border border-border/50 text-foreground">
                <Train className="h-4 w-4 text-primary" /> Interdisciplinary teams
              </span>
              <span className="flex items-center gap-2 bg-background/60 backdrop-blur-sm px-4 py-2 rounded-full border border-border/50 text-foreground">
                <Trophy className="h-4 w-4 text-accent" /> Prizes
              </span>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild className="btn-hero text-lg px-8 py-6">
                <Link to="/apply">
                  Apply Now <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="text-lg px-8 py-6 border-2 bg-background/60 backdrop-blur-sm">
                <Link to="/how-it-works">Find Out More</Link>
              </Button>
            </div>
          </div>
        </div>
        
        {/* Bottom rail */}
        <div className="absolute bottom-0 left-0 right-0 opacity-40">
          <RailLine showTrain showLeaves />
        </div>
      </section>

      {/* What it is Section */}
      <RailSection id="what-it-is" className="py-24 bg-secondary/20" showSideRails railVariant="subtle">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <SectionDivider icon={Leaf} className="mb-8" />
            
            <h2 className="text-4xl font-bold text-foreground mb-8">What it is</h2>
            <p className="text-xl text-muted-foreground leading-relaxed mb-12">
              Sustainability Express is an on-train innovation journey turning sustainable challenges into real, testable solutions.

Our first journey takes place on a train from Bucharest to Timișoara and back.

48 hours, mostly on board, dedicated to creating implementable ideas that can change the world.

            </p>
            
            {/* Route visualization */}
            <RouteVisualization stops={['Bucharest', 'Timisoara', 'Bucharest']} />
          </div>
        </div>
      </RailSection>

      {/* Mentors & Jury Section */}
      <section id="mentors" className="py-24 relative overflow-hidden">
        {/* Subtle side rails */}
        <div className="absolute left-6 md:left-12 top-0 bottom-0 w-5 opacity-20">
          <RailLine variant="vertical" />
        </div>
        <div className="absolute right-6 md:right-12 top-0 bottom-0 w-5 opacity-15">
          <RailLine variant="vertical" showLeaves />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <SectionDivider icon={Users} className="mb-8" />
            <h2 className="text-4xl font-bold text-foreground mb-4">Mentors & Jury</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">They are the mentors and industry professionals who will help turn your idea into reality and boost its chances of success.</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Răzvan Suta */}
            <Card className="card-elevated group hover:scale-[1.02] transition-transform duration-300 relative overflow-hidden">
              <div className="absolute top-0 left-4 right-4 opacity-30">
                <RailLine />
              </div>
              <div className="pt-4 text-center">
                <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden border-4 border-primary/20">
                  <img src={razvanSuta} alt="Răzvan Suta" className="w-full h-full object-cover" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-1">Răzvan Suta</h3>
                <p className="text-muted-foreground text-sm">Angel investor & VC</p>
                <p className="text-muted-foreground text-sm mb-3">&nbsp;</p>
                <a 
                  href="https://www.linkedin.com/in/razvansuta/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-primary/10 hover:bg-primary/20 transition-colors"
                >
                  <Linkedin className="h-5 w-5 text-primary" />
                </a>
              </div>
            </Card>

            {/* Aleodor Tăbârcea */}
            <Card className="card-elevated group hover:scale-[1.02] transition-transform duration-300 relative overflow-hidden">
              <div className="absolute top-0 left-4 right-4 opacity-30">
                <RailLine />
              </div>
              <div className="pt-4 text-center">
                <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden border-4 border-primary/20">
                  <img src={aleodorTabarcea} alt="Aleodor Tăbârcea" className="w-full h-full object-cover" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-1">Aleodor Tăbârcea</h3>
                <p className="text-muted-foreground text-sm">Engineering Manager</p>
                <p className="text-muted-foreground text-sm mb-3">Stripe</p>
                <a 
                  href="https://www.linkedin.com/in/aleodor-tabarcea/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-primary/10 hover:bg-primary/20 transition-colors"
                >
                  <Linkedin className="h-5 w-5 text-primary" />
                </a>
              </div>
            </Card>

            {/* Andrei Munteanu */}
            <Card className="card-elevated group hover:scale-[1.02] transition-transform duration-300 relative overflow-hidden">
              <div className="absolute top-0 left-4 right-4 opacity-30">
                <RailLine />
              </div>
              <div className="pt-4 text-center">
                <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden border-4 border-primary/20">
                  <img src={andreiMunteanu} alt="Andrei Munteanu" className="w-full h-full object-cover" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-1">Andrei Munteanu</h3>
                <p className="text-muted-foreground text-sm">CEO & Co-founder</p>
                <p className="text-muted-foreground text-sm mb-3">Cowork & Prow</p>
                <a 
                  href="https://www.linkedin.com/in/andreicosminmunteanu/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-primary/10 hover:bg-primary/20 transition-colors"
                >
                  <Linkedin className="h-5 w-5 text-primary" />
                </a>
              </div>
            </Card>

            {/* Adrian Gheorghe */}
            <Card className="card-elevated group hover:scale-[1.02] transition-transform duration-300 relative overflow-hidden">
              <div className="absolute top-0 left-4 right-4 opacity-30">
                <RailLine />
              </div>
              <div className="pt-4 text-center">
                <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden border-4 border-primary/20">
                  <img src={adrianGheorghe} alt="Adrian Gheorghe" className="w-full h-full object-cover" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-1">Adrian Gheorghe</h3>
                <p className="text-muted-foreground text-sm">Startup Advisor</p>
                <p className="text-muted-foreground text-sm mb-3">Doers Ventures</p>
                <a 
                  href="https://www.linkedin.com/in/adrian-gheorghe/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-primary/10 hover:bg-primary/20 transition-colors"
                >
                  <Linkedin className="h-5 w-5 text-primary" />
                </a>
              </div>
            </Card>

            {/* Cosmin Pîrvu */}
            <Card className="card-elevated group hover:scale-[1.02] transition-transform duration-300 relative overflow-hidden">
              <div className="absolute top-0 left-4 right-4 opacity-30">
                <RailLine />
              </div>
              <div className="pt-4 text-center">
                <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden border-4 border-primary/20">
                  <img src={cosminPirvu} alt="Cosmin Pîrvu" className="w-full h-full object-cover" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-1">Cosmin Pîrvu</h3>
                <p className="text-muted-foreground text-sm">Startup Program Manager</p>
                <p className="text-muted-foreground text-sm mb-3">Veridion</p>
                <a 
                  href="https://www.linkedin.com/in/cosminpirvu/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-primary/10 hover:bg-primary/20 transition-colors"
                >
                  <Linkedin className="h-5 w-5 text-primary" />
                </a>
              </div>
            </Card>

            {/* George Bonea */}
            <Card className="card-elevated group hover:scale-[1.02] transition-transform duration-300 relative overflow-hidden">
              <div className="absolute top-0 left-4 right-4 opacity-30">
                <RailLine />
              </div>
              <div className="pt-4 text-center">
                <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden border-4 border-primary/20">
                  <img src={georgeBonea} alt="George Bonea" className="w-full h-full object-cover" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-1">George Bonea</h3>
                <p className="text-muted-foreground text-sm">Copywriter &</p>
                <p className="text-muted-foreground text-sm mb-3">Communication Consultant</p>
                <a 
                  href="https://www.linkedin.com/in/george-bonea-b0494b91/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-primary/10 hover:bg-primary/20 transition-colors"
                >
                  <Linkedin className="h-5 w-5 text-primary" />
                </a>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Who is it for Section */}
      <section id="who-is-it-for" className="py-24 relative overflow-hidden">
        {/* Subtle side rails */}
        <div className="absolute left-6 md:left-12 top-0 bottom-0 w-5 opacity-20">
          <RailLine variant="vertical" />
        </div>
        <div className="absolute right-6 md:right-12 top-0 bottom-0 w-5 opacity-15">
          <RailLine variant="vertical" showLeaves />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <SectionDivider icon={Users} className="mb-8" />
            <h2 className="text-4xl font-bold text-foreground">Who is it for?</h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <Card className="card-elevated group hover:scale-[1.02] transition-transform duration-300 relative overflow-hidden">
              <div className="absolute top-0 left-4 right-4 opacity-30">
                <RailLine />
              </div>
              <div className="pt-4 flex gap-5">
                <div className="w-14 h-14 bg-primary rounded-full flex-shrink-0 flex items-center justify-center">
                  <Code className="h-7 w-7 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-2">Tech & Product Builders</h3>
                  <p className="text-muted-foreground">
                    Developers, engineers, or product profiles who want to design and prototype practical digital solutions for sustainable mobility challenges.
                  </p>
                </div>
              </div>
            </Card>

            <Card className="card-elevated group hover:scale-[1.02] transition-transform duration-300 relative overflow-hidden">
              <div className="absolute top-0 left-4 right-4 opacity-30">
                <RailLine />
              </div>
              <div className="pt-4 flex gap-5">
                <div className="w-14 h-14 bg-accent rounded-full flex-shrink-0 flex items-center justify-center">
                  <Megaphone className="h-7 w-7 text-accent-foreground" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-2">Communication & Strategy Thinkers</h3>
                  <p className="text-muted-foreground">
                    Marketing, communication, or storytelling professionals interested in shaping how sustainability solutions are framed, explained, and pitched.
                  </p>
                </div>
              </div>
            </Card>

            <Card className="card-elevated group hover:scale-[1.02] transition-transform duration-300 relative overflow-hidden">
              <div className="absolute top-0 left-4 right-4 opacity-30">
                <RailLine />
              </div>
              <div className="pt-4 flex gap-5">
                <div className="w-14 h-14 bg-primary rounded-full flex-shrink-0 flex items-center justify-center">
                  <Briefcase className="h-7 w-7 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-2">Business & Entrepreneurship Profiles</h3>
                  <p className="text-muted-foreground">
                    People with a business, management, or startup background who want to turn ideas into viable, implementable concepts with real-world potential.
                  </p>
                </div>
              </div>
            </Card>

            <Card className="card-elevated group hover:scale-[1.02] transition-transform duration-300 relative overflow-hidden">
              <div className="absolute top-0 left-4 right-4 opacity-30">
                <RailLine />
              </div>
              <div className="pt-4 flex gap-5">
                <div className="w-14 h-14 bg-accent rounded-full flex-shrink-0 flex items-center justify-center">
                  <GraduationCap className="h-7 w-7 text-accent-foreground" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-2">High School Students (16–18)</h3>
                  <p className="text-muted-foreground">
                    Curious, motivated students passionate about sustainability and technology, eager to learn by working alongside professionals in a real innovation environment.
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

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
            <h2 className="text-4xl font-bold text-foreground">Why come on board?</h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="card-elevated text-center group hover:scale-105 transition-transform duration-300 relative overflow-hidden">
              {/* Rail accent top */}
              <div className="absolute top-0 left-4 right-4 opacity-30">
                <RailLine />
              </div>
              <div className="pt-4">
                <div className="w-16 h-16 bg-primary rounded-full mx-auto mb-6 flex items-center justify-center text-primary-foreground font-bold text-xl">
                  1
                </div>
                <h3 className="text-xl font-bold text-foreground mb-4">Create Real Impact</h3>
                <p className="text-muted-foreground">
                  Develop concrete, implementable solutions to sustainable challenges, ideas designed to move beyond theory and into real-world testing.
                </p>
              </div>
            </Card>

            <Card className="card-elevated text-center group hover:scale-105 transition-transform duration-300 relative overflow-hidden">
              <div className="absolute top-0 left-4 right-4 opacity-30">
                <RailLine />
              </div>
              <div className="pt-4">
                <div className="w-16 h-16 bg-primary rounded-full mx-auto mb-6 flex items-center justify-center text-primary-foreground font-bold text-xl">
                  2
                </div>
                <h3 className="text-xl font-bold text-foreground mb-4">Learn and Grow Fast</h3>
                <p className="text-muted-foreground">
                  Gain hands-on skills through intensive workshops, mentorship, and teamwork across tech, business, and communication disciplines.
                </p>
              </div>
            </Card>

            <Card className="card-elevated text-center group hover:scale-105 transition-transform duration-300 relative overflow-hidden">
              <div className="absolute top-0 left-4 right-4 opacity-30">
                <RailLine />
              </div>
              <div className="pt-4">
                <div className="w-16 h-16 bg-primary rounded-full mx-auto mb-6 flex items-center justify-center text-primary-foreground font-bold text-xl">
                  3
                </div>
                <h3 className="text-xl font-bold text-foreground mb-4">Experience Innovation in Motion</h3>
                <p className="text-muted-foreground">
                  Join a unique on-train hackathon that brings together purpose-driven people for an unforgettable journey of collaboration and innovation.
                </p>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Why is it Different Section */}
      <RailSection id="why-different" className="py-24 bg-secondary/20" showSideRails railVariant="subtle">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <SectionDivider icon={Zap} className="mb-8" />
            <h2 className="text-4xl font-bold text-foreground">Why is it different?</h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="card-elevated text-center group hover:scale-105 transition-transform duration-300 relative overflow-hidden">
              <div className="absolute top-0 left-4 right-4 opacity-30">
                <RailLine />
              </div>
              <div className="pt-4">
                <div className="w-16 h-16 bg-primary rounded-full mx-auto mb-6 flex items-center justify-center">
                  <Train className="h-8 w-8 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-4">It Happens on a Moving Train</h3>
                <p className="text-muted-foreground">
                  Unlike classic hackathons, the entire experience unfolds on a night train, turning travel time into an intensive, distraction-free innovation space.
                </p>
              </div>
            </Card>

            <Card className="card-elevated text-center group hover:scale-105 transition-transform duration-300 relative overflow-hidden">
              <div className="absolute top-0 left-4 right-4 opacity-30">
                <RailLine />
              </div>
              <div className="pt-4">
                <div className="w-16 h-16 bg-primary rounded-full mx-auto mb-6 flex items-center justify-center">
                  <Lightbulb className="h-8 w-8 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-4">Built for Real-World Impact</h3>
                <p className="text-muted-foreground">
                  Ideas are designed from the start to be feasible, pilot-ready, and relevant for companies, public institutions, and NGOs — not just conceptual exercises.
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
                <h3 className="text-xl font-bold text-foreground mb-4">Strong Follow-Up Mindset</h3>
                <p className="text-muted-foreground">
                  The project goes beyond the event itself, offering pathways for piloting, partnerships, and long-term collaboration with sponsors and stakeholders.
                </p>
              </div>
            </Card>
          </div>
        </div>
      </RailSection>

      {/* Timeline Section */}
      <RailSection id="journey" className="py-24 bg-secondary/20" showSideRails railVariant="subtle">
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
              <h3 className="text-2xl font-bold text-foreground mb-2">Departure & Ideation</h3>
              <p className="text-sm font-medium text-primary mb-4">(Bucharest → Timișoara)</p>
              <p className="text-muted-foreground">
                The journey starts on a night train where teams are formed, challenges are introduced, and the first ideas take shape during intensive on-board collaboration.
              </p>
            </div>

            <div className="text-center relative z-10">
              <div className="w-20 h-20 bg-primary rounded-full mx-auto mb-6 flex items-center justify-center text-white font-bold text-2xl shadow-lg">
                2
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-2">Deep Work & Mentorship</h3>
              <p className="text-sm font-medium text-primary mb-4">(Timișoara)</p>
              <p className="text-muted-foreground">
                A full day of workshops, expert mentorship, and team work focused on refining concepts, validating ideas, and preparing clear solution directions.
              </p>
            </div>

            <div className="text-center relative z-10">
              <div className="w-20 h-20 bg-primary rounded-full mx-auto mb-6 flex items-center justify-center text-white font-bold text-2xl shadow-lg">
                3
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-2">Prototyping & Final Pitches</h3>
              <p className="text-sm font-medium text-primary mb-4">(Timișoara → Bucharest)</p>
              <p className="text-muted-foreground">
                Teams finalize prototypes and presentations on the return train, then pitch their solutions in Bucharest in front of a jury and partners.
              </p>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <Button asChild variant="outline" size="lg" className="group">
              <Link to="/agenda">
                See Full Agenda
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </div>
        </div>
      </RailSection>

      {/* Partners Section */}
      <section id="partners" className="py-24 relative overflow-hidden">
        {/* Side rails */}
        <div className="absolute left-6 md:left-12 top-0 bottom-0 w-5 opacity-20">
          <RailLine variant="vertical" />
        </div>
        <div className="absolute right-6 md:right-12 top-0 bottom-0 w-5 opacity-15">
          <RailLine variant="vertical" showLeaves />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-12">
            <SectionDivider icon={Handshake} className="mb-8" />
            <h2 className="text-4xl font-bold text-foreground mb-4">Our Partners</h2>
            <p className="text-xl text-muted-foreground">Supported by industry leaders committed to sustainable innovation</p>
          </div>
          
          {/* Logo Slider */}
          <div className="relative overflow-hidden">
            {/* Gradient masks */}
            <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-background to-transparent z-10" />
            <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-background to-transparent z-10" />
            
            {/* Scrolling container */}
            <div className="flex animate-scroll items-center">
              {/* First set of logos */}
              {partners.map((partner, index) => (
                <div
                  key={`first-${index}`}
                  className="flex-shrink-0 mx-4 w-32 h-20 flex items-center justify-center"
                >
                  <img
                    src={partner.logo}
                    alt={partner.name}
                    className="max-w-full max-h-full object-contain rounded-lg"
                  />
                </div>
              ))}
              {/* Duplicate set for seamless loop */}
              {partners.map((partner, index) => (
                <div
                  key={`second-${index}`}
                  className="flex-shrink-0 mx-4 w-32 h-20 flex items-center justify-center"
                >
                  <img
                    src={partner.logo}
                    alt={partner.name}
                    className="max-w-full max-h-full object-contain rounded-lg"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

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
            return <Card key={index} className="p-6 text-center hover:shadow-card transition-all duration-300 group relative overflow-hidden hover:-translate-y-1">
                  {/* Rail accent */}
                  <div className="absolute bottom-0 left-4 right-4 opacity-20">
                    <RailLine />
                  </div>
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
      <section id="apply" className="py-24 bg-primary relative overflow-hidden">
        {/* Rail decorations in CTA */}
        <div className="absolute top-0 left-0 right-0 opacity-20">
          <div className="h-6 flex flex-col justify-between">
            <div className="h-0.5 bg-white/30" />
            <div className="flex justify-between px-8">
              {Array.from({
              length: 20
            }).map((_, i) => <div key={i} className="w-1 h-3 bg-white/20 rounded-sm" />)}
            </div>
            <div className="h-0.5 bg-white/30" />
          </div>
        </div>
        
        <div className="absolute bottom-0 left-0 right-0 opacity-20">
          <div className="h-6 flex flex-col justify-between">
            <div className="h-0.5 bg-white/30" />
            <div className="flex justify-between px-8">
              {Array.from({
              length: 20
            }).map((_, i) => <div key={i} className="w-1 h-3 bg-white/20 rounded-sm" />)}
            </div>
            <div className="h-0.5 bg-white/30" />
          </div>
        </div>
        
        {/* Subtle floating elements */}
        <Leaf className="absolute top-12 left-12 h-10 w-10 text-white/15 rotate-45 animate-float" />
        <Train className="absolute bottom-12 right-16 h-8 w-8 text-white/15 animate-float" style={{
        animationDelay: '1s'
      }} />
        
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