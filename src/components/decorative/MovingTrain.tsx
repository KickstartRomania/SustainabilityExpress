import { cn } from '@/lib/utils';
import { Train } from 'lucide-react';

interface MovingTrainProps {
  className?: string;
  direction?: 'left' | 'right';
}

const MovingTrain = ({ className, direction = 'right' }: MovingTrainProps) => {
  return (
    <div className={cn('absolute overflow-hidden pointer-events-none', className)}>
      <div 
        className={cn(
          'flex items-center gap-1',
          direction === 'right' ? 'animate-train-right' : 'animate-train-left'
        )}
      >
        {/* Train Icon */}
        <Train className="h-6 w-6 text-primary/40" />
        
        {/* Trail/Smoke effect */}
        <div className="flex gap-1">
          {[...Array(3)].map((_, i) => (
            <div
              key={i}
              className="w-2 h-2 rounded-full bg-primary/20"
              style={{ 
                animationDelay: `${i * 0.1}s`,
                transform: `scale(${1 - i * 0.2})`,
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovingTrain;
