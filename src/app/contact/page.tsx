'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { OutlinedText } from '@/components/typography/OutlinedText';
import { Button } from '@/components/ui/Button';

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
            Ready to transform your digital presence? Let&apos;s start a conversation.
          </motion.p>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20 sm:py-24 bg-neutral-950">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              {isSubmitted ? (
                <div className="text-center py-12">
                  <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-white/10 flex items-center justify-center">
                    <svg
                      className="w-8 h-8 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <h3 className="font-heading font-bold text-2xl text-white mb-4">
                    Message Sent!
                  </h3>
                  <p className="text-white/60">
                    Thank you for reaching out. We&apos;ll get back to you within 24 hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-white/70 text-sm uppercase tracking-wider mb-2"
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-black border border-white/10 text-white placeholder-white/30 focus:border-white/30 focus:outline-none transition-colors"
                      placeholder="Your name"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-white/70 text-sm uppercase tracking-wider mb-2"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-black border border-white/10 text-white placeholder-white/30 focus:border-white/30 focus:outline-none transition-colors"
                      placeholder="your@email.com"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="company"
                      className="block text-white/70 text-sm uppercase tracking-wider mb-2"
                    >
                      Company (Optional)
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-black border border-white/10 text-white placeholder-white/30 focus:border-white/30 focus:outline-none transition-colors"
                      placeholder="Your company"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-white/70 text-sm uppercase tracking-wider mb-2"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full px-4 py-3 bg-black border border-white/10 text-white placeholder-white/30 focus:border-white/30 focus:outline-none transition-colors resize-none"
                      placeholder="Tell us about your project..."
                    />
                  </div>

                  <Button
                    type="submit"
                    variant="primary"
                    size="lg"
                    className="w-full"
                    disabled={isSubmitting}
                    withArrow
                  >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </Button>
                </form>
              )}
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-12"
            >
              <div>
                <h3 className="font-heading font-bold text-xl text-white mb-4">
                  Let&apos;s Talk
                </h3>
                <p className="text-white/60 leading-relaxed">
                  Whether you have a specific project in mind or just want to explore how
                  we can help your business grow, we&apos;re here to listen and provide
                  guidance.
                </p>
              </div>

              <div className="space-y-6">
                <div>
                  <h4 className="text-white/40 text-sm uppercase tracking-wider mb-2">
                    Email
                  </h4>
                  <a
                    href="mailto:info@thesocialtech.net"
                    className="text-white text-lg hover:text-white/80 transition-colors"
                  >
                    info@thesocialtech.net
                  </a>
                </div>

                <div>
                  <h4 className="text-white/40 text-sm uppercase tracking-wider mb-2">
                    Location
                  </h4>
                  <p className="text-white text-lg">Houston, TX</p>
                </div>

                <div>
                  <h4 className="text-white/40 text-sm uppercase tracking-wider mb-2">
                    Follow Us
                  </h4>
                  <div className="flex gap-4">
                    <a
                      href="https://linkedin.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white/60 hover:text-white transition-colors"
                    >
                      LinkedIn
                    </a>
                    <a
                      href="https://instagram.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white/60 hover:text-white transition-colors"
                    >
                      Instagram
                    </a>
                    <a
                      href="https://facebook.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white/60 hover:text-white transition-colors"
                    >
                      Facebook
                    </a>
                  </div>
                </div>
              </div>

              {/* FAQ */}
              <div className="p-6 glass rounded-sm">
                <h4 className="font-heading font-bold text-lg text-white mb-4">
                  Frequently Asked
                </h4>
                <div className="space-y-4">
                  <div>
                    <p className="text-white/80 text-sm mb-1">
                      What&apos;s your typical project timeline?
                    </p>
                    <p className="text-white/50 text-sm">
                      Most projects take 4-8 weeks depending on scope.
                    </p>
                  </div>
                  <div>
                    <p className="text-white/80 text-sm mb-1">
                      Do you offer ongoing support?
                    </p>
                    <p className="text-white/50 text-sm">
                      Yes, we offer monthly retainer packages for ongoing optimization.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
