'use client';

import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register GSAP plugins
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

// Custom easing functions
export const eases = {
  smooth: 'power2.out',
  snappy: 'power3.out',
  elastic: 'elastic.out(1, 0.5)',
  cinematic: 'power4.out',
  cinematicInOut: 'power4.inOut',
  slow: 'power1.inOut',
  bounce: 'bounce.out',
};

// Default ScrollTrigger settings
export const scrollTriggerDefaults = {
  start: 'top 80%',
  end: 'bottom 20%',
  toggleActions: 'play none none reverse',
};

// Preset animations
export const animations = {
  fadeInUp: {
    opacity: 0,
    y: 40,
    duration: 0.8,
    ease: eases.cinematic,
  },
  fadeIn: {
    opacity: 0,
    duration: 0.6,
    ease: eases.smooth,
  },
  scaleIn: {
    scale: 0.95,
    opacity: 0,
    duration: 0.6,
    ease: eases.snappy,
  },
  slideInLeft: {
    x: -60,
    opacity: 0,
    duration: 0.8,
    ease: eases.cinematic,
  },
  slideInRight: {
    x: 60,
    opacity: 0,
    duration: 0.8,
    ease: eases.cinematic,
  },
};

export { gsap, ScrollTrigger };
