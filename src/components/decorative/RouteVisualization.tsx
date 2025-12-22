import { cn } from '@/lib/utils';
import { Train } from 'lucide-react';

interface RouteVisualizationProps {
  className?: string;
  stops: string[];
}

const RouteVisualization = ({ className, stops }: RouteVisualizationProps) => {
  return (
    <div className={cn('flex items-center justify-center gap-2 flex-wrap', className)}>
      {stops.map((stop, index) => (
        <div key={index} className="flex items-center gap-2">
          {/* Station */}
          <div className="flex items-center gap-2 bg-card px-5 py-2.5 rounded-full border border-border">
            <div 
              className="w-2.5 h-2.5 rounded-full bg-primary animate-pulse"
              style={{ animationDelay: `${index * 0.5}s` }}
            />
            <span className="font-semibold text-foreground text-sm">{stop}</span>
          </div>
          
          {/* Rail connection to next stop */}
          {index < stops.length - 1 && (
            <div className="flex items-center gap-1 px-2">
              {/* Rail segment */}
              <div className="w-8 h-3 relative hidden sm:block">
                <div className="absolute inset-x-0 top-0.5 h-px bg-primary/40" />
                <div className="absolute inset-x-0 bottom-0.5 h-px bg-primary/40" />
                <div className="flex justify-between h-full items-center">
                  {Array.from({ length: 4 }).map((_, i) => (
                    <div key={i} className="w-px h-1.5 bg-muted-foreground/30" />
                  ))}
                </div>
              </div>
              <Train className="h-4 w-4 text-primary/60" />
              <div className="w-8 h-3 relative hidden sm:block">
                <div className="absolute inset-x-0 top-0.5 h-px bg-primary/40" />
                <div className="absolute inset-x-0 bottom-0.5 h-px bg-primary/40" />
                <div className="flex justify-between h-full items-center">
                  {Array.from({ length: 4 }).map((_, i) => (
                    <div key={i} className="w-px h-1.5 bg-muted-foreground/30" />
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default RouteVisualization;
