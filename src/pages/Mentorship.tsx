import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Clock, Users, Award, AlertTriangle, Linkedin } from 'lucide-react';

// Mentor images
import tomaGrozavescu from '@/assets/mentors/toma-grozavescu.png';
import zoltanBereczki from '@/assets/mentors/zoltan-bereczki.png';
import iuliaAndritoiuCaizer from '@/assets/mentors/iulia-andritoiu-caizer.jpeg';
import tiberiuLepadatu from '@/assets/mentors/tiberiu-lepadatu.png';
import andreeaNicolae from '@/assets/mentors/andreea-nicolae.jpeg';
import mihaiBurada from '@/assets/mentors/mihai-burada.png';
import adrianGheorghe from '@/assets/mentors/adrian-gheorghe.jpeg';
import nickUngureanu from '@/assets/mentors/nick-ungureanu.png';
import raduTiciu from '@/assets/mentors/radu-ticiu.jpeg';
import stefaniaDuta from '@/assets/mentors/stefania-duta.png';

const BackgroundBubble = ({ bg }: { bg: string }) => {
  const colorMap: Record<string, string> = {
    marketing: 'bg-accent/20 text-accent',
    sustainability: 'bg-primary/20 text-primary',
    legal: 'bg-blue-500/20 text-blue-400',
    tech: 'bg-violet-500/20 text-violet-400',
    business: 'bg-amber-500/20 text-amber-400',
    investor: 'bg-emerald-500/20 text-emerald-400',
    'HR / project management': 'bg-pink-500/20 text-pink-400',
    creative: 'bg-rose-500/20 text-rose-400',
    'high school': 'bg-sky-500/20 text-sky-400',
  };
  const key = bg.toLowerCase();
  const classes = colorMap[key] || 'bg-muted text-muted-foreground';
  return (
    <span className={`text-xs font-medium px-2 py-0.5 rounded-full ${classes}`}>
      {bg}
    </span>
  );
};


const schedule = [
  { time: '06:30', activity: 'Arrival in Timișoara' },
  { time: '10:00', activity: 'Lean Canvas Workshop, with Răzvan Șuța' },
  { time: '13:00–16:00', activity: 'Speed mentoring rotation', highlight: true },
  { time: '18:00', activity: 'Pitching Workshop, with George Bonea' },
  { time: '20:41', activity: 'Departure from Timișoara' },
];

const mentorLinkedins: Record<string, string> = {
  'Toma Grozăvescu': 'https://www.linkedin.com/in/tomagrozavescu/',
  'Zoltan Bereczki': 'https://www.linkedin.com/in/zbereczki/',
  'Iulia Andritoiu Caizer': 'https://www.linkedin.com/in/iulia-caizer/',
  'Tiberiu Lepădatu': 'https://www.linkedin.com/in/tiberiu-lepadatu-7975bab1/',
  'Andreea Oproiu': 'https://www.linkedin.com/in/andreea-oproiu/',
  'Mihai Burada': 'https://www.linkedin.com/in/mihai-burada-741b9b14/',
  'Adrian Gheorghe': 'https://www.linkedin.com/in/adrian-gheorghe/',
  'Nick Ungureanu': 'https://www.linkedin.com/in/nick-ungureanu-6211ba214/',
  'Radu Ticiu': 'https://www.linkedin.com/in/raduticiu/',
  'Stefania Duta': 'https://www.linkedin.com/in/stefania-duta/',
};

const mentorPairs = [
  { pair: 1, mentors: [{ name: 'Toma Grozăvescu', bg: 'Marketing' }, { name: 'Zoltan Bereczki', bg: 'Sustainability' }] },
  { pair: 2, mentors: [{ name: 'Iulia Andritoiu Caizer', bg: 'Legal' }, { name: 'Tiberiu Lepădatu', bg: 'Tech' }] },
  { pair: 3, mentors: [{ name: 'Andreea Oproiu', bg: 'Marketing' }, { name: 'Mihai Burada', bg: 'Sustainability' }] },
  { pair: 4, mentors: [{ name: 'Adrian Gheorghe', bg: 'Business' }, { name: 'Nick Ungureanu', bg: 'Sustainability' }] },
  { pair: 5, mentors: [{ name: 'Radu Ticiu', bg: 'Investor' }, { name: 'Stefania Duta', bg: 'HR / project management' }] },
];

const teams = [
  {
    name: 'Team Argeș',
    members: [
      { name: 'Stefan Ciobanu', bg: 'Tech', level: 'Junior', summary: 'CASSINI Hackathon winner; fullstack + IoT + satellite data; renewable energy platform builder' },
      { name: 'Auras Vlase', bg: 'Business', level: 'Senior', summary: 'Construction + logistics systems thinker; Radar Meseriasi; pragmatic execution focus' },
      { name: 'Serena Stoica', bg: 'Creative', level: 'Junior', summary: 'Circular economy + marketing; ESN comms volunteer; Regionale Italy trainline project' },
      { name: 'Adriana Moise', bg: 'High School', level: 'Student', summary: 'High school student' },
    ],
  },
  {
    name: 'Team Olt',
    members: [
      { name: 'Andrei Stroescu', bg: 'Tech', level: 'Senior', summary: 'HackTrain UK veteran; solarpunk + net-zero buildings; circular design; Tech/Creative crossover' },
      { name: 'Dan Popescu', bg: 'Business', level: 'Junior', summary: 'Co-founded Fondatori din Viitor; Ed Tech + sustainability; community builder' },
      { name: 'Ana Maria Dragan', bg: 'Creative', level: 'Mid', summary: 'Runs scoaladehr.ro; HR entrepreneur; creative business communication; cross-team collaborator' },
      { name: 'Andrei Pana', bg: 'High School', level: 'Student', summary: 'High school student' },
    ],
  },
  {
    name: 'Team Jiu',
    members: [
      { name: 'Omid Ghozatlou', bg: 'Tech', level: 'Mid', summary: 'UPB PhD deep learning; satellite imagery for climate monitoring; strongest AI profile in cohort' },
      { name: 'Ioana Bitoleanu', bg: 'Business', level: 'Senior', summary: 'Product owner at Endava; business analysis + product vision; structured hackathon contributor' },
      { name: 'Andrei Bucureci', bg: 'Creative', level: 'Senior', summary: 'Greenpeace CEE Digital Specialist; 14+ years environmental comms; highest-scoring Creative in cohort' },
      { name: 'Alexandru Despina', bg: 'High School', level: 'Student', summary: 'High school student' },
    ],
  },
  {
    name: 'Team Timiș',
    members: [
      { name: 'Ludovico Cesaro', bg: 'Tech', level: 'Senior', summary: 'Senior AI engineer; train-related POC already in progress; rapid cloud prototyping' },
      { name: 'Emil Boncea', bg: 'Business', level: 'Junior', summary: 'Sustainability specialist at Autonom; green mobility + ESG; deep domain knowledge' },
      { name: 'Diana-Roberta Micu', bg: 'Creative', level: 'Junior', summary: 'EFdeN alumna (solar decathlon); IT + comms hybrid; strong sustainability grounding' },
      { name: 'Alexandru-Valentin Grigorescu', bg: 'High School', level: 'Junior', summary: 'High school student' },
    ],
  },
  {
    name: 'Team Dunărea',
    members: [
      { name: 'Laurentiu Toader', bg: 'Tech', level: 'Mid', summary: 'Co-produced Attenborough\'s Ocean; builds AI at Strand Ventures; exceptional conservation network' },
      { name: 'Adriana Moima', bg: 'Business', level: 'Senior', summary: 'Senior consultant; unconventional thinking; structured planning; business expertise' },
      { name: 'Gabriela Caragata', bg: 'Creative', level: 'Student', summary: 'Architecture student; EFdeN + Casa Buna; human-centred design; accessibility + inclusivity lens' },
      { name: 'Andrei Gagiu', bg: 'High School', level: 'Student', summary: 'High school student' },
    ],
  },
];

const criteria = [
  { name: 'Impact', desc: 'Potential to create meaningful change' },
  { name: 'Feasibility', desc: 'Realistic implementation path' },
  { name: 'Innovation', desc: 'Creative approach to the problem' },
  { name: 'Prototype', desc: 'Quality of working demonstration' },
  { name: 'Storytelling', desc: 'Clear communication of vision' },
];

const constraints = [
  'Existing technology only — no R&D',
  'Max €50k–€100k implementation budget',
  '4–9 months from decision to pilot',
  'No dependency on government approvals',
  'No major infrastructure (no new roads, rails, bridges)',
  'Must include a prototype or pilot plan',
];

const Mentorship = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4 max-w-5xl space-y-16">

          {/* Header */}
          <div className="text-center space-y-3">
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-foreground">
              Mentors View
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Speed mentoring rotation · Saturday April 4, Timișoara
            </p>
          </div>

          {/* ─── SECTION 1: The Day ─── */}
          <section className="space-y-6">
            <h2 className="text-2xl font-bold text-foreground flex items-center gap-2">
              <Clock className="h-5 w-5 text-primary" /> The Day
            </h2>

            <div className="rounded-xl border border-border bg-card overflow-hidden">
              {schedule.map((s, i) => (
                <div
                  key={i}
                  className={`flex items-center gap-4 px-5 py-3 border-b border-border last:border-b-0 ${
                    s.highlight
                      ? 'bg-primary/10 border-l-4 border-l-primary'
                      : ''
                  }`}
                >
                  <span className="font-mono text-sm text-muted-foreground w-36 shrink-0">
                    {s.time}
                  </span>
                  <span className={`text-sm ${s.highlight ? 'font-semibold text-primary' : 'text-foreground'}`}>
                    {s.activity}
                  </span>
                </div>
              ))}
            </div>

            <p className="text-sm text-muted-foreground bg-secondary/50 rounded-lg px-4 py-3 flex items-start gap-2">
              <span className="text-accent font-bold">→</span>
              Final presentations &amp; awards: <strong className="text-foreground">Sunday April 5, 14:00 in Bucharest</strong>
            </p>
          </section>

          {/* ─── SECTION 2: Mentoring Format ─── */}
          <section className="space-y-8">
            <div className="space-y-2">
              <h2 className="text-2xl font-bold text-foreground flex items-center gap-2">
                <Users className="h-5 w-5 text-primary" /> Mentoring Format
              </h2>
              <p className="text-muted-foreground text-sm">
                Speed mentoring — <strong className="text-foreground">25 min per session</strong>, pairs of 2 mentors each. 5 pairs × 5 teams, 13:00–16:00 Saturday.
              </p>
            </div>

            {/* Mentor Pairs */}
            <div>
              <h3 className="text-lg font-semibold text-foreground mb-4">Mentor Pairs</h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {mentorPairs.map((p) => (
                  <Card key={p.pair} className="bg-card border-border">
                    <CardHeader className="pb-2 pt-4 px-4">
                      <CardTitle className="text-xs uppercase tracking-widest text-muted-foreground">
                        Pair {p.pair}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="px-4 pb-4 space-y-2">
                      {p.mentors.map((m) => (
                        <div key={m.name} className="flex items-center gap-2 flex-wrap">
                          <span className="text-sm font-medium text-foreground">{m.name}</span>
                          <BackgroundBubble bg={m.bg} />
                          {mentorLinkedins[m.name] && (
                            <a href={mentorLinkedins[m.name]} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                              <Linkedin className="h-3.5 w-3.5" />
                            </a>
                          )}
                        </div>
                      ))}
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Team Briefings */}
            <div>
              <h3 className="text-lg font-semibold text-foreground mb-4">Team Briefings</h3>
              <div className="space-y-4">
                {teams.map((team) => (
                  <Card key={team.name} className="bg-card border-border">
                    <CardHeader className="pb-2 pt-4 px-5">
                      <CardTitle className="text-base font-bold text-foreground">{team.name}</CardTitle>
                    </CardHeader>
                    <CardContent className="px-5 pb-4">
                      <div className="divide-y divide-border">
                        {team.members.map((m) => (
                          <div key={m.name} className="py-2.5 first:pt-0 last:pb-0">
                            <div className="flex items-center gap-2 flex-wrap mb-1">
                              <span className="text-sm font-medium text-foreground">{m.name}</span>
                              <BackgroundBubble bg={m.bg} />
                              
                            </div>
                            <p className="text-xs text-muted-foreground leading-relaxed">{m.summary}</p>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </section>

          {/* ─── SECTION 3: Evaluation Frame ─── */}
          <section className="space-y-6">
            <h2 className="text-2xl font-bold text-foreground flex items-center gap-2">
              <Award className="h-5 w-5 text-primary" /> Evaluation Frame
            </h2>

            <div>
              <h3 className="text-lg font-semibold text-foreground mb-3">Judging Criteria</h3>
              <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-3">
                {criteria.map((c, i) => (
                  <div key={c.name} className="rounded-xl border border-border bg-card p-4 text-center space-y-1">
                    <span className="text-2xl font-extrabold text-primary">{i + 1}</span>
                    <p className="text-sm font-semibold text-foreground">{c.name}</p>
                    <p className="text-xs text-muted-foreground">{c.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-foreground mb-3 flex items-center gap-2">
                <AlertTriangle className="h-4 w-4 text-accent" /> Solution Requirements
              </h3>
              <ul className="space-y-2">
                {constraints.map((c) => (
                  <li key={c} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <span className="text-accent mt-0.5">•</span>
                    <span>{c}</span>
                  </li>
                ))}
              </ul>
            </div>
          </section>

        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Mentorship;
