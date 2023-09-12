'use client';
import React, { useEffect, useRef } from 'react';

interface UseClickProps {
  callback: () => void;
}
export const useClickOutside = <T extends HTMLElement>(
  props: UseClickProps
): React.RefObject<T> => {
  const { callback } = props;
  const ref = useRef<T>(null);

  useEffect(() => {
    const click = ({ target }: Event): void => {
      if (target && ref.current && !ref.current.contains(target as Node)) {
        callback();
      }
    };

    document.addEventListener('mousedown', click);

    return () => {
      document.removeEventListener('mousedown', click);
    };
  }, [callback]);

  return ref;
};
