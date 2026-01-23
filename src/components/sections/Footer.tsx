'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { OutlinedText } from '../typography/OutlinedText';
import { Button } from '../ui/Button';
import { footerLinks, socialLinks } from '@/data/navigation';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black border-t border-white/5">
      {/* Copyright */}
      <div className="border-t border-white/5">
        <div className="container mx-auto px-6 py-6 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-white/30 text-sm">
            &copy; {currentYear} Timotius Simanjuntak. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link href="/privacy" className="text-white/30 hover:text-white/50 text-sm transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-white/30 hover:text-white/50 text-sm transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
