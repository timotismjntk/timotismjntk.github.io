'use client';

import { motion } from 'framer-motion';
import { OutlinedText } from '@/components/typography/OutlinedText';
import { Button } from '@/components/ui/Button';
import { portfolioProjects } from '@/data/portfolio';

export default function PortfolioPage() {
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
            Our Work
          </motion.p>
          <OutlinedText as="h1" size="2xl" variant="white">
            Portfolio
          </OutlinedText>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-white/60 mt-6 max-w-2xl mx-auto text-lg"
          >
            Real results for real businesses. See how we&apos;ve helped Houston companies transform their digital presence.
          </motion.p>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="py-20 sm:py-24 bg-neutral-950">
        <div className="container mx-auto px-6">
          <div className="space-y-20">
            {portfolioProjects.map((project, index) => (
              <motion.div
                key={project.id}
                id={project.id}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
              >
                {/* Image */}
                <div
                  className={`relative aspect-[4/3] rounded-sm overflow-hidden bg-neutral-900 ${
                    index % 2 === 1 ? 'lg:order-2' : ''
                  }`}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-neutral-800 to-neutral-900" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-white/20 font-heading font-bold text-4xl">
                      {project.title}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                  <span className="text-white/40 text-sm uppercase tracking-[0.2em]">
                    {project.category}
                  </span>
                  <h2 className="font-heading font-bold text-4xl sm:text-5xl text-white mt-3 mb-4">
                    {project.title}
                  </h2>
                  <p className="text-white/60 text-lg mb-6 leading-relaxed">
                    {project.longDescription}
                  </p>

                  {/* Services Used */}
                  <div className="flex flex-wrap gap-2 mb-8">
                    {project.services.map((service) => (
                      <span
                        key={service}
                        className="px-3 py-1 text-xs uppercase tracking-wider text-white/50 border border-white/10 rounded-sm"
                      >
                        {service}
                      </span>
                    ))}
                  </div>

                  {/* Results */}
                  <div className="grid grid-cols-3 gap-6 p-6 glass rounded-sm">
                    <div className="text-center">
                      <div className="text-white font-heading font-bold text-2xl sm:text-3xl">
                        {project.results.traffic}
                      </div>
                      <div className="text-white/40 text-xs uppercase tracking-wider mt-1">
                        Traffic
                      </div>
                    </div>
                    <div className="text-center">
                      <div className="text-white font-heading font-bold text-2xl sm:text-3xl">
                        {project.results.leads}
                      </div>
                      <div className="text-white/40 text-xs uppercase tracking-wider mt-1">
                        Leads
                      </div>
                    </div>
                    <div className="text-center">
                      <div className="text-white font-heading font-bold text-2xl sm:text-3xl">
                        {project.results.conversion}
                      </div>
                      <div className="text-white/40 text-xs uppercase tracking-wider mt-1">
                        Conversion
                      </div>
                    </div>
                  </div>
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
            Your Project Could Be Next
          </OutlinedText>
          <p className="text-white/50 mt-4 max-w-xl mx-auto">
            Let&apos;s create something amazing together.
          </p>
          <div className="mt-10">
            <Button variant="primary" size="lg" href="/contact" withArrow>
              Start Your Project
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
