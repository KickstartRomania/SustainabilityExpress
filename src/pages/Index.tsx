import { useEffect, useRef, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import { ArrowRight, Users, Lightbulb, Train, Leaf, Zap, Trophy, Code, Megaphone, Briefcase, GraduationCap, Linkedin, Handshake, Heart, Brain, Recycle, BarChart3, ChevronDown, ChevronUp } from 'lucide-react';
import razvanSuta from '@/assets/mentors/razvan-suta.jpeg';
import aleodorTabarcea from '@/assets/mentors/aleodor-tabarcea.jpeg';
import alexandraJivan from '@/assets/mentors/alexandra-jivan.jpeg';
import cosminPirvu from '@/assets/mentors/cosmin-pirvu.jpeg';
import georgeBonea from '@/assets/mentors/george-bonea.jpeg';
import adrianGheorghe from '@/assets/mentors/adrian-gheorghe.jpeg';
import catalinAnghel from '@/assets/mentors/catalin-anghel.jpeg';
import maximRotaru from '@/assets/mentors/maxim-rotaru.jpeg';
import raduTiciu from '@/assets/mentors/radu-ticiu.jpeg';
import iuliaAndritoiuCaizer from '@/assets/mentors/iulia-andritoiu-caizer.jpeg';
import ralucaMessai from '@/assets/mentors/raluca-messai.jpeg';
import andreeaNicolae from '@/assets/mentors/andreea-nicolae.jpeg';
import stefaniaDuta from '@/assets/mentors/stefania-duta.png';
import nicoletaPirvu from '@/assets/mentors/nicoleta-pirvu.png';
import raduCristianGheorghe from '@/assets/mentors/radu-cristian-gheorghe.png';
import tomaGrozavescu from '@/assets/mentors/toma-grozavescu.png';
import zoltanBereczki from '@/assets/mentors/zoltan-bereczki.png';
import alexandruGolub from '@/assets/mentors/alexandru-golub.png';
import mihaiBurada from '@/assets/mentors/mihai-burada.png';
import tiberiuLepadatu from '@/assets/mentors/tiberiu-lepadatu.png';
import cosminBolocan from '@/assets/mentors/cosmin-bolocan.png';
import nickUngureanu from '@/assets/mentors/nick-ungureanu.png';
type Mentor = {
  name: string;
  role: string;
  company?: string;
  image: string;
  linkedin?: string;
  imagePosition?: string;
};

const mentors: Mentor[] = [{
  name: 'Raluca Messai',
  role: 'Entrepreneur & Brand strategist',
  company: 'diARK',
  image: ralucaMessai,
  linkedin: 'https://www.linkedin.com/in/ralucamessai/'
}, {
  name: 'Aleodor Tabarcea',
  role: 'Engineering Manager',
  company: 'Stripe',
  image: aleodorTabarcea,
  linkedin: 'https://www.linkedin.com/in/aleodor-tabarcea/'
}, {
  name: 'Iulia Andritoiu Caizer',
  role: 'CEO and co-founder',
  company: 'QuickLegal',
  image: iuliaAndritoiuCaizer,
  linkedin: 'https://www.linkedin.com/in/iulia-caizer/'
}, {
  name: 'Radu Ticiu',
  role: 'Co-founder',
  company: 'Growceanu',
  image: raduTiciu,
  linkedin: 'https://www.linkedin.com/in/raduticiu/'
}, {
  name: 'Andreea (Oproiu) Nicolae',
  role: 'Head of MarCom',
  company: 'How to Web',
  image: andreeaNicolae,
  linkedin: 'https://www.linkedin.com/in/andreea-oproiu/'
}, {
  name: 'Razvan Suta',
  role: 'Angel investor & VC',
  company: '',
  image: razvanSuta,
  linkedin: 'https://www.linkedin.com/in/razvansuta/',
  imagePosition: 'object-[center_25%]'
}, {
  name: 'Alexandra Jivan',
  role: 'Partner',
  company: 'LegalFor',
  image: alexandraJivan,
  linkedin: 'https://www.linkedin.com/in/alexandra-jivan-451794127/'
}, {
  name: 'Adrian Gheorghe',
  role: 'Startup Advisor',
  company: 'Doers Ventures',
  image: adrianGheorghe,
  linkedin: 'https://www.linkedin.com/in/adrian-gheorghe/'
}, {
  name: 'Stefania Duta',
  role: 'HR Manager',
  company: 'MIGSO-PCUBED',
  image: stefaniaDuta,
  linkedin: 'https://www.linkedin.com/in/stefania-duta/'
}, {
  name: 'Catalin Anghel',
  role: 'Founder',
  company: 'Cautcurier',
  image: catalinAnghel,
  linkedin: 'https://www.linkedin.com/in/catalin-anghel-v/'
}, {
  name: 'Nicoleta Pirvu',
  role: 'Investor Relationship Manager',
  company: 'How to Web',
  image: nicoletaPirvu,
  linkedin: 'https://www.linkedin.com/in/nicoletapirvu/'
}, {
  name: 'Cosmin Pirvu',
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
}, {
  name: 'Maxim Rotaru',
  role: 'CEO & Founder',
  company: 'Webamboos',
  image: maximRotaru,
  linkedin: 'https://www.linkedin.com/in/maxim-rotaru/'
}, {
  name: 'Radu-Cristian Gheorghe',
  role: 'Sustainability Specialist',
  company: 'Autonom Group',
  image: raduCristianGheorghe,
  linkedin: 'https://www.linkedin.com/in/radu-cristian-gheorghe-3b1230339/'
}, {
  name: 'Toma Grozavescu',
  role: 'Founder',
  company: 'SMARTERS',
  image: tomaGrozavescu,
  linkedin: 'https://www.linkedin.com/in/tomagrozavescu/'
}, {
  name: 'Zoltan-Cristian Bereczki',
  role: 'Co-Founder & Co-CEO',
  company: 'Synerb',
  image: zoltanBereczki,
  linkedin: 'https://www.linkedin.com/in/zbereczki/'
}, {
  name: 'Alexandru Golub',
  role: 'Co-Founder',
  company: 'Pupsi',
  image: alexandruGolub,
  linkedin: 'https://www.linkedin.com/in/golubalexandru/'
}, {
  name: 'Mihai Burada',
  role: 'Urban Planning Specialist',
  company: 'TREE',
  image: mihaiBurada,
  linkedin: 'https://www.linkedin.com/in/mihai-burada-741b9b14/',
}, {
  name: 'Tiberiu Lepadatu',
  role: 'Lead Engineer',
  company: 'Propevo',
  image: tiberiuLepadatu,
  linkedin: 'https://www.linkedin.com/in/tiberiu-lepadatu-7975bab1/',
}, {
  name: 'Cosmin Bolocan',
  role: 'Co-founder',
  company: 'Brewtifi',
  image: cosminBolocan,
  linkedin: 'https://www.linkedin.com/in/petre-cosmin-vlad-bolocan/',
}, {
  name: 'Nick Ungureanu',
  role: 'Sustainable Production Specialist',
  company: 'ProTV',
  image: nickUngureanu,
  linkedin: 'https://www.linkedin.com/in/nick-ungureanu-6211ba214/',
}];
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import heroTrain from '@/assets/hero-train.jpg';
import supportedBySvg from '@/assets/supported-by.svg';
import RailLine from '@/components/decorative/RailLine';
import RailSection from '@/components/decorative/RailSection';
import SectionDivider from '@/components/decorative/SectionDivider';
import RouteVisualization from '@/components/decorative/RouteVisualization';
import JourneyRail from '@/components/decorative/JourneyRail';
import ScrollProgressRail from '@/components/decorative/ScrollProgressRail';
// Partner logos
import phiniaLogo from '@/assets/partners/phinia-new.png';
import sustainabilityExpressLocoLogo from '@/assets/sponsors/sustainability-express-loco.png';
import diarkLogo from '@/assets/partners/diark.png';
import booksterLogo from '@/assets/partners/bookster.png';
import skillabLogo from '@/assets/partners/skillab.png';
import hackingworkLogo from '@/assets/partners/hackingwork.png';
import pozitivestiLogo from '@/assets/partners/pozitivesti.png';
import stripeLogo from '@/assets/partners/stripe.png';
import valentinaLogo from '@/assets/partners/valentina.png';
import carteadalieiLogo from '@/assets/partners/carteadaliei.png';
import howtowebLogo from '@/assets/partners/howtoweb.png';
import vsfaLogo from '@/assets/partners/vsfa.png';
import founderInstituteLogo from '@/assets/partners/founder-institute.png';
import amplifyOngLogo from '@/assets/partners/amplify-ong.png';
import launchRomaniaLogo from '@/assets/partners/launch-romania.png';
import eduupLogo from '@/assets/partners/eduup.png';
import alacrityLogo from '@/assets/partners/alacrity.png';
import curteaVecheLogo from '@/assets/partners/curtea-veche.png';
import skvotLogo from '@/assets/partners/skvot.png';
import cariereLogo from '@/assets/partners/cariere.png';
import bizLogo from '@/assets/partners/biz.png';
import iqadsLogo from '@/assets/partners/iqads.png';
import zileNoptiLogo from '@/assets/partners/zile-nopti.png';
import smarkLogo from '@/assets/partners/smark.png';
import buletinBucurestiLogo from '@/assets/partners/buletin-bucuresti.png';
import coworkTimisoaraLogo from '@/assets/partners/cowork-timisoara.png';
import autonomLogo from '@/assets/partners/autonom.png';
import protvLogo from '@/assets/partners/protv.png';
import mpLogo from '@/assets/partners/mp.png';

// Row 1 partners (first half - including ProTV as main sponsor and PHINIA)
const row1Partners = [{
  name: 'Pro TV',
  logo: protvLogo,
  wide: true
}, {
  name: 'PHINIA',
  logo: phiniaLogo
}, {
  name: 'diARK',
  logo: diarkLogo
}, {
  name: 'Bookster',
  logo: booksterLogo
}, {
  name: 'Skillab',
  logo: skillabLogo
}, {
  name: 'Hacking Work',
  logo: hackingworkLogo
}, {
  name: 'Pozitivești',
  logo: pozitivestiLogo
}, {
  name: 'Stripe',
  logo: stripeLogo
}, {
  name: 'Valentina România',
  logo: valentinaLogo
}, {
  name: 'Cartea Daliei',
  logo: carteadalieiLogo
}, {
  name: 'Cariere',
  logo: cariereLogo
}, {
  name: 'Biz',
  logo: bizLogo
}, {
  name: 'IQads',
  logo: iqadsLogo
}];

// Row 2 partners (second half - including ProTV as main sponsor)
const row2Partners = [{
  name: 'Pro TV',
  logo: protvLogo,
  wide: true
}, {
  name: 'Autonom',
  logo: autonomLogo
}, {
  name: 'How to Web',
  logo: howtowebLogo
}, {
  name: 'VSFA',
  logo: vsfaLogo
}, {
  name: 'Founder Institute',
  logo: founderInstituteLogo
}, {
  name: 'AmpliFY ONG',
  logo: amplifyOngLogo
}, {
  name: 'Launch Romania',
  logo: launchRomaniaLogo
}, {
  name: 'EduUP',
  logo: eduupLogo
}, {
  name: 'Alacrity',
  logo: alacrityLogo
}, {
  name: 'Curtea Veche Publishing',
  logo: curteaVecheLogo
}, {
  name: 'SKVOT',
  logo: skvotLogo
}, {
  name: 'Zile și Nopți',
  logo: zileNoptiLogo
}, {
  name: 'SMARK',
  logo: smarkLogo
}, {
  name: 'Buletin de București',
  logo: buletinBucurestiLogo
}, {
  name: 'CO-work Timișoara',
  logo: coworkTimisoaraLogo
}, {
  name: 'MP',
  logo: mpLogo
}];
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
  const [isPartnersVisible, setIsPartnersVisible] = useState(false);
  const [mentorsExpanded, setMentorsExpanded] = useState(false);
  const partnersRef = useRef<HTMLElement>(null);
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsPartnersVisible(true);
        observer.disconnect(); // Only trigger once
      }
    }, {
      threshold: 0.2
    });
    if (partnersRef.current) {
      observer.observe(partnersRef.current);
    }
    return () => observer.disconnect();
  }, []);
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
              <span className="inline-block bg-primary/20 text-primary px-4 py-2 rounded-full text-lg font-semibold border border-primary/30">
                3-5 April 2026
              </span>
              <div>
                <h1 className="text-5xl lg:text-7xl font-bold text-foreground leading-tight">
                  Sustainability Express
                </h1>
                <div className="flex justify-start">
                  <img src={supportedBySvg} alt="Supported by PRO.TV" className="h-auto mt-3" style={{ width: '55%', maxWidth: '210px' }} />
                </div>
              </div>
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
                <a href="https://luma.com/lxs8xxfm" target="_blank" rel="noopener noreferrer">
                  Join Demo Day <ArrowRight className="ml-2 h-5 w-5" />
                </a>
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
                <div className="w-14 h-14 rounded-full flex-shrink-0 flex items-center justify-center bg-primary">
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
                <div className="w-14 h-14 rounded-full flex-shrink-0 flex items-center justify-center bg-primary">
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
          
          {/* Mobile-only Apply CTA */}
          <div className="text-center mt-12 md:hidden">
            <Button asChild className="btn-hero text-lg px-8 py-6">
              <a href="https://luma.com/lxs8xxfm" target="_blank" rel="noopener noreferrer">
                Join Demo Day <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </Button>
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
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 max-w-6xl mx-auto">
            {mentors.map((mentor, index) => {
            const visibilityClass = mentorsExpanded ? 'block' : index < 4 ? 'block' : index < 6 ? 'hidden md:block' : index < 8 ? 'hidden lg:block' : 'hidden';
            return <Card key={`${mentor.name}-${mentor.company ?? ''}`} className={`card-elevated group transition-transform duration-300 hover:scale-[1.01] relative overflow-hidden ${visibilityClass}`}>
                  <div className="absolute top-0 left-4 right-4 opacity-30">
                    <RailLine />
                  </div>
                  <div className="p-4 text-center">
                    <div className="w-20 h-20 md:w-24 md:h-24 mx-auto mb-3 rounded-full overflow-hidden border-2 border-primary/20">
                      <img src={mentor.image} alt={mentor.name} loading="lazy" className={`w-full h-full object-cover ${mentor.imagePosition || ''}`} />
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

          {mentors.length > 8 && <div className="mt-10 flex justify-center">
              <Button variant="outline" onClick={() => setMentorsExpanded(v => !v)}>
                {mentorsExpanded ? <>Show less <ChevronUp className="ml-2 h-4 w-4" /></> : <>Show more <ChevronDown className="ml-2 h-4 w-4" /></>}
              </Button>
            </div>}
          
          {/* More mentors announcement */}
          <p className="text-center text-lg text-muted-foreground mt-12 italic">
            ✨ More mentors to be announced soon...
          </p>
        </div>
      </section>

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
          
          <div className="text-center mt-12 space-y-4">
            <Button asChild variant="outline" size="lg" className="group">
              <Link to="/agenda">
                See Full Agenda
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
            
            {/* Mobile-only Apply CTA */}
            <div className="md:hidden">
              <Button asChild className="btn-hero text-lg px-8 py-6">
                <Link to="/apply">
                  Apply Now <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </RailSection>

      {/* Partners Section */}
      <section ref={partnersRef} id="partners" className="py-24 relative overflow-hidden">
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
          
          {/* Train-Themed Logo Slider */}
          <div className="relative overflow-hidden py-4">
            {/* Gradient masks */}
            <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />
            
            {/* Two train tracks */}
            <div className="space-y-8">
              {/* First train track - train comes from RIGHT, moving LEFT */}
              <div className="relative overflow-hidden">
                {/* Rail track above */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
                <div className="absolute -top-1 left-0 right-0 flex justify-around">
                  {[...Array(40)].map((_, i) => <div key={`tie1-${i}`} className="w-1 h-2 bg-primary/20 rounded-sm" />)}
                </div>
                
                {/* Train cars - first row: locomotive leads, nose pointing LEFT, moving LEFT */}
                <div className={`flex items-end pt-8 pb-4 ${isPartnersVisible ? 'animate-scroll-left' : ''}`}>
                  {/* PHINIA Locomotive - leading, nose pointing LEFT */}
                  <div className="flex-shrink-0 flex items-end">
                    <div className="w-48 h-24 bg-gradient-to-r from-primary/20 to-card/60 backdrop-blur-sm border-2 border-primary/40 rounded-lg flex items-center justify-center mx-1 relative shadow-lg shadow-primary/10">
                      {/* Locomotive front nose - on LEFT side (direction of travel) */}
                      <div className="absolute -left-3 top-1/2 -translate-y-1/2 w-3 h-12 bg-primary/30 rounded-l-full border-l-2 border-y-2 border-primary/40" />
                      {/* Smokestack */}
                      <div className="absolute -top-3 left-6 w-4 h-3 bg-primary/40 rounded-t-md" />
                      <div className="absolute -top-5 left-6 w-4 h-2 bg-primary/30 rounded-full" />
                      {/* Four wheels */}
                      <div className="absolute -bottom-2 left-3 w-4 h-4 rounded-full bg-primary/40 border-2 border-primary/50" />
                      <div className="absolute -bottom-2 left-10 w-4 h-4 rounded-full bg-primary/40 border-2 border-primary/50" />
                      <div className="absolute -bottom-2 right-10 w-4 h-4 rounded-full bg-primary/40 border-2 border-primary/50" />
                      <div className="absolute -bottom-2 right-3 w-4 h-4 rounded-full bg-primary/40 border-2 border-primary/50" />
                          <img src={sustainabilityExpressLocoLogo} alt="Sustainability Express" className="max-w-[80%] max-h-[60%] object-contain rounded-md" />
                    </div>
                    {/* Connector to next car */}
                    <div className="w-3 h-1.5 bg-primary/50 rounded-full mb-8" />
                  </div>
                  
                  {row1Partners.map((partner, index) => <div key={`row1-first-${index}`} className="flex-shrink-0 flex items-end">
                      {/* Train car */}
                      <div className={`${partner.wide ? 'w-52' : 'w-36'} h-20 bg-card/50 backdrop-blur-sm border border-primary/20 rounded-lg flex items-center justify-center mx-1 relative`}>
                        {/* Wheel connectors */}
                        <div className="absolute -bottom-2 left-4 w-4 h-4 rounded-full bg-primary/30 border border-primary/40" />
                        <div className="absolute -bottom-2 right-4 w-4 h-4 rounded-full bg-primary/30 border border-primary/40" />
                        <img src={partner.logo} alt={partner.name} className="max-w-[90%] max-h-[80%] object-contain rounded-md" />
                      </div>
                      {/* Connector between cars */}
                      <div className="w-2 h-1 bg-primary/40 rounded-full mb-8" />
                    </div>)}
                  {/* Duplicate wagons for seamless loop */}
                  {row1Partners.map((partner, index) => <div key={`row1-second-${index}`} className="flex-shrink-0 flex items-end">
                      <div className={`${partner.wide ? 'w-52' : 'w-36'} h-20 bg-card/50 backdrop-blur-sm border border-primary/20 rounded-lg flex items-center justify-center mx-1 relative`}>
                        <div className="absolute -bottom-2 left-4 w-4 h-4 rounded-full bg-primary/30 border border-primary/40" />
                        <div className="absolute -bottom-2 right-4 w-4 h-4 rounded-full bg-primary/30 border border-primary/40" />
                        <img src={partner.logo} alt={partner.name} className="max-w-[90%] max-h-[80%] object-contain rounded-md" />
                      </div>
                      <div className="w-2 h-1 bg-primary/40 rounded-full mb-8" />
                    </div>)}
                </div>
                
                {/* Rail track below */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
              </div>
              
              {/* Second train track - train comes from LEFT, moving RIGHT */}
              <div className="relative overflow-hidden">
                {/* Rail track above */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
                <div className="absolute -top-1 left-0 right-0 flex justify-around">
                  {[...Array(40)].map((_, i) => <div key={`tie2-${i}`} className="w-1 h-2 bg-primary/20 rounded-sm" />)}
                </div>
                
                {/* Train cars - second row: locomotive leads, moving LEFT to RIGHT */}
                {/* Container starts at translateX(-100%), so RIGHTMOST element (locomotive) is at left viewport edge */}
                <div className={`flex items-end justify-end pt-8 pb-4 ${isPartnersVisible ? 'animate-train-enter-right' : ''}`}>
                  {/* Wagons FIRST (leftmost in DOM) - they trail behind, enter viewport LAST */}
                  {[...row2Partners].reverse().map((partner, index) => <div key={`row2-${index}`} className="flex-shrink-0 flex items-end">
                      <div className="w-2 h-1 bg-primary/40 rounded-full mb-8" />
                      <div className={`${partner.wide ? 'w-52' : 'w-36'} h-20 bg-card/50 backdrop-blur-sm border border-primary/20 rounded-lg flex items-center justify-center mx-1 relative`}>
                        <div className="absolute -bottom-2 left-4 w-4 h-4 rounded-full bg-primary/30 border border-primary/40" />
                        <div className="absolute -bottom-2 right-4 w-4 h-4 rounded-full bg-primary/30 border border-primary/40" />
                        <img src={partner.logo} alt={partner.name} className="max-w-[90%] max-h-[80%] object-contain rounded-md" />
                      </div>
                    </div>)}
                  
                  {/* PHINIA Locomotive LAST (rightmost in DOM) - enters viewport FIRST from left edge */}
                  <div className="flex-shrink-0 flex items-end">
                    <div className="w-3 h-1.5 bg-primary/50 rounded-full mb-8" />
                    <div className="w-48 h-24 bg-gradient-to-r from-card/60 to-primary/20 backdrop-blur-sm border-2 border-primary/40 rounded-lg flex items-center justify-center mx-1 relative shadow-lg shadow-primary/10">
                      {/* Locomotive front nose - on RIGHT side (direction of travel) */}
                      <div className="absolute -right-3 top-1/2 -translate-y-1/2 w-3 h-12 bg-primary/30 rounded-r-full border-r-2 border-y-2 border-primary/40" />
                      {/* Smokestack */}
                      <div className="absolute -top-3 right-6 w-4 h-3 bg-primary/40 rounded-t-md" />
                      <div className="absolute -top-5 right-6 w-4 h-2 bg-primary/30 rounded-full" />
                      {/* Four wheels */}
                      <div className="absolute -bottom-2 left-3 w-4 h-4 rounded-full bg-primary/40 border-2 border-primary/50" />
                      <div className="absolute -bottom-2 left-10 w-4 h-4 rounded-full bg-primary/40 border-2 border-primary/50" />
                      <div className="absolute -bottom-2 right-10 w-4 h-4 rounded-full bg-primary/40 border-2 border-primary/50" />
                      <div className="absolute -bottom-2 right-3 w-4 h-4 rounded-full bg-primary/40 border-2 border-primary/50" />
                      <img src={sustainabilityExpressLocoLogo} alt="Sustainability Express" className="max-w-[80%] max-h-[60%] object-contain rounded-md" />
                    </div>
                  </div>
                </div>
                
                {/* Rail track below */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
              </div>
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
            <p className="text-xl text-muted-foreground">Six pathways to sustainable impact</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {[{
            icon: Heart,
            title: 'Sustainable Lifestyles & Everyday Choices'
          }, {
            icon: Brain,
            title: 'Climate Awareness & Behavior Change'
          }, {
            icon: Recycle,
            title: 'Circular Economy & Resource Efficiency'
          }, {
            icon: BarChart3,
            title: 'Digital Tools for Sustainability Impact'
          }, {
            icon: Users,
            title: 'Community-Led Sustainability Solutions'
          }, {
            icon: GraduationCap,
            title: 'Education, Youth & Future Skills for Sustainability'
          }].map((theme, index) => {
            const Icon = theme.icon;
            return <Card key={index} className="p-6 text-center hover:shadow-card transition-all duration-300 group relative overflow-hidden hover:-translate-y-1">
                  {/* Rail accent */}
                  <div className="absolute bottom-0 left-4 right-4 opacity-20">
                    <RailLine />
                  </div>
                  <div className="w-12 h-12 bg-primary rounded-full mx-auto mb-4 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Icon className="h-6 w-6 text-primary-foreground" />
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