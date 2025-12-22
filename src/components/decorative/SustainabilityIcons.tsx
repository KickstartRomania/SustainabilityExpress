import { cn } from '@/lib/utils';
import { Leaf, Wind, Sun, Droplets, Recycle, TreeDeciduous } from 'lucide-react';

interface SustainabilityIconsProps {
  className?: string;
}

const icons = [
  { Icon: Leaf, delay: '0s' },
  { Icon: Wind, delay: '0.5s' },
  { Icon: Sun, delay: '1s' },
  { Icon: Droplets, delay: '1.5s' },
  { Icon: Recycle, delay: '2s' },
  { Icon: TreeDeciduous, delay: '2.5s' },
];

const SustainabilityIcons = ({ className }: SustainabilityIconsProps) => {
  return (
    <div className={cn('flex items-center justify-center gap-6 flex-wrap', className)}>
      {icons.map(({ Icon, delay }, index) => (
        <div
          key={index}
          className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center animate-bounce-subtle"
          style={{ animationDelay: delay }}
        >
          <Icon className="h-6 w-6 text-primary/60" />
        </div>
      ))}
    </div>
  );
};

export default SustainabilityIcons;
