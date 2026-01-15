'use client';

import { motion } from 'framer-motion';
import { OutlinedText } from '@/components/typography/OutlinedText';
import { Button } from '@/components/ui/Button';
import { services } from '@/data/services';

export default function ServicesPage() {
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
            What We Do
          </motion.p>
          <OutlinedText as="h1" size="2xl" variant="white">
            Our Services
          </OutlinedText>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-white/60 mt-6 max-w-2xl mx-auto text-lg"
          >
            Full-stack marketing technology solutions to help your Houston business grow and thrive in the digital landscape.
          </motion.p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 sm:py-24 bg-neutral-950">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                id={service.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="p-8 sm:p-10 glass rounded-sm group"
              >
                <span className="text-white/20 font-heading font-bold text-5xl block mb-4">
                  {service.number}
                </span>
                <h2 className="font-heading font-bold text-2xl sm:text-3xl text-white mb-4">
                  {service.title}
                </h2>
                <p className="text-white/60 mb-6 leading-relaxed">
                  {service.longDescription}
                </p>
                <div className="flex flex-wrap gap-2">
                  {service.features.map((feature) => (
                    <span
                      key={feature}
                      className="px-3 py-1 text-xs uppercase tracking-wider text-white/50 border border-white/10 rounded-sm"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 sm:py-24 bg-black text-center">
        <div className="container mx-auto px-6">
          <OutlinedText as="h2" size="xl" variant="white">
            Ready to Get Started?
          </OutlinedText>
          <p className="text-white/50 mt-4 max-w-xl mx-auto">
            Let&apos;s discuss which services are right for your business.
          </p>
          <div className="mt-10">
            <Button variant="primary" size="lg" href="/contact" withArrow>
              Schedule a Consultation
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
