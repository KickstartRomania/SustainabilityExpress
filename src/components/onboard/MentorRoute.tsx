import { Train, MapPin, Building2, Linkedin } from 'lucide-react';

// Mentor images
import nicoletaPirvu from '@/assets/mentors/nicoleta-pirvu.png';
import cosminPirvu from '@/assets/mentors/cosmin-pirvu.jpeg';
import georgeBonea from '@/assets/mentors/george-bonea.jpeg';
import cosminBolocan from '@/assets/mentors/cosmin-bolocan.png';
import nickUngureanu from '@/assets/mentors/nick-ungureanu.png';
import tiberiuLepadatu from '@/assets/mentors/tiberiu-lepadatu.png';
import mihaiBurada from '@/assets/mentors/mihai-burada.png';
import stefaniaDuta from '@/assets/mentors/stefania-duta.png';
import tomaGrozavescu from '@/assets/mentors/toma-grozavescu.png';
import iuliaAndritoiuCaizer from '@/assets/mentors/iulia-andritoiu-caizer.jpeg';
import zoltanBereczki from '@/assets/mentors/zoltan-bereczki.png';
import andreeaNicolae from '@/assets/mentors/andreea-nicolae.jpeg';
import adrianGheorghe from '@/assets/mentors/adrian-gheorghe.jpeg';
import razvanSuta from '@/assets/mentors/razvan-suta.jpeg';
import raduTiciu from '@/assets/mentors/radu-ticiu.jpeg';
import alexandruGolub from '@/assets/mentors/alexandru-golub.png';
import aleodorTabarcea from '@/assets/mentors/aleodor-tabarcea.jpeg';
import raduCristianGheorghe from '@/assets/mentors/radu-cristian-gheorghe.png';

interface MentorInfo {
  name: string;
  role: string;
  company: string;
  image: string;
  imagePosition?: string;
  linkedin?: string;
}

interface StationData {
  icon: React.ElementType;
  label: string;
  sublabel: string;
  mentors: MentorInfo[];
  color: string;
  dotColor: string;
  isLast?: boolean;
}

const stations: StationData[] = [
  {
    icon: Train,
    label: 'On the Train',
    sublabel: 'Bucharest → Timisoara → Bucharest',
    color: 'text-primary',
    dotColor: 'bg-primary',
    mentors: [
      { name: 'Nicoleta Pirvu', role: 'Investor Relationship Manager', company: 'How to Web', image: nicoletaPirvu, linkedin: 'https://www.linkedin.com/in/nicoletapirvu/' },
      { name: 'Cosmin Pirvu', role: 'Startup Program Manager', company: 'Veridion', image: cosminPirvu, linkedin: 'https://www.linkedin.com/in/cosminpirvu/' },
      { name: 'George Bonea', role: 'Copywriter', company: 'Communication Consultant', image: georgeBonea, linkedin: 'https://www.linkedin.com/in/george-bonea-b0494b91/' },
      { name: 'Cosmin Bolocan', role: 'Co-founder', company: 'Brewtifi', image: cosminBolocan, linkedin: 'https://www.linkedin.com/in/petre-cosmin-vlad-bolocan/' },
      { name: 'Nick Ungureanu', role: 'Sustainable Production Specialist', company: 'ProTV', image: nickUngureanu, linkedin: 'https://www.linkedin.com/in/nick-ungureanu-6211ba214/' },
      { name: 'Tiberiu Lepadatu', role: 'Lead Engineer', company: 'Propevo', image: tiberiuLepadatu, linkedin: 'https://www.linkedin.com/in/tiberiu-lepadatu-7975bab1/' },
      { name: 'Mihai Burada', role: 'Urban Planning Specialist', company: 'TREE', image: mihaiBurada, linkedin: 'https://www.linkedin.com/in/mihai-burada-741b9b14/' },
      { name: 'Stefania Duta', role: 'HR Manager', company: 'MIGSO-PCUBED', image: stefaniaDuta, linkedin: 'https://www.linkedin.com/in/stefania-duta/' },
    ],
  },
  {
    icon: MapPin,
    label: 'Timișoara',
    sublabel: 'Build-day venue',
    color: 'text-accent',
    dotColor: 'bg-accent',
    mentors: [
      { name: 'Toma Grozavescu', role: 'Founder', company: 'SMARTERS', image: tomaGrozavescu, linkedin: 'https://www.linkedin.com/in/tomagrozavescu/' },
      { name: 'Iulia Andritoiu Caizer', role: 'CEO and co-founder', company: 'QuickLegal', image: iuliaAndritoiuCaizer, linkedin: 'https://www.linkedin.com/in/iulia-caizer/' },
      { name: 'Zoltan-Cristian Bereczki', role: 'Co-Founder & Co-CEO', company: 'Synerb', image: zoltanBereczki, linkedin: 'https://www.linkedin.com/in/zbereczki/' },
      { name: 'Andreea (Oproiu) Nicolae', role: 'Head of MarCom', company: 'How to Web', image: andreeaNicolae, linkedin: 'https://www.linkedin.com/in/andreea-oproiu/' },
      { name: 'Adrian Gheorghe', role: 'Startup Advisor', company: 'Doers Ventures', image: adrianGheorghe, linkedin: 'https://www.linkedin.com/in/adrian-gheorghe/' },
      { name: 'Răzvan Suta', role: 'Co-founder & COO', company: 'Vest Ventures', image: razvanSuta, imagePosition: 'object-[center_25%]', linkedin: 'https://www.linkedin.com/in/razvansuta/' },
      { name: 'Radu Ticiu', role: 'Co-founder', company: 'Growceanu', image: raduTiciu, linkedin: 'https://www.linkedin.com/in/raduticiu/' },
    ],
  },
  {
    icon: Building2,
    label: 'Bucharest',
    sublabel: 'Demo Day @ Supertree',
    color: 'text-sky-400',
    dotColor: 'bg-sky-400',
    isLast: true,
    mentors: [
      { name: 'Alexandru Golub', role: 'Co-Founder', company: 'Pupsi', image: alexandruGolub, linkedin: 'https://www.linkedin.com/in/golubalexandru/' },
      { name: 'Radu-Cristian Gheorghe', role: 'Sustainability Specialist', company: 'Autonom Group', image: raduCristianGheorghe, linkedin: 'https://www.linkedin.com/in/radu-cristian-gheorghe-3b1230339/' },
      { name: 'Aleodor Tabarcea', role: 'Engineering Manager', company: 'Stripe', image: aleodorTabarcea, linkedin: 'https://www.linkedin.com/in/aleodor-tabarcea/' },
    ],
  },
];

const MentorCard = ({ mentor }: { mentor: MentorInfo }) => (
  <div className="flex items-center gap-3 px-3 py-2 rounded-xl bg-secondary/60 border border-border">
    <div className="w-10 h-10 rounded-full overflow-hidden shrink-0 border border-border">
      <img
        src={mentor.image}
        alt={mentor.name}
        loading="lazy"
        className={`w-full h-full object-cover ${mentor.imagePosition || ''}`}
      />
    </div>
    <div className="min-w-0 flex-1">
      <p className="text-sm font-semibold text-foreground leading-tight truncate">{mentor.name}</p>
      <p className="text-xs text-muted-foreground leading-tight truncate">
        {mentor.role}{mentor.company ? ` · ${mentor.company}` : ''}
      </p>
    </div>
    {mentor.linkedin && (
      <a href={mentor.linkedin} target="_blank" rel="noopener noreferrer" aria-label={`${mentor.name} on LinkedIn`} className="shrink-0 w-7 h-7 rounded-full bg-primary/10 hover:bg-primary/20 transition-colors flex items-center justify-center">
        <Linkedin className="h-3.5 w-3.5 text-primary" />
      </a>
    )}
  </div>
);

const Station = ({ icon: Icon, label, sublabel, mentors, color, dotColor, isLast }: StationData) => (
  <div className="relative flex gap-6">
    {/* Rail line */}
    <div className="flex flex-col items-center">
      <div className={`w-5 h-5 rounded-full ${dotColor} ring-4 ring-background z-10 shrink-0`} />
      {!isLast && <div className="w-0.5 flex-1 bg-border" />}
    </div>

    {/* Content */}
    <div className={`${isLast ? 'pb-0' : 'pb-12'} flex-1 min-w-0`}>
      <div className="flex items-center gap-2 mb-1">
        <Icon className={`h-5 w-5 ${color} shrink-0`} />
        <h3 className={`text-lg font-bold ${color}`}>{label}</h3>
      </div>
      <p className="text-muted-foreground text-sm mb-4">{sublabel}</p>

      <div className={`grid grid-cols-1 ${mentors.length > 3 ? 'sm:grid-cols-2' : ''} gap-2`}>
        {mentors.map((m) => (
          <MentorCard key={m.name} mentor={m} />
        ))}
      </div>
    </div>
  </div>
);

const MentorRoute = () => (
  <div className="max-w-5xl mx-auto">
    {stations.map((station) => (
      <Station key={station.label} {...station} />
    ))}
  </div>
);

export default MentorRoute;
