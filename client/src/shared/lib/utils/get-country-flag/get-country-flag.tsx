import { countryFlags } from '@/shared/constant';

export const getCountryFlag = (countryName: string): string => {
  const normalizedCountryName = countryName.trim();

  if (normalizedCountryName in countryFlags) {
    return countryFlags[normalizedCountryName];
  }

  return '';
};
