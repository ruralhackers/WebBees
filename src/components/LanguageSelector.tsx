
import { useLanguage } from '@/contexts/LanguageContext';

const LanguageSelector = () => {
  const { language, setLanguage } = useLanguage();
  
  const languages = [
    { code: 'gl', label: 'GL' },
    { code: 'es', label: 'ES' },
    { code: 'en', label: 'EN' },
    { code: 'it', label: 'IT' },
    { code: 'lt', label: 'LT' }
  ];

  return (
    <div className="fixed top-4 right-4 z-50 bg-white/90 backdrop-blur-sm rounded-full p-2 shadow-lg border border-honey-200">
      <div className="flex space-x-1">
        {languages.map((lang) => (
          <button
            key={lang.code}
            onClick={() => setLanguage(lang.code as any)}
            className={`px-2 py-1 text-xs font-medium rounded-full transition-all ${
              language === lang.code
                ? 'bg-honey-500 text-honey-900'
                : 'bg-transparent text-sage-600 hover:bg-honey-100'
            }`}
          >
            {lang.label}
          </button>
        ))}
      </div>
    </div>
  );
};

export default LanguageSelector;
