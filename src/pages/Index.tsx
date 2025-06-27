
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import JourneySection from "@/components/JourneySection";
import TargetSection from "@/components/TargetSection";
import CTASection from "@/components/CTASection";
import FooterSection from "@/components/FooterSection";
import LanguageSelector from "@/components/LanguageSelector";

const Index = () => {
  return (
    <div className="min-h-screen">
      <LanguageSelector />
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
