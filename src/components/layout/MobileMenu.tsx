'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { navLinks } from '@/data/navigation';

interface MobileMenuProps {
  onClose: () => void;
}

const menuVariants = {
  closed: {
    opacity: 0,
    transition: { duration: 0.3 },
  },
  open: {
    opacity: 1,
    transition: { duration: 0.3 },
  },
};

const linkVariants = {
  closed: { opacity: 0, y: 20 },
  open: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1 + 0.2,
      duration: 0.5,
      ease: [0.25, 0.1, 0.25, 1] as const,
    },
  }),
};

export function MobileMenu({ onClose }: MobileMenuProps) {
  return (
    <motion.div
      variants={menuVariants}
      initial="closed"
      animate="open"
      exit="closed"
      className="fixed inset-0 z-50 bg-black"
    >
      {/* Close Button */}
      <button
        onClick={onClose}
        className="absolute top-6 right-6 p-2 text-white z-10"
        aria-label="Close menu"
      >
        <svg
          className="w-8 h-8"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={1.5}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>

      {/* Logo */}
      <div className="absolute top-6 left-6">
        <span className="font-heading font-bold text-2xl text-white tracking-tight">
          {"<Timotius />"}
        </span>
      </div>

      {/* Navigation Links */}
      <nav className="h-full flex flex-col items-center justify-center gap-6">
        {navLinks.map((link, index) => (
          <motion.div
            key={link.href}
            custom={index}
            variants={linkVariants}
            initial="closed"
            animate="open"
          >
            <Link
              href={link.href}
              onClick={onClose}
              className="text-outlined-white font-heading font-bold text-3xl sm:text-4xl md:text-5xl uppercase tracking-tight hover:scale-105 transition-transform block"
            >
              {link.label}
            </Link>
          </motion.div>
        ))}
      </nav>
    </motion.div>
  );
}
