
import { useEffect, useRef, useState } from 'react';
import InteractiveCard from "@/components/InteractiveCard";
import { CardContent } from "@/components/ui/card";

const ScrollytellingSections = () => {
  const [activePhase, setActivePhase] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);

  const phases = [
    {
      icon: "🌱",
      title: "Inspiración",
      description: "Conecta con personas y experiencias fascinantes. Conoce nuevas formas de emprender, crear o simplemente reconectar contigo. Aquí se enciende la chispa.",
      growthStage: "seed"
    },
    {
      icon: "🏡",
      title: "Coliving en Anceu Coliving",
      description: "Vive una experiencia inmersiva en plena naturaleza gallega, rodeada de otras mujeres como tú. Aquí se cocina la transformación: entre caminatas, conversaciones honestas y proyectos compartidos. Un espacio seguro donde tu historia importa.",
      growthStage: "sprout"
    },
    {
      icon: "🌍",
      title: "Bootcamp Internacional",
      description: "Comparte y crece junto a mujeres y facilitadoras de España, Italia y Lituania. Aprende en red, conecta con ideas nuevas y lleva tu proyecto más allá de tu pueblo. Aquí se abren las alas.",
      growthStage: "bloom"
    },
    {
      icon: "💛",
      title: "Fase de Solidaridad",
      description: "Como las abejas que cuidan su colmena, aquí se cuida la comunidad. Cada participante impulsa una acción para devolver al territorio parte del cariño recibido. Aquí florece el compromiso.",
      growthStage: "pollinate"
    }
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      
      const rect = sectionRef.current.getBoundingClientRect();
      const scrollProgress = Math.max(0, Math.min(1, -rect.top / (rect.height - window.innerHeight)));
      const newActivePhase = Math.floor(scrollProgress * phases.length);
      
      setActivePhase(Math.min(newActivePhase, phases.length - 1));
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [phases.length]);

  const getGrowthVisualization = (stage: string, isActive: boolean) => {
    const baseClasses = "transition-all duration-1000 transform";
    const activeClasses = isActive ? "scale-110 opacity-100" : "scale-95 opacity-60";
    
    switch (stage) {
      case "seed":
        return <div className={`${baseClasses} ${activeClasses} text-6xl`}>🌰</div>;
      case "sprout":
        return <div className={`${baseClasses} ${activeClasses} text-6xl`}>🌱</div>;
      case "bloom":
        return <div className={`${baseClasses} ${activeClasses} text-6xl`}>🌸</div>;
      case "pollinate":
        return <div className={`${baseClasses} ${activeClasses} text-6xl`}>🌻</div>;
      default:
        return <div className={`${baseClasses} ${activeClasses} text-6xl`}>🌱</div>;
    }
  };

  return (
    <section ref={sectionRef} className="section-padding bg-gradient-to-b from-white via-honey-25 to-lavender-50 relative overflow-hidden">
      {/* Animated SVG Growth Path */}
      <div className="absolute left-1/2 top-0 h-full w-1 transform -translate-x-1/2">
        <svg className="w-full h-full" viewBox="0 0 2 100" preserveAspectRatio="none">
          <defs>
            <linearGradient id="growthGradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#627462" />
              <stop offset="50%" stopColor="#eeb841" />
              <stop offset="100%" stopColor="#a078fd" />
            </linearGradient>
          </defs>
          <line
            x1="1" y1="0" x2="1" y2="100"
            stroke="url(#growthGradient)"
            strokeWidth="0.5"
            strokeDasharray="2,2"
            className="animate-pulse"
          />
          <line
            x1="1" y1="0" x2="1" y2={25 * (activePhase + 1)}
            stroke="#eeb841"
            strokeWidth="1"
            className="transition-all duration-1000"
          />
        </svg>
      </div>

      <div className="container mx-auto px-6 relative z-10">
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
            <InteractiveCard 
              key={index} 
              className={`group hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 bg-white/80 backdrop-blur-sm border-honey-200 animate-fade-in ${
                index === activePhase ? 'ring-2 ring-honey-400 shadow-2xl scale-105' : ''
              }`}
              style={{animationDelay: `${0.1 * (index + 1)}s`}}
            >
              <CardContent className="p-8 relative">
                {/* Growth Indicator */}
                <div className="absolute -top-4 -right-4 z-10">
                  {getGrowthVisualization(phase.growthStage, index <= activePhase)}
                </div>
                
                <div className="text-6xl mb-4 group-hover:animate-gentle-bounce transition-transform duration-300">
                  {phase.icon}
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-sage-800 mb-4 font-playfair group-hover:text-honey-600 transition-colors duration-300">
                  {phase.title}
                </h3>
                <p className="text-sage-600 leading-relaxed text-lg group-hover:text-sage-700 transition-colors duration-300">
                  {phase.description}
                </p>
                
                {/* Progress Indicator */}
                <div className={`absolute bottom-0 left-0 h-1 bg-honey-400 transition-all duration-1000 ${
                  index <= activePhase ? 'w-full' : 'w-0'
                }`}></div>
              </CardContent>
            </InteractiveCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ScrollytellingSections;
