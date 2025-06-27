
import InteractiveCard from "@/components/InteractiveCard";
import { CardContent } from "@/components/ui/card";
import { useLanguage } from '@/contexts/LanguageContext';

const JourneySection = () => {
  const { t } = useLanguage();

  const phases = [
    {
      icon: "🌱",
      titleKey: "phase1Title",
      descriptionKey: "phase1Description",
      dateKey: "phase1Date"
    },
    {
      icon: "🏡",
      titleKey: "phase2Title",
      descriptionKey: "phase2Description",
      dateKey: "phase2Date"
    },
    {
      icon: "💛",
      titleKey: "phase3Title",
      descriptionKey: "phase3Description",
      dateKey: "phase3Date"
    },
    {
      icon: "🌍",
      titleKey: "phase4Title",
      descriptionKey: "phase4Description",
      dateKey: "phase4Date"
    }
  ];

  return (
    <section className="section-padding bg-gradient-to-b from-white via-honey-25 to-lavender-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-sage-800 mb-8 animate-fade-in">
            {t('journeyTitle')}
          </h2>
          <p className="text-lg md:text-xl text-sage-700 max-w-3xl mx-auto leading-relaxed animate-fade-in" style={{animationDelay: '0.2s'}}>
            {t('journeyDescription')}
            <br />
            <span className="font-playfair font-medium text-honey-600 text-xl md:text-2xl">
              {t('journeySubtitle')}
            </span>
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {phases.map((phase, index) => (
            <InteractiveCard 
              key={index} 
              className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 bg-white/80 backdrop-blur-sm border-honey-200 animate-fade-in"
              style={{animationDelay: `${0.1 * (index + 1)}s`}}
            >
              <CardContent className="p-8">
                <div className="text-6xl mb-4 group-hover:animate-gentle-bounce">
                  {phase.icon}
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-sage-800 mb-4 font-playfair">
                  {t(phase.titleKey)}
                </h3>
                <p className="text-sage-600 leading-relaxed text-lg mb-4">
                  {t(phase.descriptionKey)}
                </p>
                <div className="text-sm text-honey-600 font-medium bg-honey-50 px-4 py-2 rounded-lg">
                  {t(phase.dateKey)}
                </div>
              </CardContent>
            </InteractiveCard>
          ))}
        </div>
        
        {/* Connecting Lines */}
        <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 mt-8">
          <div className="w-px h-20 bg-gradient-to-b from-honey-300 to-transparent"></div>
        </div>
      </div>
    </section>
  );
};

export default JourneySection;
