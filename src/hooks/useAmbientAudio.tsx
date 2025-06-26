
import { useState, useEffect, useRef } from 'react';

interface AmbientAudioHook {
  isEnabled: boolean;
  toggle: () => void;
  playHoverSound: () => void;
  playClickSound: () => void;
}

export const useAmbientAudio = (): AmbientAudioHook => {
  const [isEnabled, setIsEnabled] = useState(false);
  const ambientAudioRef = useRef<HTMLAudioElement | null>(null);
  const hoverSoundRef = useRef<HTMLAudioElement | null>(null);
  const clickSoundRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    // Create ambient audio (nature sounds with bees)
    const ambientAudio = new Audio();
    ambientAudio.src = "data:audio/wav;base64,UklGRnoGAABXQVZFZm10IBAAAAABAAEAQB8AAEAfAAABAAgAZGF0YQoGAACBhYqFbF1fdJivrJBhNjVgodDbq2EcBj+a2/LDciUFLIHO8tiJNwgZaLvt559NEAxQp+PwtmMcBjiR1/LMeSwFJHfH8N2QQAoUXrTp66hVFApGn+D2u2seBTWc4PO4dSAFLYbG5+ONMQ4TYMLi7KVVFAo+ltryynn"; // Placeholder - you'd replace with actual nature sound
    ambientAudio.loop = true;
    ambientAudio.volume = 0.1;
    ambientAudioRef.current = ambientAudio;

    // Create hover sound effect
    const hoverSound = new Audio();
    hoverSound.src = "data:audio/wav;base64,UklGRn4BAABXQVZFZm10IBAAAAABAAEARKwAAIhYAQACABAAZGF0YVoBAAC4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uA=="; // Soft pop sound
    hoverSound.volume = 0.05;
    hoverSoundRef.current = hoverSound;

    // Create click sound effect
    const clickSound = new Audio();
    clickSound.src = "data:audio/wav;base64,UklGRn4BAABXQVZFZm10IBAAAAABAAEARKwAAIhYAQACABAAZGF0YVoBAADBwcHBwcHBwcHBwcHBwcHBwcHBwcHBwcHBwcHBwcHBwcHBwcHBwcHBwcHBwcHBwcHBwcHBwcHBwcHBwcHBwcHBwcHBwcHBwQ=="; // Gentle chime
    clickSound.volume = 0.03;
    clickSoundRef.current = clickSound;

    return () => {
      ambientAudio.pause();
      ambientAudio.src = '';
      hoverSound.src = '';
      clickSound.src = '';
    };
  }, []);

  const toggle = () => {
    if (ambientAudioRef.current) {
      if (isEnabled) {
        ambientAudioRef.current.pause();
      } else {
        ambientAudioRef.current.play().catch(() => {
          // Handle autoplay restrictions
          console.log('Audio autoplay blocked');
        });
      }
      setIsEnabled(!isEnabled);
    }
  };

  const playHoverSound = () => {
    if (isEnabled && hoverSoundRef.current) {
      hoverSoundRef.current.currentTime = 0;
      hoverSoundRef.current.play().catch(() => {});
    }
  };

  const playClickSound = () => {
    if (isEnabled && clickSoundRef.current) {
      clickSoundRef.current.currentTime = 0;
      clickSoundRef.current.play().catch(() => {});
    }
  };

  return {
    isEnabled,
    toggle,
    playHoverSound,
    playClickSound,
  };
};
