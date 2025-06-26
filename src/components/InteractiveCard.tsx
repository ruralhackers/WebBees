
import { Card, CardProps } from "@/components/ui/card";
import { useAmbientAudio } from '@/hooks/useAmbientAudio';
import { forwardRef } from 'react';

interface InteractiveCardProps extends CardProps {
  children: React.ReactNode;
}

const InteractiveCard = forwardRef<HTMLDivElement, InteractiveCardProps>(
  ({ children, className, onMouseEnter, ...props }, ref) => {
    const { playHoverSound } = useAmbientAudio();

    const handleMouseEnter = (e: React.MouseEvent<HTMLDivElement>) => {
      playHoverSound();
      onMouseEnter?.(e);
    };

    return (
      <Card
        ref={ref}
        className={className}
        onMouseEnter={handleMouseEnter}
        {...props}
      >
        {children}
      </Card>
    );
  }
);

InteractiveCard.displayName = "InteractiveCard";

export default InteractiveCard;
