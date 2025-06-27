
import { useLanguage } from '@/contexts/LanguageContext';

const MoreInfo = () => {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-gradient-to-b from-cream-50 to-white">
      <div className="container mx-auto px-6 py-24">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold text-sage-800 mb-8 text-center font-playfair">
            {t('moreInfoTitle')}
          </h1>
          
          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-sage-700 leading-relaxed mb-8">
              {t('moreInfoIntro')}
            </p>
            
            <div className="space-y-8">
              <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-8 border border-honey-200">
                <h3 className="text-2xl font-bold text-honey-600 mb-4 font-playfair">
                  🌱 {t('moreInfoPillar1Title')}
                </h3>
                <p className="text-sage-700 leading-relaxed">
                  {t('moreInfoPillar1Description')}
                </p>
              </div>
              
              <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-8 border border-lavender-200">
                <h3 className="text-2xl font-bold text-lavender-600 mb-4 font-playfair">
                  🧘‍♀️ {t('moreInfoPillar2Title')}
                </h3>
                <p className="text-sage-700 leading-relaxed">
                  {t('moreInfoPillar2Description')}
                </p>
              </div>
              
              <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-8 border border-sage-200">
                <h3 className="text-2xl font-bold text-sage-600 mb-4 font-playfair">
                  🤝 {t('moreInfoPillar3Title')}
                </h3>
                <p className="text-sage-700 leading-relaxed">
                  {t('moreInfoPillar3Description')}
                </p>
              </div>
            </div>
            
            <div className="mt-12 bg-gradient-to-r from-honey-50 to-lavender-50 rounded-2xl p-8 border border-honey-200">
              <p className="text-lg text-sage-700 leading-relaxed mb-6">
                {t('moreInfoConclusion')}
              </p>
              
              <p className="text-lg text-sage-700 leading-relaxed italic">
                {t('moreInfoLocation')}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MoreInfo;
