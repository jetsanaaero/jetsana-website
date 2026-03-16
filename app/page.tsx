import HeroSection from '@/components/home/HeroSection';
import AircraftScrollAnimation from '@/components/home/AircraftScrollAnimation';
import ServicesOverview from '@/components/home/ServicesOverview';
import InteriorFocus from '@/components/home/InteriorFocus';
import WhyJetSana from '@/components/home/WhyJetSana';
import ProcessSection from '@/components/home/ProcessSection';
import CTASection from '@/components/home/CTASection';

export default function Home() {
  return (
    <>
      <HeroSection />
      <AircraftScrollAnimation />
      <ServicesOverview />
      <InteriorFocus />
      <WhyJetSana />
      <ProcessSection />
      <CTASection />
    </>
  );
}
