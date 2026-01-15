'use client';

import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface OutlinedTextProps {
  children: React.ReactNode;
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'span' | 'p';
  variant?: 'white' | 'black' | 'inherit';
  size?: 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl';
  animate?: boolean;
  fillOnHover?: boolean;
  className?: string;
}

const sizeClasses = {
  sm: 'text-2xl md:text-3xl lg:text-4xl',
  md: 'text-3xl md:text-4xl lg:text-5xl',
  lg: 'text-4xl md:text-5xl lg:text-6xl',
  xl: 'text-5xl md:text-6xl lg:text-7xl',
  '2xl': 'text-6xl md:text-7xl lg:text-8xl',
  '3xl': 'text-7xl md:text-8xl lg:text-[10rem]',
};

const variantClasses = {
  white: 'text-outlined-white',
  black: 'text-outlined-black',
  inherit: 'text-outlined',
};

export function OutlinedText({
  children,
  as: Component = 'h2',
  variant = 'white',
  size = 'lg',
  animate = true,
  fillOnHover = false,
  className,
}: OutlinedTextProps) {
  const classes = cn(
    'font-heading font-bold uppercase tracking-tight leading-none',
    fillOnHover ? 'text-outlined-fill-hover' : variantClasses[variant],
    sizeClasses[size],
    className
  );

  if (animate) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
      >
        <Component className={classes}>{children}</Component>
      </motion.div>
    );
  }

  return <Component className={classes}>{children}</Component>;
}
