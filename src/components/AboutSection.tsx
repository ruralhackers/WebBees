
import { useKineticText } from "@/hooks/useKineticText";

const AboutSection = () => {
  const titleRef = useKineticText('bottom');

  return (
    <section className="section-padding bg-gradient-to-b from-cream-50 to-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-10 right-10 w-32 h-32 bg-honey-200/20 rounded-full animate-float"></div>
      <div className="absolute bottom-20 left-10 w-24 h-24 bg-lavender-200/20 rounded-full animate-float" style={{animationDelay: '1.5s'}}></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8 animate-fade-in">
            <h2 
              ref={titleRef}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-sage-800 mb-6"
            >
              🌸 ¿Qué es Beautiful Bees?
            </h2>
          </div>
          
          <div className="space-y-6 animate-fade-in" style={{animationDelay: '0.2s'}}>
            <p className="text-lg md:text-xl text-sage-700 leading-relaxed transform hover:scale-105 transition-all duration-300 cursor-pointer">
              Beautiful Bees es una experiencia europea pensada para mujeres jóvenes que quieren vivir con propósito, rodeadas de naturaleza y comunidad.
            </p>
            
            <p className="text-xl md:text-2xl font-playfair font-medium text-honey-600 my-8 transform hover:scale-105 transition-all duration-300 cursor-pointer">
              Aquí floreces tú. Y florecen todas contigo.
            </p>
            
            <p className="text-lg md:text-xl text-sage-700 leading-relaxed transform hover:scale-105 transition-all duration-300 cursor-pointer">
              Un espacio donde se cultiva la sororidad, la inspiración y el amor por el territorio.
            </p>
          </div>
          
          {/* Animated Decorative Elements */}
          <div className="flex justify-center items-center mt-12 space-x-4">
            {[0, 0.5, 1, 1.5, 2].map((delay, index) => (
              <div 
                key={index}
                className={`w-${3 + (index % 2)} h-${3 + (index % 2)} bg-${['honey', 'lavender', 'sage'][index % 3]}-400 rounded-full animate-pulse hover:animate-bounce cursor-pointer transition-all duration-300`}
                style={{animationDelay: `${delay}s`}}
              ></div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
