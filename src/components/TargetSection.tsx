
const TargetSection = () => {
  return (
    <section className="section-padding bg-gradient-to-b from-lavender-50 to-sage-50">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8 animate-fade-in">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-sage-800 mb-6">
              👩‍🌾 ¿Para quién es?
            </h2>
          </div>
          
          <div className="bg-white/60 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-lg border border-honey-200 animate-fade-in" style={{animationDelay: '0.2s'}}>
            <p className="text-lg md:text-xl text-sage-700 leading-relaxed mb-6">
              Para mujeres de <span className="font-semibold text-honey-600">18 a 29 años</span> con ganas de crecer, crear, compartir y sentir que hay otros caminos posibles.
            </p>
            
            <p className="text-xl md:text-2xl font-playfair font-medium text-lavender-600 mb-6 italic">
              Si llevas tiempo escuchando esa vocecita interior que te pide cambio…
            </p>
            
            <p className="text-2xl md:text-3xl font-bold text-sage-800 font-playfair">
              Este proyecto es para ti.
            </p>
            
            {/* Decorative Hearts */}
            <div className="flex justify-center items-center mt-8 space-x-2">
              <span className="text-2xl animate-pulse">💚</span>
              <span className="text-xl animate-pulse" style={{animationDelay: '0.5s'}}>🌻</span>
              <span className="text-2xl animate-pulse" style={{animationDelay: '1s'}}>💛</span>
              <span className="text-xl animate-pulse" style={{animationDelay: '1.5s'}}>🌻</span>
              <span className="text-2xl animate-pulse" style={{animationDelay: '2s'}}>💚</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TargetSection;
