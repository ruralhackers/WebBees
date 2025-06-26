
import { useEffect, useRef } from 'react';

declare global {
  interface Window {
    SplitType: any;
    gsap: any;
  }
}

export const useKineticText = (trigger: string = 'bottom') => {
  const elementRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!elementRef.current) return;

    const loadScripts = async () => {
      // Load GSAP
      if (!window.gsap) {
        const gsapScript = document.createElement('script');
        gsapScript.src = 'https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js';
        await new Promise((resolve) => {
          gsapScript.onload = resolve;
          document.head.appendChild(gsapScript);
        });
      }

      // Load SplitType
      if (!window.SplitType) {
        const splitScript = document.createElement('script');
        splitScript.src = 'https://unpkg.com/split-type';
        await new Promise((resolve) => {
          splitScript.onload = resolve;
          document.head.appendChild(splitScript);
        });
      }

      // Initialize animation
      if (window.gsap && window.SplitType && elementRef.current) {
        const split = new window.SplitType(elementRef.current, { types: 'words,chars' });
        
        window.gsap.set(split.chars, { opacity: 0, y: 50, rotateX: -90 });
        
        window.gsap.to(split.chars, {
          opacity: 1,
          y: 0,
          rotateX: 0,
          duration: 0.8,
          stagger: 0.02,
          ease: 'back.out(1.7)',
          scrollTrigger: {
            trigger: elementRef.current,
            start: `top ${trigger}`,
            toggleActions: 'play none none reverse'
          }
        });
      }
    };

    loadScripts();
  }, [trigger]);

  return elementRef;
};
