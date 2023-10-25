import { getCountryFlag } from './get-country-flag';

describe('getCountryFlag', () => {
  it('should get Ukrainian flag', () => {
    expect(getCountryFlag('Ukraine')).toBe('https://flagcdn.com/w320/ua.png');
  });

  it('should get Turks and Caicos Islands flag', () => {
    expect(getCountryFlag('Turks and Caicos Islands')).toBe('https://flagcdn.com/w320/tc.png');
  });

  it('should get Turks and Aland Islands flag', () => {
    expect(getCountryFlag('Aland Islands')).toBe('https://flagcdn.com/w320/ax.png');
  });

  it('should get nothing', () => {
    expect(getCountryFlag('')).toBe('');
  });

  it('should get nothing for random words', () => {
    expect(getCountryFlag('adfasreavxgeag')).toBe('');
  });
});
