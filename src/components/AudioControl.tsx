
import { Volume2, VolumeX } from 'lucide-react';
import { useAmbientAudio } from '@/hooks/useAmbientAudio';

const AudioControl = () => {
  const { isEnabled, toggle } = useAmbientAudio();

  return (
    <button
      onClick={toggle}
      className="fixed bottom-6 right-6 z-50 bg-white/80 backdrop-blur-sm border border-honey-200 rounded-full p-3 shadow-lg hover:shadow-xl hover:bg-white/90 transition-all duration-300 group"
      aria-label={isEnabled ? "Desactivar audio ambiental" : "Activar audio ambiental"}
    >
      {isEnabled ? (
        <Volume2 
          size={20} 
          className="text-honey-600 group-hover:text-honey-700 transition-colors" 
        />
      ) : (
        <VolumeX 
          size={20} 
          className="text-sage-500 group-hover:text-sage-600 transition-colors" 
        />
      )}
      
      {/* Pulse animation when enabled */}
      {isEnabled && (
        <div className="absolute inset-0 rounded-full bg-honey-400/20 animate-ping"></div>
      )}
      
      {/* Tooltip */}
      <div className="absolute bottom-full right-0 mb-2 px-3 py-1 bg-sage-800 text-cream-50 text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap">
        {isEnabled ? "Audio activado" : "Activar sonidos"}
      </div>
    </button>
  );
};

export default AudioControl;
