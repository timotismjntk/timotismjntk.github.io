'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { navLinks, socialLinks } from '@/data/navigation';

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
          SoTech
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
              className="text-outlined-white font-heading font-bold text-5xl sm:text-6xl uppercase tracking-tight hover:scale-105 transition-transform block"
            >
              {link.label}
            </Link>
          </motion.div>
        ))}

        {/* CTA Button */}
        <motion.div
          custom={navLinks.length}
          variants={linkVariants}
          initial="closed"
          animate="open"
          className="mt-8"
        >
          <Link
            href="/contact"
            onClick={onClose}
            className="inline-flex items-center gap-2 px-8 py-4 border-2 border-white text-white font-medium uppercase tracking-[0.15em] text-sm hover:bg-white hover:text-black transition-all"
          >
            Get Started
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
                d="M5 12h14M12 5l7 7-7 7"
              />
            </svg>
          </Link>
        </motion.div>
      </nav>

      {/* Bottom Info */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
        className="absolute bottom-8 left-0 right-0 px-6"
      >
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-center sm:text-left">
            <p className="text-white/80 text-sm">info@thesocialtech.net</p>
            <p className="text-white/50 text-xs mt-1">Houston, TX</p>
          </div>
          <div className="flex gap-6">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/50 hover:text-white transition-colors text-sm uppercase tracking-wider"
              >
                {social.label}
              </a>
            ))}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
