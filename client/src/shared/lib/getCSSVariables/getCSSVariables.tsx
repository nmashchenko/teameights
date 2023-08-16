'use client';
/**
 *
 * @param varName for example '--grey-dark-color' will return '#2f3239'
 * @returns value of requested variable
 */

export const getCSSVariable = (varName: string): string => {
  if (typeof window !== 'undefined') {
    return getComputedStyle(document.documentElement)
      .getPropertyValue(varName)
      .trim();
  }
  return ''; // default value or fallback for SSR
};
