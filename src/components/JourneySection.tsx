
import { Card, CardContent } from "@/components/ui/card";

const JourneySection = () => {
  const phases = [
    {
      icon: "🌱",
      title: "Inspiración",
      description: "Conecta con personas y experiencias fascinantes. Conoce nuevas formas de emprender, crear o simplemente reconectar contigo. Aquí se enciende la chispa."
    },
    {
      icon: "🏡",
      title: "Coliving en Anceu Coliving",
      description: "Vive una experiencia inmersiva en plena naturaleza gallega, rodeada de otras mujeres como tú. Aquí se cocina la transformación: entre caminatas, conversaciones honestas y proyectos compartidos. Un espacio seguro donde tu historia importa."
    },
    {
      icon: "🌍",
      title: "Bootcamp Internacional",
      description: "Comparte y crece junto a mujeres y facilitadoras de España, Italia y Lituania. Aprende en red, conecta con ideas nuevas y lleva tu proyecto más allá de tu pueblo. Aquí se abren las alas."
    },
    {
      icon: "💛",
      title: "Fase de Solidaridad",
      description: "Como las abejas que cuidan su colmena, aquí se cuida la comunidad. Cada participante impulsa una acción para devolver al territorio parte del cariño recibido. Aquí florece el compromiso."
    }
  ];

  return (
    <section className="section-padding bg-gradient-to-b from-white via-honey-25 to-lavender-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-sage-800 mb-8 animate-fade-in">
            🐝 Las Fases del Viaje
          </h2>
          <p className="text-lg md:text-xl text-sage-700 max-w-3xl mx-auto leading-relaxed animate-fade-in" style={{animationDelay: '0.2s'}}>
            Como las abejas, vivimos en red. Nos nutrimos unas a otras. Creamos y cuidamos juntas.
            <br />
            <span className="font-playfair font-medium text-honey-600 text-xl md:text-2xl">
              Estas son las estaciones de nuestro vuelo:
            </span>
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {phases.map((phase, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 bg-white/80 backdrop-blur-sm border-honey-200 animate-fade-in"
              style={{animationDelay: `${0.1 * (index + 1)}s`}}
            >
              <CardContent className="p-8">
                <div className="text-6xl mb-4 group-hover:animate-gentle-bounce">
                  {phase.icon}
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-sage-800 mb-4 font-playfair">
                  {phase.title}
                </h3>
                <p className="text-sage-600 leading-relaxed text-lg">
                  {phase.description}
                </p>
              </CardContent>
            </Card>
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
