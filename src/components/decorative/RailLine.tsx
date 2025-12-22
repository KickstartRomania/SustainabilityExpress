import { cn } from '@/lib/utils';
import { Train, Leaf } from 'lucide-react';

interface RailLineProps {
  className?: string;
  variant?: 'horizontal' | 'vertical';
  showTrain?: boolean;
  showLeaves?: boolean;
  animate?: boolean;
}

const RailLine = ({ 
  className, 
  variant = 'horizontal', 
  showTrain = false,
  showLeaves = false,
  animate = true 
}: RailLineProps) => {
  if (variant === 'vertical') {
    return (
      <div className={cn('relative flex flex-col items-center', className)}>
        {/* Vertical rails */}
        <div className="absolute inset-y-0 left-1 w-0.5 bg-gradient-to-b from-transparent via-primary/30 to-transparent" />
        <div className="absolute inset-y-0 right-1 w-0.5 bg-gradient-to-b from-transparent via-primary/30 to-transparent" />
        
        {/* Sleepers */}
        <div className="flex flex-col justify-between h-full py-4 w-full">
          {Array.from({ length: 12 }).map((_, i) => (
            <div
              key={i}
              className="h-0.5 w-full bg-muted-foreground/15 rounded-full"
            />
          ))}
        </div>
        
        {/* Decorative leaves along rail */}
        {showLeaves && (
          <>
            <Leaf className="absolute top-1/4 -left-4 h-4 w-4 text-primary/30 rotate-45" />
            <Leaf className="absolute top-2/3 -right-4 h-3 w-3 text-primary/20 -rotate-12" />
          </>
        )}
      </div>
    );
  }

  return (
    <div className={cn('relative w-full', className)}>
      {/* Rail tracks */}
      <div className="relative h-6 flex flex-col justify-between">
        {/* Top rail */}
        <div className="h-0.5 bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
        
        {/* Sleepers */}
        <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 flex justify-between px-4">
          {Array.from({ length: 24 }).map((_, i) => (
            <div
              key={i}
              className="w-1 h-3 bg-muted-foreground/15 rounded-sm"
            />
          ))}
        </div>
        
        {/* Bottom rail */}
        <div className="h-0.5 bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
      </div>
      
      {/* Animated train on rail */}
      {showTrain && animate && (
        <div className="absolute top-1/2 -translate-y-1/2 animate-train-right">
          <Train className="h-4 w-4 text-primary/50" />
        </div>
      )}
      
      {/* Decorative leaves along rail */}
      {showLeaves && (
        <>
          <Leaf className="absolute -top-3 left-1/4 h-4 w-4 text-primary/25 rotate-12 animate-float" style={{ animationDelay: '0s' }} />
          <Leaf className="absolute -bottom-3 left-1/2 h-3 w-3 text-primary/20 -rotate-45 animate-float" style={{ animationDelay: '1s' }} />
          <Leaf className="absolute -top-2 right-1/3 h-3 w-3 text-primary/30 rotate-90 animate-float" style={{ animationDelay: '2s' }} />
        </>
      )}
    </div>
  );
};

export default RailLine;
