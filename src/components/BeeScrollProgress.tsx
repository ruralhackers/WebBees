
import { useState, useEffect } from 'react';

const BeeScrollProgress = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (scrollTop / docHeight) * 100;
      setScrollProgress(Math.min(100, Math.max(0, progress)));
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const flowers = ['💚', '🌻', '💛', '🌻', '💚'];
  
  return (
    <div className="fixed left-4 top-1/2 transform -translate-y-1/2 z-40">
      <div className="relative h-80 w-12">
        {/* Liña de progreso */}
        <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-sage-200 rounded-full">
          <div 
            className="w-full bg-gradient-to-b from-honey-400 to-honey-600 rounded-full transition-all duration-300 ease-out"
            style={{ height: `${scrollProgress}%` }}
          />
        </div>
        
        {/* Flores nos puntos do camiño */}
        {flowers.map((flower, index) => {
          const position = (index / (flowers.length - 1)) * 100;
          const isActive = scrollProgress >= position;
          
          return (
            <div
              key={index}
              className={`absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-lg transition-all duration-300 ${
                isActive ? 'animate-pulse scale-110' : 'opacity-60 scale-90'
              }`}
              style={{ top: `${position}%` }}
            >
              {flower}
            </div>
          );
        })}
        
        {/* Abella */}
        <div
          className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-xl transition-all duration-300 ease-out"
          style={{ 
            top: `${scrollProgress}%`,
            transform: 'translateX(-50%) translateY(-50%) rotate(15deg)'
          }}
        >
          🐝
        </div>
      </div>
    </div>
  );
};

export default BeeScrollProgress;
