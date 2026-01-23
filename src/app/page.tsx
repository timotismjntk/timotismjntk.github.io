import { HeroSection } from '@/components/sections/HeroSection';
import { PortfolioGrid } from '@/components/sections/PortfolioGrid';
import { WorkSection } from '@/components/sections/WorkSection';
import { EducationSection } from '@/components/sections/Education';
import { ContactSection } from '@/components/sections/ContactSection';

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <WorkSection />
      <EducationSection />
      <PortfolioGrid />
      <ContactSection />
    </>
  );
}
