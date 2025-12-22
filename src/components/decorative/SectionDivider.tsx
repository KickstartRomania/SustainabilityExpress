import { cn } from '@/lib/utils';
import { LucideIcon } from 'lucide-react';

interface SectionDividerProps {
  className?: string;
  icon?: LucideIcon;
}

const SectionDivider = ({ className, icon: Icon }: SectionDividerProps) => {
  return (
    <div className={cn('flex items-center justify-center gap-4', className)}>
      {/* Left rail segment */}
      <div className="flex-1 max-w-24 h-4 relative">
        <div className="absolute inset-x-0 top-1 h-0.5 bg-gradient-to-r from-transparent to-primary/40" />
        <div className="absolute inset-x-0 bottom-1 h-0.5 bg-gradient-to-r from-transparent to-primary/40" />
        <div className="flex justify-end gap-2 h-full items-center pr-1">
          {Array.from({ length: 4 }).map((_, i) => (
            <div key={i} className="w-0.5 h-2 bg-muted-foreground/20 rounded-full" />
          ))}
        </div>
      </div>
      
      {/* Center icon */}
      {Icon && (
        <div className="w-10 h-10 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center">
          <Icon className="h-5 w-5 text-primary" />
        </div>
      )}
      
      {/* Right rail segment */}
      <div className="flex-1 max-w-24 h-4 relative">
        <div className="absolute inset-x-0 top-1 h-0.5 bg-gradient-to-l from-transparent to-primary/40" />
        <div className="absolute inset-x-0 bottom-1 h-0.5 bg-gradient-to-l from-transparent to-primary/40" />
        <div className="flex justify-start gap-2 h-full items-center pl-1">
          {Array.from({ length: 4 }).map((_, i) => (
            <div key={i} className="w-0.5 h-2 bg-muted-foreground/20 rounded-full" />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SectionDivider;
