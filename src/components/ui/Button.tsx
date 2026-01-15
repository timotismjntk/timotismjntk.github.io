'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  href?: string;
  onClick?: () => void;
  withArrow?: boolean;
  className?: string;
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
}

const variants = {
  primary: 'bg-white text-black hover:bg-white/90 border-2 border-white',
  outline: 'bg-transparent text-white border-2 border-white hover:bg-white hover:text-black',
  ghost: 'bg-transparent text-white hover:text-white/80 border-transparent',
};

const sizes = {
  sm: 'px-5 py-2.5 text-xs',
  md: 'px-7 py-3.5 text-sm',
  lg: 'px-9 py-4 text-base',
};

function ArrowIcon({ className }: { className?: string }) {
  return (
    <svg
      className={cn('w-4 h-4', className)}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M5 12h14M12 5l7 7-7 7" />
    </svg>
  );
}

export function Button({
  children,
  variant = 'primary',
  size = 'md',
  href,
  onClick,
  withArrow = false,
  className,
  disabled = false,
  type = 'button',
}: ButtonProps) {
  const baseStyles = cn(
    'inline-flex items-center justify-center gap-2 font-medium uppercase tracking-[0.15em] transition-all duration-300 rounded-none',
    variants[variant],
    sizes[size],
    disabled && 'opacity-50 cursor-not-allowed pointer-events-none',
    className
  );

  const content = (
    <>
      <span>{children}</span>
      {withArrow && (
        <motion.span
          className="inline-block"
          initial={false}
          whileHover={{ x: 4 }}
          transition={{ duration: 0.2 }}
        >
          <ArrowIcon />
        </motion.span>
      )}
    </>
  );

  if (href && !disabled) {
    return (
      <Link href={href} className={baseStyles}>
        {content}
      </Link>
    );
  }

  return (
    <motion.button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={baseStyles}
      whileHover={!disabled ? { scale: 1.02 } : undefined}
      whileTap={!disabled ? { scale: 0.98 } : undefined}
    >
      {content}
    </motion.button>
  );
}
