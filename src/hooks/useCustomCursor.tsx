
import { useEffect, useRef } from 'react';

export const useCustomCursor = () => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const particlesRef = useRef<HTMLDivElement[]>([]);
  const isHoveringRef = useRef(false);

  useEffect(() => {
    const cursor = cursorRef.current;
    if (!cursor) return;

    let mouseX = 0;
    let mouseY = 0;
    let cursorX = 0;
    let cursorY = 0;

    // Create particle trail
    const createParticles = () => {
      for (let i = 0; i < 8; i++) {
        const particle = document.createElement('div');
        particle.className = 'cursor-particle';
        particle.style.cssText = `
          position: fixed;
          width: 4px;
          height: 4px;
          background: linear-gradient(45deg, #eeb841, #a078fd);
          border-radius: 50%;
          pointer-events: none;
          z-index: 9999;
          opacity: 0;
          transition: opacity 0.3s ease;
        `;
        document.body.appendChild(particle);
        particlesRef.current.push(particle);
      }
    };

    const updateCursor = () => {
      cursorX += (mouseX - cursorX) * 0.1;
      cursorY += (mouseY - cursorY) * 0.1;

      cursor.style.transform = `translate(${cursorX}px, ${cursorY}px)`;

      // Update particles
      particlesRef.current.forEach((particle, index) => {
        const delay = index * 2;
        const targetX = cursorX - delay * 2;
        const targetY = cursorY - delay * 2;
        
        particle.style.transform = `translate(${targetX}px, ${targetY}px)`;
        particle.style.opacity = isHoveringRef.current ? '0.8' : '0.3';
      });

      requestAnimationFrame(updateCursor);
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.tagName === 'BUTTON' || target.tagName === 'A' || target.closest('button') || target.closest('a')) {
        isHoveringRef.current = true;
        cursor.classList.add('cursor-hover');
      }
    };

    const handleMouseOut = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.tagName === 'BUTTON' || target.tagName === 'A' || target.closest('button') || target.closest('a')) {
        isHoveringRef.current = false;
        cursor.classList.remove('cursor-hover');
      }
    };

    createParticles();
    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseover', handleMouseOver);
    document.addEventListener('mouseout', handleMouseOut);
    updateCursor();

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseover', handleMouseOver);
      document.removeEventListener('mouseout', handleMouseOut);
      particlesRef.current.forEach(particle => {
        if (particle.parentNode) {
          particle.parentNode.removeChild(particle);
        }
      });
    };
  }, []);

  return cursorRef;
};
