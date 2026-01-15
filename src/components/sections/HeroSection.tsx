'use client';

import { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { gsap, ScrollTrigger } from '@/lib/gsap';
import { OutlinedText } from '../typography/OutlinedText';
import { Button } from '../ui/Button';
import { ScrollIndicator } from '../ui/ScrollIndicator';

export function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const ctx = gsap.context(() => {
      // Parallax effect on scroll
      gsap.to(contentRef.current, {
        yPercent: 25,
        ease: 'none',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: true,
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen flex items-center justify-center bg-black overflow-hidden"
    >
      {/* Background subtle gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-neutral-900/20 via-transparent to-black/60" />

      {/* Grid pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
        }}
      />

      {/* Content */}
      <div
        ref={contentRef}
        className="relative z-10 container mx-auto px-6 text-center"
      >
        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="text-white/50 text-xs sm:text-sm uppercase tracking-[0.3em] mb-8 font-medium"
        >
          Houston&apos;s Premier Marketing Technology Partner
        </motion.p>

        {/* Main Headline */}
        <div className="mb-6">
          <OutlinedText as="h1" size="3xl" variant="white" animate={false}>
            <motion.span
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
              className="block"
            >
              Bridge the
            </motion.span>
          </OutlinedText>
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
            className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-white italic mt-2"
          >
            Social & Digital
          </motion.h1>
        </div>

        {/* Supporting text */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.6 }}
          className="text-white/60 text-base sm:text-lg md:text-xl max-w-2xl mx-auto mb-12 font-light leading-relaxed"
        >
          We help Houston businesses grow through strategic websites, SEO,
          paid advertising, and marketing automation.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1, duration: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Button variant="primary" size="lg" href="/contact" withArrow>
            Start Your Project
          </Button>
          <Button variant="outline" size="lg" href="/portfolio">
            View Our Work
          </Button>
        </motion.div>

        {/* Trust badges */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4, duration: 0.8 }}
          className="mt-16 sm:mt-20 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-8 text-white/40 text-sm"
        >
          <div className="flex items-center gap-2">
            <span className="text-white/60 font-semibold">50+</span>
            <span>Houston Businesses</span>
          </div>
          <span className="hidden sm:block w-1 h-1 bg-white/30 rounded-full" />
          <div className="flex items-center gap-2">
            <span className="text-white/60 font-semibold">5.0</span>
            <span>Google Rating</span>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <ScrollIndicator />

      {/* Corner decorations */}
      <div className="absolute top-8 left-8 w-16 h-16 border-l border-t border-white/10" />
      <div className="absolute top-8 right-8 w-16 h-16 border-r border-t border-white/10" />
      <div className="absolute bottom-8 left-8 w-16 h-16 border-l border-b border-white/10" />
      <div className="absolute bottom-8 right-8 w-16 h-16 border-r border-b border-white/10" />
    </section>
  );
}
