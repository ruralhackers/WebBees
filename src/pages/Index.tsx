
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import JourneySection from "@/components/JourneySection";
import TargetSection from "@/components/TargetSection";
import CTASection from "@/components/CTASection";
import FooterSection from "@/components/FooterSection";
import LanguageSelector from "@/components/LanguageSelector";
import BeeScrollProgress from "@/components/BeeScrollProgress";

const Index = () => {
  return (
    <div className="min-h-screen">
      <LanguageSelector />
      <BeeScrollProgress />
      <HeroSection />
      <AboutSection />
      <JourneySection />
      <TargetSection />
      <CTASection />
      <FooterSection />
    </div>
  );
};

export default Index;
