
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import JourneySection from "@/components/JourneySection";
import TargetSection from "@/components/TargetSection";
import CTASection from "@/components/CTASection";
import FooterSection from "@/components/FooterSection";
import AudioControl from "@/components/AudioControl";

const Index = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <AboutSection />
      <JourneySection />
      <TargetSection />
      <CTASection />
      <FooterSection />
      <AudioControl />
    </div>
  );
};

export default Index;
