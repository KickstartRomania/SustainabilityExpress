import { Card } from '@/components/ui/card';

import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { Clock, MapPin, Train, Moon, Star, Trophy, Lightbulb, Target, Wrench, MessageSquare, Linkedin } from 'lucide-react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import MentorRoute from '@/components/onboard/MentorRoute';

// Judge images
import hanaanYaseen from '@/assets/judges/hanaan-yaseen.jpg';
import ralucaMessai from '@/assets/mentors/raluca-messai.jpeg';
import aleodorTabarcea from '@/assets/mentors/aleodor-tabarcea.jpeg';
import samuelStancu from '@/assets/judges/samuel-stancu.png';
import loredanaGavrilescu from '@/assets/judges/loredana-gavrilescu.png';

const judges = [
  { name: 'Hanaan Yaseen', role: 'Strategy and ESG Manager', company: 'Pro TV', image: hanaanYaseen, linkedin: 'https://www.linkedin.com/in/hanaan-yaseen-phd-64263933/' },
  { name: 'Raluca Messai', role: 'Founder', company: 'diARK', image: ralucaMessai, linkedin: 'https://www.linkedin.com/in/ralucamessai/' },
  { name: 'Aleodor Tabarcea', role: 'Engineering Manager', company: 'Stripe', image: aleodorTabarcea, linkedin: 'https://www.linkedin.com/in/aleodor-tabarcea/' },
  { name: 'Samuel Stancu', role: 'Head of Urbanism Division', company: 'UrbanizeHub', image: samuelStancu, linkedin: 'https://www.linkedin.com/in/samuelstancu/' },
  { name: 'Loredana Gavrilescu', role: 'Startup Ecosystem Coordinator', company: 'Iceberg Plus', image: loredanaGavrilescu, linkedin: 'https://www.linkedin.com/in/loredana-gavrilescu-startup-consultant/' },
];

const dotColors: Record<string, string> = {
  Tech: 'bg-green-500',
  Business: 'bg-blue-500',
  Creative: 'bg-amber-500',
  'High School': 'bg-red-400',
};

const teams = [
  {
    name: 'Team Argeș',
    members: [
      { name: 'Stefan Ciobanu', background: 'Tech' },
      { name: 'Auras Vlase', background: 'Business' },
      { name: 'Serena Stoica', background: 'Creative' },
      { name: 'Adriana Moise', background: 'High School' },
    ],
  },
  {
    name: 'Team Olt',
    members: [
      { name: 'Andrei Stroescu', background: 'Tech' },
      { name: 'Dan Popescu', background: 'Business' },
      { name: 'Ana Maria Dragan', background: 'Creative' },
      { name: 'Andrei Pana', background: 'High School' },
    ],
  },
  {
    name: 'Team Jiu',
    members: [
      { name: 'Omid Ghozatlou', background: 'Tech' },
      { name: 'Ioana Bitoleanu', background: 'Business' },
      { name: 'Andrei Bucureci', background: 'Creative' },
      { name: 'Alexandru Despina', background: 'High School' },
    ],
  },
  {
    name: 'Team Timiș',
    members: [
      { name: 'Ludovico Cesaro', background: 'Tech' },
      { name: 'Emil Boncea', background: 'Business' },
      { name: 'Diana-Roberta Micu', background: 'Creative' },
      { name: 'Alexandru-Valentin Grigorescu', background: 'High School' },
    ],
  },
  {
    name: 'Team Dunărea',
    members: [
      { name: 'Laurentiu Toader', background: 'Tech' },
      { name: 'Adriana Moima', background: 'Business' },
      { name: 'Gabriela Caragata', background: 'Creative' },
      { name: 'Andrei Gagiu', background: 'High School' },
    ],
  },
];

const criteria = [
  { icon: Target, title: 'Impact', description: 'Potential to create meaningful change' },
  { icon: Wrench, title: 'Feasibility', description: 'Realistic implementation path' },
  { icon: Lightbulb, title: 'Innovation', description: 'Creative approach to the problem' },
  { icon: Star, title: 'Prototype', description: 'Quality of working demonstration' },
  { icon: MessageSquare, title: 'Storytelling', description: 'Clear communication of vision' },
];

const Onboard = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <div className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-16">
            <span className="inline-block bg-primary/20 text-primary px-4 py-2 rounded-full text-lg font-semibold border border-primary/30 mb-6">
              3-5 April 2026
            </span>
            <h1 className="text-5xl font-bold text-foreground mb-4">Welcome Aboard</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Everything you need to know for your Sustainability Express journey.
            </p>
          </div>

          {/* ───── SECTION 1: THE WEEKEND ───── */}
          <div className="max-w-5xl mx-auto mb-20">
            <h2 className="text-3xl font-bold text-foreground mb-8 text-center">The Weekend</h2>

            <Tabs defaultValue="friday" className="w-full">
              <TabsList className="grid w-full grid-cols-3 mb-6">
                <TabsTrigger value="friday">Friday</TabsTrigger>
                <TabsTrigger value="saturday">Saturday</TabsTrigger>
                <TabsTrigger value="sunday">Sunday</TabsTrigger>
              </TabsList>

              <TabsContent value="friday">
                <Card className="card-elevated">
                  <div className="flex items-center gap-4 mb-6 max-w-lg mx-auto">
                    <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
                      <Clock className="h-5 w-5 text-primary-foreground" />
                    </div>
                    <h3 className="text-xl font-bold text-foreground">Friday — Departure</h3>
                  </div>
                  <div className="space-y-3 max-w-lg mx-auto">
                    {[
                      { time: '18:00', title: 'Pre-boarding meetup', desc: 'Meet at B17 CoffeeLab for check-in and materials.' },
                      { time: '19:10', title: 'Boarding', desc: 'Board the train and get settled.' },
                      { time: '19:28', title: 'Train departs from Bucharest', desc: 'IR 11501. The journey officially begins.' },
                    ].map((item) => (
                      <div key={item.time} className="flex items-start gap-4">
                        <div className="w-16 text-sm font-medium text-muted-foreground pt-0.5">{item.time}</div>
                        <div className="flex-1">
                          <h4 className="font-semibold text-foreground text-sm">{item.title}</h4>
                          <p className="text-muted-foreground text-sm">{item.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </Card>
              </TabsContent>

              <TabsContent value="saturday">
                <Card className="card-elevated">
                  <div className="flex items-center gap-4 mb-6 max-w-lg mx-auto">
                    <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
                      <MapPin className="h-5 w-5 text-primary-foreground" />
                    </div>
                    <h3 className="text-xl font-bold text-foreground">Saturday — Full Build Day</h3>
                  </div>
                  <div className="space-y-3 max-w-lg mx-auto">
                    {[
                      { time: '06:30', title: 'Arrival in Timisoara', desc: 'Arrive at the station and head to the venue.' },
                      { time: '08:30', title: 'Breakfast', desc: 'Start the day with breakfast.' },
                      { time: '10:00', title: 'Lean Canvas Workshop, with Razvan Suta', desc: 'Shape your idea with a guided session.' },
                      { time: '12:00', title: 'Lunch', desc: '' },
                      { time: '13:00', title: 'Mentoring sessions', desc: 'Get feedback from mentors until 16:00.' },
                      { time: '18:00', title: 'Pitching Workshop, with George Bonea', desc: 'Work on your pitch before Demo Day.' },
                      { time: '19:00', title: 'Dinner', desc: '' },
                      { time: '20:41', title: 'Departure from Timisoara', desc: 'IR 11500. Board the train back to Bucharest.' },
                      { time: '00:00', title: 'Late-night build session', desc: 'Keep working on the train.' },
                    ].map((item) => (
                      <div key={item.time} className="flex items-start gap-4">
                        <div className="w-16 text-sm font-medium text-muted-foreground pt-0.5">{item.time}</div>
                        <div className="flex-1">
                          <h4 className="font-semibold text-foreground text-sm">{item.title}</h4>
                          <p className="text-muted-foreground text-sm">{item.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </Card>
              </TabsContent>

              <TabsContent value="sunday">
                <Card className="card-elevated">
                  <div className="flex items-center gap-4 mb-6 max-w-lg mx-auto">
                    <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
                      <Trophy className="h-5 w-5 text-primary-foreground" />
                    </div>
                    <h3 className="text-xl font-bold text-foreground">Sunday — Demo Day</h3>
                  </div>
                  <div className="space-y-3 max-w-lg mx-auto">
                    {[
                      { time: '08:30', title: 'Arrival in Bucharest', desc: 'Back at Gara de Nord.' },
                      { time: '09:00', title: 'Tura de duminica', desc: 'A relaxed morning walk in Cotroceni, away from screens,', link: 'https://luma.com/fxmyhr1d' },
                      { time: '10:00', title: 'Transfer to Supertree', desc: 'Head to the Demo Day venue.' },
                      { time: '11:00', title: 'Final working session', desc: 'Final polish and presentation prep.' },
                      { time: '13:30', title: 'Doors open', desc: 'Guests begin to arrive.' },
                      { time: '14:00', title: 'Demo Day', desc: 'Each team presents, followed by jury Q&A and awards.', link: 'https://luma.com/lxs8xxfm' },
                      { time: '15:30', title: 'Networking', desc: 'Connect with mentors, jury, and guests.' },
                      { time: '16:30', title: 'Closing session', desc: 'The program wraps up.' },
                    ].map((item) => (
                      <div key={item.time} className="flex items-start gap-4">
                        <div className="w-16 text-sm font-medium text-muted-foreground pt-0.5">{item.time}</div>
                        <div className="flex-1">
                          {'link' in item && item.link ? (
                            <a href={item.link} target="_blank" rel="noopener noreferrer" className="font-semibold text-primary hover:underline text-sm">{item.title}</a>
                          ) : (
                            <h4 className="font-semibold text-foreground text-sm">{item.title}</h4>
                          )}
                          <p className="text-muted-foreground text-sm">{item.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </Card>
              </TabsContent>
            </Tabs>
          </div>

          {/* ───── SECTION 2: YOUR COHORT ───── */}
          <div className="mb-20">
            <h2 className="text-3xl font-bold text-foreground mb-8 text-center">Your Cohort</h2>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 max-w-5xl mx-auto">
              {teams.map((team) => (
                <Card key={team.name} className="card-elevated !p-3">
                  <div className="flex items-center gap-1.5 mb-3">
                    <Train className="h-4 w-4 text-primary shrink-0" />
                    <h3 className="text-sm font-bold text-foreground">{team.name}</h3>
                  </div>
                  <ul className="space-y-1.5">
                    {team.members.map((m) => (
                      <li key={m.name} className="flex items-center gap-2">
                        <span className={`w-2 h-2 rounded-full shrink-0 ${dotColors[m.background]}`} />
                        <span className="text-foreground text-xs truncate">{m.name}</span>
                      </li>
                    ))}
                  </ul>
                </Card>
              ))}
            </div>

            {/* Legend */}
            <div className="flex flex-wrap items-center justify-center gap-4 mt-4 max-w-5xl mx-auto">
              {Object.entries(dotColors).map(([label, color]) => (
                <div key={label} className="flex items-center gap-1.5">
                  <span className={`w-2 h-2 rounded-full ${color}`} />
                  <span className="text-xs text-muted-foreground">{label}</span>
                </div>
              ))}
            </div>
          </div>


          {/* ───── SECTION 3: YOUR MENTORS ───── */}
          <div className="mb-20">
            <h2 className="text-3xl font-bold text-foreground mb-8 text-center">Your Mentors</h2>
            <MentorRoute />
          </div>

          {/* ───── SECTION 4: HOW YOU'LL BE JUDGED ───── */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-foreground mb-4 text-center">How You'll Be Judged</h2>

            <Card className="card-elevated max-w-5xl mx-auto text-center mb-8">
              <p className="text-muted-foreground">
                Each team delivers a <span className="text-foreground font-semibold">7-minute pitch</span> followed by a{' '}
                <span className="text-foreground font-semibold">5-minute Q&A</span>, starting{' '}
                <span className="text-primary font-semibold">Sunday 14:00</span>.
              </p>
            </Card>

            <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4 max-w-5xl mx-auto mb-8">
              {criteria.map((c) => (
                <Card key={c.title} className="card-elevated text-center">
                  <c.icon className="h-8 w-8 text-primary mx-auto mb-3" />
                  <h3 className="font-bold text-foreground mb-1">{c.title}</h3>
                  <p className="text-muted-foreground text-sm">{c.description}</p>
                </Card>
              ))}
            </div>

            {/* Jury Members */}
            <h3 className="text-2xl font-bold text-foreground mt-10 mb-6 text-center">Who Will Judge You</h3>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4 max-w-5xl mx-auto">
              {judges.map((judge) => (
                <Card key={judge.name} className="card-elevated !px-2 !py-6 text-center">
                  <div className="w-16 h-16 mx-auto mb-2 rounded-full overflow-hidden border-2 border-primary/20">
                    <img src={judge.image} alt={judge.name} loading="lazy" className="w-full h-full object-cover" />
                  </div>
                  <h4 className="text-sm font-bold text-foreground leading-snug mb-1">{judge.name}</h4>
                  <p className="text-muted-foreground text-xs">{judge.role}</p>
                  <p className="text-muted-foreground text-xs mb-2">{judge.company}</p>
                  {judge.linkedin && (
                    <a href={judge.linkedin} target="_blank" rel="noopener noreferrer" aria-label={`${judge.name} on LinkedIn`} className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-primary/10 hover:bg-primary/20 transition-colors">
                      <Linkedin className="h-3.5 w-3.5 text-primary" />
                    </a>
                  )}
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Onboard;
