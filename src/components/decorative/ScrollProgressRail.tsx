import { cn } from '@/lib/utils';
import { Train } from 'lucide-react';
import { useEffect, useState } from 'react';

interface Section {
  id: string;
  label: string;
}

interface ScrollProgressRailProps {
  sections: Section[];
  className?: string;
}

const ScrollProgressRail = ({ sections, className }: ScrollProgressRailProps) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = docHeight > 0 ? scrollTop / docHeight : 0;
      setScrollProgress(progress);

      // Find active section
      const sectionElements = sections.map(s => document.getElementById(s.id));
      const viewportMiddle = scrollTop + window.innerHeight / 3;

      let currentIndex = 0;
      sectionElements.forEach((el, index) => {
        if (el && el.offsetTop <= viewportMiddle) {
          currentIndex = index;
        }
      });
      setActiveIndex(currentIndex);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [sections]);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const railHeight = sections.length > 1 ? 100 : 0;
  const trainPosition = (activeIndex / (sections.length - 1)) * railHeight;

  return (
    <div className={cn(
      'fixed right-4 top-1/2 -translate-y-1/2 z-50 hidden lg:flex flex-col items-center',
      className
    )}>
      {/* Rail track background */}
      <div className="relative h-64 w-6 flex flex-col items-center">
        {/* Main rail */}
        <div className="absolute inset-y-0 left-1/2 -translate-x-1/2 w-1 bg-gradient-to-b from-primary/20 via-primary/40 to-primary/20 rounded-full" />
        
        {/* Rail ties/sleepers */}
        <div className="absolute inset-y-0 left-0 right-0 flex flex-col justify-between py-2">
          {Array.from({ length: 12 }).map((_, i) => (
            <div key={i} className="h-0.5 w-full bg-muted-foreground/20 rounded-full" />
          ))}
        </div>

        {/* Station dots (sections) */}
        {sections.map((section, index) => {
          const position = sections.length > 1 ? (index / (sections.length - 1)) * 100 : 50;
          const isActive = index === activeIndex;
          const isPassed = index < activeIndex;
          
          return (
            <button
              key={section.id}
              onClick={() => scrollToSection(section.id)}
              className="absolute left-1/2 -translate-x-1/2 group flex items-center"
              style={{ top: `${position}%` }}
              aria-label={`Go to ${section.label}`}
            >
              {/* Station dot */}
              <div className={cn(
                'w-3 h-3 rounded-full border-2 transition-all duration-300 z-10',
                isActive 
                  ? 'bg-primary border-primary scale-125 shadow-lg shadow-primary/50' 
                  : isPassed
                    ? 'bg-primary/60 border-primary/60'
                    : 'bg-background border-muted-foreground/40 hover:border-primary/60'
              )} />
              
              {/* Label tooltip */}
              <span className={cn(
                'absolute right-8 whitespace-nowrap px-2 py-1 rounded text-xs font-medium',
                'bg-background/90 backdrop-blur-sm border border-border shadow-lg',
                'opacity-0 group-hover:opacity-100 transition-opacity duration-200',
                'pointer-events-none'
              )}>
                {section.label}
              </span>
            </button>
          );
        })}

        {/* Train indicator */}
        <div 
          className="absolute left-1/2 -translate-x-1/2 z-20 transition-all duration-500 ease-out"
          style={{ top: `calc(${trainPosition}% - 8px)` }}
        >
          <div className="relative">
            <Train className="h-4 w-4 text-primary rotate-90 drop-shadow-lg" />
            {/* Glow effect */}
            <div className="absolute inset-0 bg-primary/30 blur-md rounded-full animate-pulse" />
          </div>
        </div>

        {/* Progress fill */}
        <div 
          className="absolute left-1/2 -translate-x-1/2 w-0.5 bg-gradient-to-b from-primary to-primary/60 rounded-full origin-top transition-all duration-300"
          style={{ 
            height: `${scrollProgress * 100}%`,
            top: 0
          }}
        />
      </div>
    </div>
  );
};

export default ScrollProgressRail;
