import { cn } from '@/lib/utils';
import RailLine from './RailLine';

interface RailSectionProps {
  children: React.ReactNode;
  className?: string;
  showSideRails?: boolean;
  showTopRail?: boolean;
  showBottomRail?: boolean;
  railVariant?: 'subtle' | 'prominent';
}

const RailSection = ({ 
  children, 
  className,
  showSideRails = false,
  showTopRail = false,
  showBottomRail = false,
  railVariant = 'subtle'
}: RailSectionProps) => {
  const opacity = railVariant === 'subtle' ? 'opacity-40' : 'opacity-60';
  
  return (
    <div className={cn('relative', className)}>
      {/* Side rails */}
      {showSideRails && (
        <>
          <div className={cn('absolute left-4 md:left-8 top-0 bottom-0 w-4', opacity)}>
            <RailLine variant="vertical" showLeaves />
          </div>
          <div className={cn('absolute right-4 md:right-8 top-0 bottom-0 w-4', opacity)}>
            <RailLine variant="vertical" />
          </div>
        </>
      )}
      
      {/* Top rail */}
      {showTopRail && (
        <div className={cn('absolute top-0 left-0 right-0', opacity)}>
          <RailLine showLeaves />
        </div>
      )}
      
      {/* Bottom rail */}
      {showBottomRail && (
        <div className={cn('absolute bottom-0 left-0 right-0', opacity)}>
          <RailLine showTrain />
        </div>
      )}
      
      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};

export default RailSection;
