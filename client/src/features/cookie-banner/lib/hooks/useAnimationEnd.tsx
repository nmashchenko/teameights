'use client';

import { RefObject, useEffect, useState } from 'react';
import styles from '../../cookie-banner.module.scss';

interface AnimationProps {
  elemRef: RefObject<HTMLDivElement>;
}

export const useAnimationEnd = ({ elemRef }: AnimationProps) => {
  const [buttonClicked, setButtonClicked] = useState(false);

  useEffect(() => {
    const onAnimationEnd = () => {
      if (elemRef.current) {
        elemRef.current.removeEventListener('animationend', onAnimationEnd);
        if (buttonClicked) {
          elemRef.current.remove();
        }
      }
    };
    if (elemRef.current) {
      elemRef.current.addEventListener('animationend', onAnimationEnd);
    }
  }, [buttonClicked, elemRef]);

  const handleLogic = () => {
    elemRef.current?.classList.add(styles.closeIt);
    setButtonClicked(true);
  };

  return {
    handleLogic,
  };
};
