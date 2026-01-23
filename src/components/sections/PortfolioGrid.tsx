'use client';

import { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { gsap, ScrollTrigger } from '@/lib/gsap';
import { OutlinedText } from '../typography/OutlinedText';
import { Button } from '../ui/Button';
import { portfolioProjects } from '@/data/portfolio';
import { cn } from '@/lib/utils';

export function PortfolioGrid() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const ctx = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>('.portfolio-item').forEach((item) => {
        gsap.from(item, {
          opacity: 0,
          y: 60,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: item,
            start: 'top 85%',
            toggleActions: 'play none none reverse',
          },
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-20 sm:py-24 lg:py-32 bg-black" id="portfolio">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <OutlinedText as="h2" size="xl" variant="white">
            Portfolio
          </OutlinedText>
          <p className="text-white/50 mt-4 max-w-2xl mx-auto">
            I built applications using <span className="font-bold text-white">React Native</span> framework.
          </p>
        </div>

        {/* Portfolio Items - Alternating Layout */}
        <div className="space-y-20 sm:space-y-28">
          {portfolioProjects.map((project, index) => (
            <div
              key={project.id}
              className={cn(
                'portfolio-item grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center',
                index % 2 === 1 && 'lg:[&>*:first-child]:order-2'
              )}
            >
              {/* Image */}
              <motion.div
                className="relative aspect-[4/3] rounded-sm overflow-hidden bg-neutral-900 group"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.4 }}
              >
                {/* Placeholder gradient for demo */}
                <div className="absolute inset-0 bg-gradient-to-br from-neutral-800 to-neutral-900" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-white/20 font-heading font-bold text-4xl">
                    {project.title}
                  </span>
                </div>
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
              </motion.div>

              {/* Content */}
              <div>
                <span className="text-white/40 text-xs sm:text-sm uppercase tracking-[0.2em]">
                  {project.category}
                </span>
                <h3 className="font-heading font-bold text-3xl sm:text-4xl md:text-5xl text-white mt-3 mb-4">
                  {project.title}
                </h3>
                <p className="text-white/60 text-base sm:text-lg mb-6 leading-relaxed">
                  {project.description}
                </p>

                {/* Results */}
                <div className="flex gap-6 sm:gap-8 mb-8">
                  <div>
                    <div className="text-white font-heading font-bold text-2xl">
                      {project.results.ulasan}
                    </div>
                    <div className="text-white/40 text-xs uppercase tracking-wider mt-1">
                      Rate
                    </div>
                  </div>
                  <div>
                    <div className="text-white font-heading font-bold text-2xl">
                      {project.results.download}
                    </div>
                    <div className="text-white/40 text-xs uppercase tracking-wider mt-1">
                      Download
                    </div>
                  </div>
                </div>

                <Button variant="outline" size="md" href={project.url} withArrow>
                  View Apps
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
