import { HeroSection } from '@/components/sections/HeroSection';
import { ServicesCarousel } from '@/components/sections/ServicesCarousel';
import { TrustSection } from '@/components/sections/TrustSection';
import { PortfolioGrid } from '@/components/sections/PortfolioGrid';

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ServicesCarousel />
      <TrustSection />
      <PortfolioGrid />
    </>
  );
}
