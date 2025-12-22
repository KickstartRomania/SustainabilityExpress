import { cn } from '@/lib/utils';

interface CircuitLinesProps {
  className?: string;
}

const CircuitLines = ({ className }: CircuitLinesProps) => {
  return (
    <svg
      className={cn('absolute pointer-events-none opacity-20', className)}
      viewBox="0 0 400 400"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Horizontal lines with nodes */}
      <path
        d="M0 100 H100 V150 H200 V100 H400"
        stroke="currentColor"
        strokeWidth="1"
        className="text-primary"
      />
      <path
        d="M0 200 H150 V250 H250 V200 H400"
        stroke="currentColor"
        strokeWidth="1"
        className="text-primary"
      />
      <path
        d="M0 300 H80 V350 H320 V300 H400"
        stroke="currentColor"
        strokeWidth="1"
        className="text-primary"
      />
      
      {/* Nodes/Junction points */}
      <circle cx="100" cy="100" r="4" className="fill-primary" />
      <circle cx="200" cy="150" r="4" className="fill-primary" />
      <circle cx="150" cy="200" r="4" className="fill-primary" />
      <circle cx="250" cy="250" r="4" className="fill-primary" />
      <circle cx="80" cy="300" r="4" className="fill-primary" />
      <circle cx="320" cy="350" r="4" className="fill-primary" />
      
      {/* Animated pulse circles */}
      <circle cx="100" cy="100" r="4" className="fill-primary animate-ping opacity-75" />
      <circle cx="250" cy="250" r="4" className="fill-primary animate-ping opacity-75" style={{ animationDelay: '1s' }} />
    </svg>
  );
};

export default CircuitLines;
