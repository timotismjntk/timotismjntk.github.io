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
          <OutlinedText as="h1" size="2xl" variant="white">
            Portfolio
          </OutlinedText>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-white/60 mt-6 max-w-2xl mx-auto text-lg"
          >
            I built applications using <span className="font-bold text-white">React Native</span> framework.
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
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
