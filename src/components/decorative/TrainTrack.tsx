import { cn } from '@/lib/utils';

interface TrainTrackProps {
  className?: string;
  variant?: 'horizontal' | 'vertical' | 'diagonal';
}

const TrainTrack = ({ className, variant = 'horizontal' }: TrainTrackProps) => {
  const trackStyles = {
    horizontal: 'w-full h-4',
    vertical: 'h-full w-4',
    diagonal: 'w-full h-4 rotate-12',
  };

  return (
    <div className={cn('relative overflow-hidden', trackStyles[variant], className)}>
      {/* Rails */}
      <div className="absolute inset-x-0 top-0 h-0.5 bg-gradient-to-r from-transparent via-muted-foreground/30 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-0.5 bg-gradient-to-r from-transparent via-muted-foreground/30 to-transparent" />
      
      {/* Sleepers/Ties */}
      <div className="flex justify-between items-center h-full px-2">
        {Array.from({ length: 20 }).map((_, i) => (
          <div
            key={i}
            className="w-1 h-2 bg-muted-foreground/20 rounded-sm"
          />
        ))}
      </div>
    </div>
  );
};

export default TrainTrack;
