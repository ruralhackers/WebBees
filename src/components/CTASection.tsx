
import InteractiveButton from "@/components/InteractiveButton";
import { useLanguage } from '@/contexts/LanguageContext';

const CTASection = () => {
  const { t } = useLanguage();

  return (
    <section className="section-padding bg-gradient-to-b from-sage-50 via-honey-50 to-cream-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 honeycomb-pattern opacity-20"></div>
      <div className="absolute top-20 right-10 w-32 h-32 bg-lavender-200 rounded-full opacity-20 animate-float"></div>
      <div className="absolute bottom-20 left-10 w-24 h-24 bg-honey-200 rounded-full opacity-20 animate-float" style={{animationDelay: '1s'}}></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8 animate-fade-in">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-sage-800 mb-6 font-playfair">
              {t('ctaTitle')}
            </h2>
          </div>
          
          <div className="mb-12 animate-fade-in" style={{animationDelay: '0.2s'}}>
            <p className="text-xl md:text-2xl text-sage-700 leading-relaxed font-playfair">
              {t('ctaDescription')}
            </p>
          </div>
          
          <div className="animate-fade-in" style={{animationDelay: '0.4s'}}>
            <InteractiveButton 
              size="lg" 
              className="bg-gradient-to-r from-honey-500 to-honey-600 hover:from-honey-600 hover:to-honey-700 text-honey-900 font-bold px-12 py-6 text-xl rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-2xl border-2 border-honey-300"
            >
              {t('ctaButton')}
            </InteractiveButton>
          </div>
          
          {/* Free Program Badge */}
          <div className="mt-8 animate-fade-in" style={{animationDelay: '0.5s'}}>
            <div className="bg-gradient-to-r from-lavender-100 to-honey-100 px-6 py-3 rounded-full inline-block border border-lavender-200">
              <p className="text-sage-700 font-semibold text-lg">
                {t('ctaFree')}
              </p>
            </div>
          </div>
          
          {/* Encouraging Message */}
          <div className="mt-8 animate-fade-in" style={{animationDelay: '0.6s'}}>
            <p className="text-sage-600 text-sm md:text-base italic">
              {t('ctaSubtext')}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
