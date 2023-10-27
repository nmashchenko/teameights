import { calculateAge } from './get-age';

describe('calculateAge', () => {
  it('should return the correct age before the birthday', () => {
    expect(calculateAge('2000-12-31')).toBe(22);
  });

  it('should return the correct age after the birthday', () => {
    expect(calculateAge('2000-01-01')).toBe(23);
  });

  it('should return the correct age on the birthday', () => {
    const currentDate = new Date();
    const birthDate = new Date(
      currentDate.getFullYear() - 20,
      currentDate.getMonth(),
      currentDate.getDate()
    );
    expect(calculateAge(birthDate)).toBe(20);
  });

  it('should handle Date objects', () => {
    expect(calculateAge(new Date('1990-05-17'))).toBe(33);
  });

  it('should handle string dates', () => {
    expect(calculateAge('1990-05-17')).toBe(33);
  });
});
