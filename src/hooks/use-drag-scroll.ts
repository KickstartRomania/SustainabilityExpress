import { useRef, useState, useCallback, useEffect } from 'react';

interface UseDragScrollOptions {
  onDragStart?: () => void;
  onDragEnd?: () => void;
}

export function useDragScroll<T extends HTMLElement>(options: UseDragScrollOptions = {}) {
  const ref = useRef<T>(null);
  const [isDragging, setIsDragging] = useState(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);

  const handleMouseDown = useCallback((e: React.MouseEvent) => {
    if (!ref.current) return;
    setIsDragging(true);
    startX.current = e.pageX - ref.current.offsetLeft;
    scrollLeft.current = ref.current.scrollLeft;
    ref.current.style.cursor = 'grabbing';
    options.onDragStart?.();
  }, [options]);

  const handleMouseUp = useCallback(() => {
    setIsDragging(false);
    if (ref.current) {
      ref.current.style.cursor = 'grab';
    }
    options.onDragEnd?.();
  }, [options]);

  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    if (!isDragging || !ref.current) return;
    e.preventDefault();
    const x = e.pageX - ref.current.offsetLeft;
    const walk = (x - startX.current) * 2;
    ref.current.scrollLeft = scrollLeft.current - walk;
  }, [isDragging]);

  const handleMouseLeave = useCallback(() => {
    if (isDragging) {
      setIsDragging(false);
      if (ref.current) {
        ref.current.style.cursor = 'grab';
      }
      options.onDragEnd?.();
    }
  }, [isDragging, options]);

  // Touch events
  const handleTouchStart = useCallback((e: React.TouchEvent) => {
    if (!ref.current) return;
    setIsDragging(true);
    startX.current = e.touches[0].pageX - ref.current.offsetLeft;
    scrollLeft.current = ref.current.scrollLeft;
    options.onDragStart?.();
  }, [options]);

  const handleTouchEnd = useCallback(() => {
    setIsDragging(false);
    options.onDragEnd?.();
  }, [options]);

  const handleTouchMove = useCallback((e: React.TouchEvent) => {
    if (!isDragging || !ref.current) return;
    const x = e.touches[0].pageX - ref.current.offsetLeft;
    const walk = (x - startX.current) * 2;
    ref.current.scrollLeft = scrollLeft.current - walk;
  }, [isDragging]);

  return {
    ref,
    isDragging,
    handlers: {
      onMouseDown: handleMouseDown,
      onMouseUp: handleMouseUp,
      onMouseMove: handleMouseMove,
      onMouseLeave: handleMouseLeave,
      onTouchStart: handleTouchStart,
      onTouchEnd: handleTouchEnd,
      onTouchMove: handleTouchMove,
    },
  };
}
