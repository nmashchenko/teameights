import { MutableRefObject, useEffect } from 'react';

/**
 * Hook to detect clicks outside of a ref element.
 *
 * @param ref - The ref of the element to detect outside clicks for.
 * @param callback - The callback to execute when an outside click is detected.
 * @param isChildModalOpen - Optional flag to determine if a child modal is open.
 */
export function useOutsideClick(
  ref: MutableRefObject<HTMLElement | null>,
  callback: () => void,
  isChildModalOpen: boolean = false
): void {
  const handleClickOutside = (event: MouseEvent) => {
    if (ref.current && !ref.current.contains(event.target as Node)) {
      if (isChildModalOpen) {
        // Close child modal first
        return;
      }
      callback();
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [callback, ref, isChildModalOpen]);
}
