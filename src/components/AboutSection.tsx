
const AboutSection = () => {
  return (
    <section className="section-padding bg-gradient-to-b from-cream-50 to-white">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8 animate-fade-in">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-sage-800 mb-6">
              🌸 ¿Qué es Beautiful Bees?
            </h2>
          </div>
          
          <div className="space-y-6 animate-fade-in" style={{animationDelay: '0.2s'}}>
            <p className="text-lg md:text-xl text-sage-700 leading-relaxed">
              Beautiful Bees es una experiencia europea pensada para mujeres jóvenes que quieren vivir con propósito, rodeadas de naturaleza y comunidad.
            </p>
            
            <p className="text-xl md:text-2xl font-playfair font-medium text-honey-600 my-8">
              Aquí floreces tú. Y florecen todas contigo.
            </p>
            
            <p className="text-lg md:text-xl text-sage-700 leading-relaxed">
              Un espacio donde se cultiva la sororidad, la inspiración y el amor por el territorio.
            </p>
          </div>
          
          {/* Decorative Elements */}
          <div className="flex justify-center items-center mt-12 space-x-4">
            <div className="w-3 h-3 bg-honey-400 rounded-full animate-pulse"></div>
            <div className="w-2 h-2 bg-lavender-400 rounded-full animate-pulse" style={{animationDelay: '0.5s'}}></div>
            <div className="w-4 h-4 bg-sage-400 rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
            <div className="w-2 h-2 bg-honey-400 rounded-full animate-pulse" style={{animationDelay: '1.5s'}}></div>
            <div className="w-3 h-3 bg-lavender-400 rounded-full animate-pulse" style={{animationDelay: '2s'}}></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
