'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { MobileMenu } from './MobileMenu';
import { Button } from '../ui/Button';
import { navLinks } from '@/data/navigation';
import { cn } from '@/lib/utils';

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-500',
          isScrolled
            ? 'bg-black/90 backdrop-blur-md py-4 border-b border-white/5'
            : 'bg-transparent py-6'
        )}
      >
        <div className="container mx-auto px-6 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="relative z-10 group">
            <span className="font-heading font-bold text-2xl text-white tracking-tight transition-opacity group-hover:opacity-80">
              SoTech
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-10">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-white/70 hover:text-white transition-colors font-medium text-sm uppercase tracking-[0.15em] relative group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-white transition-all duration-300 group-hover:w-full" />
              </Link>
            ))}
            <Button variant="outline" size="sm" href="/contact">
              Get Started
            </Button>
          </nav>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsMobileMenuOpen(true)}
            className="lg:hidden relative z-10 p-2 -mr-2"
            aria-label="Open menu"
          >
            <div className="w-7 h-5 flex flex-col justify-between">
              <motion.span
                className="block w-full h-0.5 bg-white origin-right"
                initial={false}
              />
              <motion.span
                className="block w-3/4 h-0.5 bg-white ml-auto"
                initial={false}
              />
              <motion.span
                className="block w-full h-0.5 bg-white origin-right"
                initial={false}
              />
            </div>
          </button>
        </div>
      </motion.header>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <MobileMenu onClose={() => setIsMobileMenuOpen(false)} />
        )}
      </AnimatePresence>
    </>
  );
}
