'use client';

import type React from 'react';
import { useEffect, useRef } from 'react';

export const useClickOutside = <T extends HTMLElement>(
  callback: () => void
): React.RefObject<T> => {
  const reference = useRef<T>(null);

  useEffect(() => {
    const click = ({ target }: Event): void => {
      if (target && reference.current && !reference.current.contains(target as Node)) {
        callback();
      }
    };

    document.addEventListener('mousedown', click);

    return () => {
      document.removeEventListener('mousedown', click);
    };
  }, [callback]);

  return reference;
};
