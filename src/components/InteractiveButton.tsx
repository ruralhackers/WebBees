
import { Button, ButtonProps } from "@/components/ui/button";
import { useAmbientAudio } from '@/hooks/useAmbientAudio';
import { forwardRef } from 'react';

interface InteractiveButtonProps extends ButtonProps {
  children: React.ReactNode;
}

const InteractiveButton = forwardRef<HTMLButtonElement, InteractiveButtonProps>(
  ({ children, className, onMouseEnter, onClick, ...props }, ref) => {
    const { playHoverSound, playClickSound } = useAmbientAudio();

    const handleMouseEnter = (e: React.MouseEvent<HTMLButtonElement>) => {
      playHoverSound();
      onMouseEnter?.(e);
    };

    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
      playClickSound();
      onClick?.(e);
    };

    return (
      <Button
        ref={ref}
        className={className}
        onMouseEnter={handleMouseEnter}
        onClick={handleClick}
        {...props}
      >
        {children}
      </Button>
    );
  }
);

InteractiveButton.displayName = "InteractiveButton";

export default InteractiveButton;
