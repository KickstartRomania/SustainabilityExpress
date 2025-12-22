import { cn } from '@/lib/utils';
import { Train } from 'lucide-react';

interface JourneyRailProps {
  className?: string;
  steps: number;
  activeStep?: number;
}

const JourneyRail = ({ className, steps, activeStep = 0 }: JourneyRailProps) => {
  return (
    <div className={cn('hidden md:flex items-center justify-between absolute top-10 left-0 right-0 z-0', className)}>
      {Array.from({ length: steps }).map((_, index) => (
        <div key={index} className="flex-1 flex items-center">
          {index < steps - 1 && (
            <div className="flex-1 h-4 relative mx-4">
              {/* Rail tracks */}
              <div className="absolute inset-x-0 top-1 h-0.5 bg-primary/30" />
              <div className="absolute inset-x-0 bottom-1 h-0.5 bg-primary/30" />
              
              {/* Sleepers */}
              <div className="flex justify-between h-full items-center px-2">
                {Array.from({ length: 8 }).map((_, i) => (
                  <div key={i} className="w-0.5 h-2 bg-muted-foreground/20 rounded-full" />
                ))}
              </div>
              
              {/* Train indicator */}
              {index === activeStep && (
                <Train className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-4 w-4 text-primary animate-pulse" />
              )}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default JourneyRail;
