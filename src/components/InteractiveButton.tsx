
import { Button, ButtonProps } from "@/components/ui/button";
import { forwardRef } from 'react';

interface InteractiveButtonProps extends ButtonProps {
  children: React.ReactNode;
}

const InteractiveButton = forwardRef<HTMLButtonElement, InteractiveButtonProps>(
  ({ children, className, onMouseEnter, onClick, ...props }, ref) => {

    const handleMouseEnter = (e: React.MouseEvent<HTMLButtonElement>) => {
      // Create ripple effect
      const button = e.currentTarget;
      const rect = button.getBoundingClientRect();
      const ripple = document.createElement('span');
      const size = Math.max(rect.width, rect.height);
      const x = e.clientX - rect.left - size / 2;
      const y = e.clientY - rect.top - size / 2;
      
      ripple.style.cssText = `
        position: absolute;
        width: ${size}px;
        height: ${size}px;
        left: ${x}px;
        top: ${y}px;
        background: radial-gradient(circle, rgba(255,255,255,0.3) 0%, transparent 70%);
        border-radius: 50%;
        transform: scale(0);
        animation: ripple 0.6s linear;
        pointer-events: none;
        z-index: 0;
      `;
      
      button.style.position = 'relative';
      button.appendChild(ripple);
      
      setTimeout(() => {
        if (ripple.parentNode) {
          ripple.parentNode.removeChild(ripple);
        }
      }, 600);
      
      onMouseEnter?.(e);
    };

    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
      // Subtle click animation
      const button = e.currentTarget;
      button.style.transform = 'scale(0.98)';
      setTimeout(() => {
        button.style.transform = '';
      }, 100);
      
      onClick?.(e);
    };

    return (
      <Button
        ref={ref}
        className={`interactive-button ${className}`}
        onMouseEnter={handleMouseEnter}
        onClick={handleClick}
        {...props}
      >
        <span className="relative z-10">{children}</span>
      </Button>
    );
  }
);

InteractiveButton.displayName = "InteractiveButton";

// Add ripple keyframes to document
if (typeof document !== 'undefined') {
  const style = document.createElement('style');
  style.textContent = `
    @keyframes ripple {
      to {
        transform: scale(4);
        opacity: 0;
      }
    }
  `;
  document.head.appendChild(style);
}

export default InteractiveButton;
