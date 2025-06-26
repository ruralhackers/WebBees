
import { useCustomCursor } from '@/hooks/useCustomCursor';

const CustomCursor = () => {
  const cursorRef = useCustomCursor();

  return (
    <div
      ref={cursorRef}
      className="custom-cursor fixed w-6 h-6 pointer-events-none z-[10000] mix-blend-difference"
      style={{
        background: 'radial-gradient(circle, #eeb841 30%, transparent 70%)',
        borderRadius: '50%',
        transition: 'transform 0.1s ease-out, scale 0.2s ease',
      }}
    />
  );
};

export default CustomCursor;
