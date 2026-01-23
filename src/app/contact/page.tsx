'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { OutlinedText } from '@/components/typography/OutlinedText';
import { Button } from '@/components/ui/Button';
import { ContactSection } from '@/components/sections/ContactSection';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));

    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-20 sm:pt-40 sm:pb-24 bg-black">
        <div className="container mx-auto px-6 text-center">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-white/50 text-sm uppercase tracking-[0.3em] mb-6"
          >
            Get In Touch
          </motion.p>
          <OutlinedText as="h1" size="2xl" variant="white">
            Contact Us
          </OutlinedText>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-white/60 mt-6 max-w-2xl mx-auto text-lg"
          >
            Let's connect! Say hello and have a chat.
          </motion.p>
        </div>
      </section>

      <ContactSection />
    </>
  );
}
