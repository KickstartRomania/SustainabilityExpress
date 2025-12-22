import { cn } from '@/lib/utils';

interface RailPatternProps {
  className?: string;
}

const RailPattern = ({ className }: RailPatternProps) => {
  return (
    <svg
      className={cn('absolute pointer-events-none', className)}
      viewBox="0 0 100 100"
      preserveAspectRatio="none"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Left rail */}
      <line x1="35" y1="0" x2="35" y2="100" stroke="currentColor" strokeWidth="2" className="text-primary/10" />
      {/* Right rail */}
      <line x1="65" y1="0" x2="65" y2="100" stroke="currentColor" strokeWidth="2" className="text-primary/10" />
      
      {/* Sleepers */}
      {Array.from({ length: 10 }).map((_, i) => (
        <line
          key={i}
          x1="30"
          y1={i * 10 + 5}
          x2="70"
          y2={i * 10 + 5}
          stroke="currentColor"
          strokeWidth="3"
          strokeLinecap="round"
          className="text-muted-foreground/10"
        />
      ))}
    </svg>
  );
};

export default RailPattern;
