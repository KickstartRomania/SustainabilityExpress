import { cn } from '@/lib/utils';
import { Leaf } from 'lucide-react';

interface FloatingLeavesProps {
  className?: string;
  count?: number;
}

const FloatingLeaves = ({ className, count = 6 }: FloatingLeavesProps) => {
  const leaves = Array.from({ length: count }).map((_, i) => ({
    id: i,
    size: Math.random() * 16 + 12,
    left: `${Math.random() * 100}%`,
    delay: `${Math.random() * 5}s`,
    duration: `${Math.random() * 10 + 15}s`,
    opacity: Math.random() * 0.3 + 0.1,
  }));

  return (
    <div className={cn('absolute inset-0 overflow-hidden pointer-events-none', className)}>
      {leaves.map((leaf) => (
        <div
          key={leaf.id}
          className="absolute animate-float-leaf"
          style={{
            left: leaf.left,
            top: '-5%',
            animationDelay: leaf.delay,
            animationDuration: leaf.duration,
            opacity: leaf.opacity,
          }}
        >
          <Leaf
            className="text-primary rotate-45"
            style={{ width: leaf.size, height: leaf.size }}
          />
        </div>
      ))}
    </div>
  );
};

export default FloatingLeaves;
