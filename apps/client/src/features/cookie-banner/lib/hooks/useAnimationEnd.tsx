import { useEffect, RefObject, useCallback } from 'react';
import styles from '../../cookie-banner.module.scss';

interface AnimationProps {
  elemRef: RefObject<HTMLDivElement>;
}

export const useAnimationEnd = ({ elemRef }: AnimationProps) => {
  const handleAnimationEnd = useCallback(() => {
    if (elemRef.current) {
      elemRef.current.remove();
    }
  }, [elemRef]);

  const handleLogic = () => {
    if (elemRef.current) {
      elemRef.current.addEventListener('animationend', handleAnimationEnd, { once: true });
      elemRef.current.classList.add(styles.closeIt);
    }
  };

  useEffect(() => {
    // Store the current ref value to use in the cleanup function
    const currentElem = elemRef.current;

    return () => {
      if (currentElem) {
        // Use stored ref value to remove event listener
        currentElem.removeEventListener('animationend', handleAnimationEnd);
      }
    };
    // Add handleAnimationEnd to the dependencies array
  }, [elemRef, handleAnimationEnd]);

  return {
    handleLogic,
  };
};
