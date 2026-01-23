'use client';

import { useRef, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { gsap } from '@/lib/gsap';
import { OutlinedText } from '../typography/OutlinedText';
import { Button } from '../ui/Button';
import { ScrollIndicator } from '../ui/ScrollIndicator';
import { SiGithub, SiInstagram } from '@icons-pack/react-simple-icons';

export function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  // Tambahkan instagram ke state agar konsisten
  const [stats, setStats] = useState({ github: '...' });

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const response = await fetch('/api/social-stats');
        const data = await response.json();
        setStats({
          github: data.github?.toLocaleString() || '0',
        });
      } catch (err) {
        console.error("Gagal mengambil data stats", err);
      }
    };

    fetchStats();

    if (typeof window === 'undefined') return;

    const ctx = gsap.context(() => {
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
      <div className="absolute inset-0 bg-gradient-to-b from-neutral-900/20 via-transparent to-black/60" />

      {/* Grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
        }}
      />

      <div ref={contentRef} className="relative z-10 container mx-auto px-6 text-center">
        
        {/* Main Headline */}
        <div className="mb-6">
          <OutlinedText as="h1" size="3xl" variant="white" animate={false}>
            <motion.span
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
              className="block"
            >
              Timotius<br />Simanjuntak
            </motion.span>
          </OutlinedText>
        </div>

        {/* Supporting text */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.6 }}
          className="text-white/60 text-base sm:text-lg md:text-xl max-w-2xl mx-auto mb-12 font-light leading-relaxed"
        >
          A senior Mobile App Engineer based in Indonesia.
          <br />Feel free to explore my work below.
        </motion.p>

        {/* Social Badges Section with Simple Icons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.3, duration: 0.6 }}
          className="mt-12 flex flex-wrap items-center justify-center gap-4"
        >
          {/* Github Badge */}
          <a 
            href="https://github.com/timotismjntk" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center bg-[#f6f8fa] hover:bg-white transition-all rounded-md overflow-hidden border border-neutral-300 group"
          >
            <div className="flex items-center gap-2 px-3 py-1.5 border-r border-neutral-300">
              <SiGithub size={18} className="text-black transition-transform group-hover:scale-110" />
              <span className="text-black text-sm font-bold">Follow @timotismjntk</span>
            </div>
            <div className="px-3 py-1.5 bg-white min-w-[50px]">
              <span className="text-black text-sm font-bold">{stats.github}</span>
            </div>
          </a>

          {/* Instagram Badge */}
          <a 
            href="https://www.instagram.com/timotius.simanjuntak24/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-3 bg-black border border-white/20 hover:border-white/40 transition-all px-4 py-2 rounded-full group"
          >
            <SiInstagram size={18} className="text-white transition-transform group-hover:scale-110" />
            <div className="flex flex-col items-start leading-none">
              <span className="text-white text-xs font-bold">Follow @timotius.simanjuntak24</span>
            </div>
          </a>
        </motion.div>

        {/* Trust badges */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.8 }}
          className="mt-16 sm:mt-20 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-8 text-white/40 text-sm"
        >
          <div className="flex items-center gap-2">
            <span className="text-white/60 font-semibold">5+</span>
            <span>Mobile APP Projects</span>
          </div>
          <span className="hidden sm:block w-1 h-1 bg-white/30 rounded-full" />
          <div className="flex items-center gap-2">
            <span className="text-white/60 font-semibold">5.0</span>
            <span>Client Satisfaction</span>
          </div>
        </motion.div>
      </div>

      <ScrollIndicator />

      {/* Decorations */}
      <div className="absolute top-4 left-4 sm:top-6 sm:left-6 md:top-8 md:left-8 w-8 h-8 sm:w-12 sm:h-12 md:w-16 md:h-16 border-l border-t border-white/10" />
      <div className="absolute top-4 right-4 sm:top-6 sm:right-6 md:top-8 md:right-8 w-8 h-8 sm:w-12 sm:h-12 md:w-16 md:h-16 border-r border-t border-white/10" />
      <div className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6 md:bottom-8 md:left-8 w-8 h-8 sm:w-12 sm:h-12 md:w-16 md:h-16 border-l border-b border-white/10" />
      <div className="absolute bottom-4 right-4 sm:bottom-6 sm:right-6 md:bottom-8 md:right-8 w-8 h-8 sm:w-12 sm:h-12 md:w-16 md:h-16 border-r border-b border-white/10" />
    </section>
  );
}