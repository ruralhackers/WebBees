
import { useEffect, useRef } from 'react';

const InteractiveGarden = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const flowersRef = useRef<Array<{x: number, y: number, size: number, hue: number, bloom: number}>>([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Initialize flowers
    for (let i = 0; i < 50; i++) {
      flowersRef.current.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 20 + 10,
        hue: Math.random() * 360,
        bloom: 0
      });
    }

    const drawFlower = (flower: typeof flowersRef.current[0]) => {
      ctx.save();
      ctx.translate(flower.x, flower.y);
      
      const radius = flower.size * (0.5 + flower.bloom * 0.5);
      const petals = 6;
      
      for (let i = 0; i < petals; i++) {
        ctx.save();
        ctx.rotate((i * Math.PI * 2) / petals);
        
        const gradient = ctx.createRadialGradient(0, 0, 0, 0, 0, radius);
        gradient.addColorStop(0, `hsla(${flower.hue}, 70%, 80%, ${0.6 * flower.bloom})`);
        gradient.addColorStop(1, `hsla(${flower.hue}, 70%, 60%, ${0.2 * flower.bloom})`);
        
        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.ellipse(0, -radius/2, radius/3, radius, 0, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      }
      
      // Center
      ctx.fillStyle = `hsla(${(flower.hue + 180) % 360}, 80%, 60%, ${flower.bloom})`;
      ctx.beginPath();
      ctx.arc(0, 0, radius/4, 0, Math.PI * 2);
      ctx.fill();
      
      ctx.restore();
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      flowersRef.current.forEach(flower => {
        flower.bloom *= 0.98; // Gradual fade
        drawFlower(flower);
      });
      
      requestAnimationFrame(animate);
    };

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      const mouseX = e.clientX - rect.left;
      const mouseY = e.clientY - rect.top;
      
      flowersRef.current.forEach(flower => {
        const distance = Math.sqrt(
          Math.pow(mouseX - flower.x, 2) + Math.pow(mouseY - flower.y, 2)
        );
        
        if (distance < 100) {
          flower.bloom = Math.min(1, flower.bloom + 0.1);
        }
      });
    };

    canvas.addEventListener('mousemove', handleMouseMove);
    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      canvas.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 pointer-events-none"
      style={{ zIndex: 1 }}
    />
  );
};

export default InteractiveGarden;
