'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

interface CarouselCardProps {
  number: string;
  title: string;
  description: string;
  href?: string;
}

export function CarouselCard({
  number,
  title,
  description,
  href = '#',
}: CarouselCardProps) {
  return (
    <Link href={href} className="block flex-shrink-0">
      <motion.div
        className="w-[300px] sm:w-[340px] md:w-[380px] p-6 sm:p-8 glass rounded-sm group cursor-pointer"
        whileHover={{ y: -4 }}
        transition={{ duration: 0.3 }}
      >
        {/* Number indicator */}
        <span className="text-white/20 font-heading font-bold text-5xl sm:text-6xl block mb-4 transition-colors group-hover:text-white/30">
          {number}
        </span>

        {/* Title */}
        <h3 className="text-white font-heading font-bold text-xl sm:text-2xl mb-3 flex items-center gap-2">
          {title}
          <motion.svg
            className="w-5 h-5 opacity-0 group-hover:opacity-100 transition-opacity"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            initial={false}
            whileHover={{ x: 4 }}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M5 12h14M12 5l7 7-7 7"
            />
          </motion.svg>
        </h3>

        {/* Description */}
        <p className="text-white/50 leading-relaxed text-sm sm:text-base">
          {description}
        </p>
      </motion.div>
    </Link>
  );
}
