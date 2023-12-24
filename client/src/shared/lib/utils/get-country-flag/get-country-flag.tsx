import { countryFlags } from '@/shared/constant';

export const getCountryFlag = (countryName: string = ''): string | undefined => {
  const normalizedCountryName = countryName.trim();

  if (normalizedCountryName in countryFlags) {
    return countryFlags[normalizedCountryName];
  }

  return undefined;
};
