import { Train, MapPin, Building2 } from 'lucide-react';

interface StationProps {
  icon: React.ElementType;
  label: string;
  sublabel: string;
  mentors: string[];
  color: string;
  dotColor: string;
  isLast?: boolean;
}

const stations: StationProps[] = [
  {
    icon: Train,
    label: 'On the Train',
    sublabel: 'Bucharest → Timișoara → Bucharest',
    mentors: [
      'Nicoleta Pîrvu',
      'Cosmin Pîrvu',
      'George Bonea',
      'Cosmin Bolocan',
      'Nick Ungureanu',
      'Tiberiu Lepădatu',
      'Mihai Burada',
      'Ștefania Duță',
    ],
    color: 'text-primary',
    dotColor: 'bg-primary',
  },
  {
    icon: MapPin,
    label: 'Timișoara',
    sublabel: 'Build-day venue',
    mentors: [
      'Toma Grozăvescu',
      'Iulia Andritoiu Caizer',
      'Zoltan-Cristian Bereczki',
      'Andreea Oproiu',
      'Adrian Gheorghe',
      'Răzvan Suta',
      'Radu Ticiu',
    ],
    color: 'text-accent',
    dotColor: 'bg-accent',
  },
  {
    icon: Building2,
    label: 'Bucharest',
    sublabel: 'Demo Day @ Supertree',
    mentors: ['Alex Goub', 'Aleodor Tabarcea', 'Radu-Cristian Gheorghe'],
    color: 'text-sky-400',
    dotColor: 'bg-sky-400',
    isLast: true,
  },
];

const Station = ({ icon: Icon, label, sublabel, mentors, color, dotColor, isLast }: StationProps) => (
  <div className="relative flex gap-6">
    {/* Rail line */}
    <div className="flex flex-col items-center">
      <div className={`w-5 h-5 rounded-full ${dotColor} ring-4 ring-background z-10 shrink-0`} />
      {!isLast && <div className="w-0.5 flex-1 bg-border" />}
    </div>

    {/* Content */}
    <div className={`pb-12 ${isLast ? 'pb-0' : ''}`}>
      <div className="flex items-center gap-2 mb-1">
        <Icon className={`h-5 w-5 ${color}`} />
        <h3 className={`text-lg font-bold ${color}`}>{label}</h3>
      </div>
      <p className="text-muted-foreground text-sm mb-4">{sublabel}</p>

      <div className="flex flex-wrap gap-2">
        {mentors.map((name) => (
          <span
            key={name}
            className="px-3 py-1.5 rounded-full bg-secondary text-foreground text-sm font-medium border border-border"
          >
            {name}
          </span>
        ))}
      </div>
    </div>
  </div>
);

const MentorRoute = () => (
  <div className="max-w-3xl mx-auto">
    {stations.map((station) => (
      <Station key={station.label} {...station} />
    ))}
  </div>
);

export default MentorRoute;
