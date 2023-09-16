import { RefObject, useEffect, useState } from 'react';

interface AnimationProps {
  elemRef: RefObject<HTMLDivElement>;
  buttonStyles: string;
}

export const useAnimationEnd = ({ elemRef, buttonStyles }: AnimationProps) => {
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
  }, [buttonClicked]);

  const handleLogic = () => {
    elemRef.current?.classList.add(buttonStyles);
    setButtonClicked(true);
  };

  return {
    handleLogic,
  };
};
