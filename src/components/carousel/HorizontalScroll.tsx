'use client';

import { useRef, useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';
import { cn } from '@/lib/utils';

interface HorizontalScrollProps {
  children: React.ReactNode;
  className?: string;
}

export function HorizontalScroll({ children, className }: HorizontalScrollProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const [trackWidth, setTrackWidth] = useState(0);
  const [containerWidth, setContainerWidth] = useState(0);
  const [isDragging, setIsDragging] = useState(false);

  const x = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 300, damping: 30 });

  // Calculate progress percentage
  const maxDrag = Math.max(0, trackWidth - containerWidth);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const updateDimensions = () => {
      if (containerRef.current && trackRef.current) {
        setTrackWidth(trackRef.current.scrollWidth);
        setContainerWidth(containerRef.current.clientWidth);
      }
    };

    updateDimensions();
    window.addEventListener('resize', updateDimensions);

    // Update progress on x change
    const unsubscribe = x.on('change', (latest) => {
      if (maxDrag > 0) {
        setProgress(Math.abs(latest / maxDrag) * 100);
      }
    });

    return () => {
      window.removeEventListener('resize', updateDimensions);
      unsubscribe();
    };
  }, [x, maxDrag]);

  const handleDragEnd = () => {
    setIsDragging(false);
  };

  return (
    <div className={cn('relative', className)}>
      {/* Progress Bar */}
      <div className="absolute top-0 left-6 right-6 h-px bg-white/10 z-10">
        <motion.div
          className="h-full bg-white/60"
          style={{ width: `${progress}%` }}
        />
      </div>

      {/* Carousel Container */}
      <div
        ref={containerRef}
        className={cn(
          'overflow-hidden pt-8',
          isDragging ? 'cursor-grabbing' : 'cursor-grab'
        )}
      >
        <motion.div
          ref={trackRef}
          className="flex gap-6 pl-6"
          style={{ x: springX }}
          drag="x"
          dragConstraints={{
            left: -maxDrag,
            right: 0,
          }}
          dragElastic={0.1}
          dragTransition={{ bounceStiffness: 300, bounceDamping: 30 }}
          onDragStart={() => setIsDragging(true)}
          onDragEnd={handleDragEnd}
        >
          {children}
          {/* Spacer for last item visibility */}
          <div className="w-6 flex-shrink-0" />
        </motion.div>
      </div>

      {/* Drag hint on mobile */}
      <div className="md:hidden absolute right-6 bottom-4 flex items-center gap-2 text-white/40 text-xs">
        <span>Drag to explore</span>
        <svg
          className="w-4 h-4"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9 5l7 7-7 7"
          />
        </svg>
      </div>
    </div>
  );
}
