'use client';

import { useRef, useEffect, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { OutlinedText } from '../typography/OutlinedText';

const stats = [
  { value: 50, suffix: '+', label: 'Houston Businesses' },
  { value: 5.0, suffix: '', label: 'Google Rating', decimals: 1 },
  { value: 100, suffix: '%', label: 'Client Retention' },
  { value: 3, suffix: 'x', label: 'Average ROI' },
];

function AnimatedCounter({
  value,
  suffix,
  decimals = 0,
}: {
  value: number;
  suffix: string;
  decimals?: number;
}) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  useEffect(() => {
    if (isInView) {
      const duration = 2000;
      const steps = 60;
      const increment = value / steps;
      let current = 0;

      const timer = setInterval(() => {
        current += increment;
        if (current >= value) {
          setCount(value);
          clearInterval(timer);
        } else {
          setCount(current);
        }
      }, duration / steps);

      return () => clearInterval(timer);
    }
  }, [isInView, value]);

  return (
    <span ref={ref} className="font-heading font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white">
      {decimals > 0 ? count.toFixed(decimals) : Math.floor(count)}
      {suffix}
    </span>
  );
}

export function TrustSection() {
  return (
    <section className="py-20 sm:py-24 lg:py-32 bg-neutral-950">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <OutlinedText as="h2" size="lg" variant="white">
            Trusted by Houston
          </OutlinedText>
          <p className="text-white/50 mt-4 max-w-xl mx-auto">
            We&apos;ve helped dozens of Houston businesses transform their digital presence.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center"
            >
              <AnimatedCounter
                value={stat.value}
                suffix={stat.suffix}
                decimals={stat.decimals}
              />
              <p className="text-white/50 mt-3 text-sm uppercase tracking-wider">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Testimonial */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-20 max-w-3xl mx-auto text-center"
        >
          <blockquote className="text-white/70 text-lg sm:text-xl md:text-2xl font-light italic leading-relaxed">
            &quot;SoTech transformed our marketing operations. Their automation setup saves us hours weekly with increased qualified leads.&quot;
          </blockquote>
          <div className="mt-6 text-white/40 text-sm uppercase tracking-wider">
            — Houston Business Owner
          </div>
        </motion.div>
      </div>
    </section>
  );
}
