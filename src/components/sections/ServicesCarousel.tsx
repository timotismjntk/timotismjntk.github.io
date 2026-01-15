'use client';

import { OutlinedText } from '../typography/OutlinedText';
import { HorizontalScroll } from '../carousel/HorizontalScroll';
import { CarouselCard } from '../carousel/CarouselCard';
import { services } from '@/data/services';

export function ServicesCarousel() {
  return (
    <section className="py-20 sm:py-24 lg:py-32 bg-black">
      {/* Section Header */}
      <div className="container mx-auto px-6 mb-12">
        <OutlinedText as="h2" size="xl" variant="white">
          Our Services
        </OutlinedText>
        <p className="text-white/50 mt-4 max-w-xl text-base sm:text-lg">
          Full-stack marketing technology solutions to grow your Houston business.
        </p>
      </div>

      {/* Carousel */}
      <HorizontalScroll>
        {services.map((service) => (
          <CarouselCard
            key={service.id}
            number={service.number}
            title={service.shortTitle}
            description={service.description}
            href={`/services#${service.id}`}
          />
        ))}
      </HorizontalScroll>
    </section>
  );
}
