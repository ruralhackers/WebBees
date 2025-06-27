
import InteractiveButton from "@/components/InteractiveButton";
import { useLanguage } from '@/contexts/LanguageContext';

const HeroSection = () => {
  const { t } = useLanguage();

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 honeycomb-pattern opacity-30"></div>
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-cream-50 via-honey-50 to-lavender-50"></div>
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-honey-200 rounded-full opacity-20 animate-float"></div>
      <div className="absolute top-40 right-20 w-16 h-16 bg-lavender-200 rounded-full opacity-20 animate-float" style={{animationDelay: '1s'}}></div>
      <div className="absolute bottom-40 left-20 w-12 h-12 bg-sage-200 rounded-full opacity-20 animate-float" style={{animationDelay: '2s'}}></div>
      
      {/* Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
        <div className="mb-8 animate-fade-in">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold gradient-text mb-6">
            🌼 {t('heroTitle')}
          </h1>
          <p className="text-xl md:text-2xl lg:text-3xl text-sage-700 font-playfair font-medium max-w-3xl mx-auto leading-relaxed">
            {t('heroSubtitle')}
          </p>
        </div>
        
        <div className="mb-12 animate-fade-in" style={{animationDelay: '0.3s'}}>
          <p className="text-lg md:text-xl text-sage-600 max-w-2xl mx-auto leading-relaxed">
            {t('heroDescription')}
          </p>
        </div>
        
        <div className="animate-fade-in" style={{animationDelay: '0.6s'}}>
          <InteractiveButton 
            size="lg" 
            className="bg-honey-500 hover:bg-honey-600 text-honey-900 font-semibold px-8 py-4 text-lg rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
          >
            {t('heroButton')}
          </InteractiveButton>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-gentle-bounce">
        <div className="w-6 h-10 border-2 border-honey-400 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-honey-400 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
