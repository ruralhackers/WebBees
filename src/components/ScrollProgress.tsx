
import { useScrollProgress } from '@/hooks/useScrollProgress';

const ScrollProgress = () => {
  const progress = useScrollProgress();

  return (
    <div className="fixed top-0 right-8 h-full w-2 z-50 flex flex-col items-center">
      {/* Flight Path */}
      <svg
        className="absolute top-0 h-full w-full"
        viewBox="0 0 20 100"
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient id="pathGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#a078fd" stopOpacity="0.3" />
            <stop offset="50%" stopColor="#eeb841" stopOpacity="0.5" />
            <stop offset="100%" stopColor="#627462" stopOpacity="0.3" />
          </linearGradient>
        </defs>
        <path
          d="M10 0 Q15 25 10 50 Q5 75 10 100"
          stroke="url(#pathGradient)"
          strokeWidth="2"
          fill="none"
          strokeDasharray="4,4"
          className="animate-pulse"
        />
      </svg>

      {/* Bee Progress Indicator */}
      <div
        className="absolute w-8 h-8 text-2xl transition-all duration-300 ease-out"
        style={{
          top: `${progress}%`,
          transform: 'translateY(-50%)',
          filter: 'drop-shadow(0 2px 4px rgba(238, 184, 65, 0.3))',
        }}
      >
        🐝
      </div>

      {/* Flower Milestones */}
      {[20, 40, 60, 80].map((milestone, index) => (
        <div
          key={index}
          className={`absolute w-4 h-4 transition-all duration-500 ${
            progress >= milestone ? 'scale-100 opacity-100' : 'scale-75 opacity-50'
          }`}
          style={{ top: `${milestone}%`, transform: 'translateY(-50%)' }}
        >
          {progress >= milestone ? '🌸' : '🌱'}
        </div>
      ))}
    </div>
  );
};

export default ScrollProgress;
