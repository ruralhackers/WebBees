
import { useLanguage } from '@/contexts/LanguageContext';
import { Link } from 'react-router-dom';

const FooterSection = () => {
  const { t } = useLanguage();

  return (
    <footer className="bg-sage-800 text-cream-50 py-16">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Logo and Description */}
          <div className="md:col-span-1">
            <h3 className="text-2xl font-bold font-playfair mb-4 gradient-text">
              🌼 Beautiful Bees
            </h3>
            <p className="text-sage-200 leading-relaxed">
              {t('footerDescription')}
            </p>
          </div>
          
          {/* Rural Hackers */}
          <div className="md:col-span-1">
            <h4 className="text-lg font-semibold mb-4 text-honey-300">{t('footerPoweredBy')}</h4>
            <div className="mb-4 flex items-center space-x-3">
              <img 
                src="/lovable-uploads/ad159681-0852-4c27-a4b4-e18c08ba5d8f.png" 
                alt="Rural Hackers Logo" 
                className="h-12 w-auto"
              />
              <div>
                <p className="text-xl font-bold text-cream-50">Rural Hackers</p>
                <p className="text-sage-300 text-sm">Creando futuro no rural</p>
              </div>
            </div>
          </div>
          
          {/* Contact */}
          <div className="md:col-span-1">
            <h4 className="text-lg font-semibold mb-4 text-honey-300">{t('footerContact')}</h4>
            <div className="space-y-2 text-sage-200 mb-6">
              <p>📧 hello@ruralhackers.com</p>
              <p>🌐 www.ruralhackers.com</p>
            </div>
            
            {/* Social Media */}
            <div className="flex space-x-4">
              <a 
                href="https://www.instagram.com/ruralhackers" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-sage-300 hover:text-honey-300 transition-colors"
              >
                📱 Instagram
              </a>
              <a 
                href="https://www.ruralhackers.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-sage-300 hover:text-honey-300 transition-colors"
              >
                🌐 Website
              </a>
            </div>
          </div>
        </div>
        
        {/* EU Credits */}
        <div className="border-t border-sage-700 pt-8">
          <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0">
            <div className="text-center">
              <img 
                src="/lovable-uploads/d3768969-85c7-4a4c-a624-e976fbebcdc7.png" 
                alt="Logos de financiación" 
                className="max-h-16 w-auto mx-auto"
              />
            </div>
          </div>
        </div>
        
        {/* More Info Link and Copyright */}
        <div className="text-center mt-8 pt-4 border-t border-sage-700 space-y-4">
          <Link 
            to="/more-info" 
            className="inline-block text-honey-300 hover:text-honey-200 transition-colors underline text-sm"
          >
            {t('footerMoreInfo')}
          </Link>
          <p className="text-sage-400 text-sm">
            © 2025 Beautiful Bees. Todos os dereitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
