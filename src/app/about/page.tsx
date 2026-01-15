'use client';

import { motion } from 'framer-motion';
import { OutlinedText } from '@/components/typography/OutlinedText';
import { Button } from '@/components/ui/Button';

const values = [
  {
    title: 'Results-Driven',
    description:
      'We focus on metrics that matter to your business. Every strategy is designed to deliver measurable ROI.',
  },
  {
    title: 'Houston Local',
    description:
      'We understand the Houston market. Our strategies are tailored to help you succeed in this competitive landscape.',
  },
  {
    title: 'Full-Stack Solutions',
    description:
      'From websites to automation, we provide comprehensive marketing technology solutions under one roof.',
  },
  {
    title: 'Partnership Approach',
    description:
      'We see ourselves as an extension of your team, invested in your long-term success.',
  },
];

export default function AboutPage() {
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
            About Us
          </motion.p>
          <OutlinedText as="h1" size="2xl" variant="white">
            Who We Are
          </OutlinedText>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-white/60 mt-6 max-w-2xl mx-auto text-lg"
          >
            SoTech is Houston&apos;s premier marketing technology partner, helping businesses bridge the gap between social and digital.
          </motion.p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 sm:py-24 bg-neutral-950">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="font-heading font-bold text-3xl sm:text-4xl text-white mb-6">
                Helping Houston Businesses Grow
              </h2>
              <div className="space-y-4 text-white/60 leading-relaxed">
                <p>
                  Founded with a mission to democratize marketing technology, SoTech has helped over 50 Houston businesses transform their digital presence and achieve measurable growth.
                </p>
                <p>
                  We believe that every business deserves access to enterprise-level marketing strategies and tools, regardless of size. Our team combines technical expertise with creative thinking to deliver solutions that actually work.
                </p>
                <p>
                  From startups to established enterprises, we&apos;ve partnered with businesses across industries to build websites that convert, rank higher in search results, and create automated systems that scale.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative aspect-square rounded-sm overflow-hidden bg-neutral-900"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-neutral-800 to-neutral-900" />
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-white/10 font-heading font-bold text-8xl">ST</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 sm:py-24 bg-black">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <OutlinedText as="h2" size="xl" variant="white">
              Our Values
            </OutlinedText>
            <p className="text-white/50 mt-4 max-w-xl mx-auto">
              The principles that guide everything we do.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="p-8 glass rounded-sm"
              >
                <h3 className="font-heading font-bold text-xl text-white mb-3">
                  {value.title}
                </h3>
                <p className="text-white/50 leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 sm:py-24 bg-neutral-950">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="font-heading font-bold text-5xl text-white">50+</div>
              <div className="text-white/50 text-sm uppercase tracking-wider mt-2">
                Clients Served
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-center"
            >
              <div className="font-heading font-bold text-5xl text-white">5.0</div>
              <div className="text-white/50 text-sm uppercase tracking-wider mt-2">
                Google Rating
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-center"
            >
              <div className="font-heading font-bold text-5xl text-white">3x</div>
              <div className="text-white/50 text-sm uppercase tracking-wider mt-2">
                Avg. ROI
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="text-center"
            >
              <div className="font-heading font-bold text-5xl text-white">100%</div>
              <div className="text-white/50 text-sm uppercase tracking-wider mt-2">
                Client Retention
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 sm:py-24 bg-black text-center">
        <div className="container mx-auto px-6">
          <OutlinedText as="h2" size="xl" variant="white">
            Let&apos;s Work Together
          </OutlinedText>
          <p className="text-white/50 mt-4 max-w-xl mx-auto">
            Ready to transform your digital presence? We&apos;d love to hear from you.
          </p>
          <div className="mt-10">
            <Button variant="primary" size="lg" href="/contact" withArrow>
              Get In Touch
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
