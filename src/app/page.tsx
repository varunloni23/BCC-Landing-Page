import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import EcosystemsSection from '@/components/EcosystemsSection';
import ProcessSection from '@/components/ProcessSection';
import TechStackSection from '@/components/TechStackSection';
import WhyChooseUsSection from '@/components/WhyChooseUsSection';
import ImpactSection from '@/components/ImpactSection';
import CTASection from '@/components/CTASection';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <div id="about">
        <AboutSection />
      </div>
      <div id="ecosystems">
        <EcosystemsSection />
      </div>
      <div id="process">
        <ProcessSection />
      </div>
      <div id="tech-stack">
        <TechStackSection />
      </div>
      <div id="why-choose-us">
        <WhyChooseUsSection />
      </div>
      <div id="impact">
        <ImpactSection />
      </div>
      <CTASection />
    </main>
  );
}
