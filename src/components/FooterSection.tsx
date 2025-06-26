
const FooterSection = () => {
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
              Una experiencia europea para mujeres que quieren florecer en el rural.
            </p>
          </div>
          
          {/* Rural Hackers */}
          <div className="md:col-span-1">
            <h4 className="text-lg font-semibold mb-4 text-honey-300">Impulsado por</h4>
            <div className="mb-4">
              <p className="text-xl font-bold text-cream-50">Rural Hackers</p>
              <p className="text-sage-300 text-sm">Creando futuro en el rural</p>
            </div>
          </div>
          
          {/* Contact and Language */}
          <div className="md:col-span-1">
            <h4 className="text-lg font-semibold mb-4 text-honey-300">Contacto</h4>
            <div className="space-y-2 text-sage-200">
              <p>📧 hola@beautifulbees.eu</p>
              <p>🌐 beautifulbees.eu</p>
            </div>
            
            {/* Language Selector */}
            <div className="mt-6">
              <p className="text-sm text-sage-300 mb-2">Idioma:</p>
              <div className="flex space-x-2">
                <button className="px-3 py-1 bg-honey-500 text-honey-900 rounded-full text-sm font-medium">ES</button>
                <button className="px-3 py-1 bg-sage-600 text-sage-200 rounded-full text-sm hover:bg-sage-500 transition-colors">IT</button>
                <button className="px-3 py-1 bg-sage-600 text-sage-200 rounded-full text-sm hover:bg-sage-500 transition-colors">LT</button>
              </div>
            </div>
          </div>
        </div>
        
        {/* EU Credits */}
        <div className="border-t border-sage-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-center md:text-left">
              <p className="text-sage-300 text-sm">
                🇪🇺 Proyecto financiado por la Unión Europea
              </p>
              <p className="text-sage-400 text-xs mt-1">
                Programa Erasmus+ | Acción KA2 - Cooperación para la innovación
              </p>
            </div>
            
            {/* Social Media */}
            <div className="flex space-x-4">
              <a href="#" className="text-sage-300 hover:text-honey-300 transition-colors">
                📱 Instagram
              </a>
              <a href="#" className="text-sage-300 hover:text-honey-300 transition-colors">
                🐦 Twitter
              </a>
              <a href="#" className="text-sage-300 hover:text-honey-300 transition-colors">
                📘 Facebook
              </a>
            </div>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="text-center mt-8 pt-4 border-t border-sage-700">
          <p className="text-sage-400 text-sm">
            © 2024 Beautiful Bees - Rural Hackers. Hecho con 💛 para las mujeres del rural.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
