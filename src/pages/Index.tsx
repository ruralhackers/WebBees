
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ScrollytellingSections from "@/components/ScrollytellingSections";
import TargetSection from "@/components/TargetSection";
import CTASection from "@/components/CTASection";
import FooterSection from "@/components/FooterSection";
import CustomCursor from "@/components/CustomCursor";
import ScrollProgress from "@/components/ScrollProgress";

const Index = () => {
  return (
    <div className="min-h-screen relative">
      <CustomCursor />
      <ScrollProgress />
      <HeroSection />
      <AboutSection />
      <ScrollytellingSections />
      <TargetSection />
      <CTASection />
      <FooterSection />
    </div>
  );
};

export default Index;
