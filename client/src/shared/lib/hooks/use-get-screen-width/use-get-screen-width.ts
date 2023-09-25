'use client';

import { useEffect, useState } from 'react';

/**
 * Custom hook to get the current screen width.
 *
 * This hook returns the current screen width, and will re-render the component
 * using this hook whenever the screen is resized.
 *
 * @returns {number} The current screen width in pixels.
 *
 * @example
 * import { useGetScreenWidth } from '@/shared/lib';
 *
 * export const ResponsiveComponent = () => {
 *   const screenWidth = useGetScreenWidth();
 *
 *   return (
 *     <div>
 *       The screen width is: {screenWidth}
 *     </div>
 *   );
 * };
 */
export const useGetScreenWidth = (): number => {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    // Initial setting of screen width
    handleResize();

    // Event listener for window resize
    window.addEventListener('resize', handleResize);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return screenWidth;
};
