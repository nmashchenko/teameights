import { getElapsedTime } from './get-elapsed-time';

describe('getElapsedTime', () => {
  // Generated by CodiumAI

  describe('getElapsedTime', () => {
    // Returns elapsed time in seconds for a time that is less than a minute ago
    it('should return elapsed time in seconds when the time is less than a minute ago', () => {
      const currentTime = new Date();
      const pastTime = new Date(currentTime.getTime() - 5000); // 5 seconds ago
      expect(getElapsedTime(pastTime)).toBe('5s ago');
    });

    // Returns elapsed time in minutes for a time that is less than an hour ago
    it('should return elapsed time in minutes when the time is less than an hour ago', () => {
      const currentTime = new Date();
      const pastTime = new Date(currentTime.getTime() - 300000); // 5 minutes ago
      expect(getElapsedTime(pastTime)).toBe('5m ago');
    });

    // Returns elapsed time in hours for a time that is less than a day ago
    it('should return elapsed time in hours when the time is less than a day ago', () => {
      const currentTime = new Date();
      const pastTime = new Date(currentTime.getTime() - 7200000); // 2 hours ago
      expect(getElapsedTime(pastTime)).toBe('2h ago');
    });

    // Returns "1s ago" for a time that is 1 secons ago
    it('should return ""1s ago" for a time that is 1 secons ago', () => {
      const currentTime = new Date();
      const pastTime = new Date(currentTime.getTime() - 1000); // 1 second ago
      expect(getElapsedTime(pastTime)).toBe('1s ago');
    });

    // Returns "0s ago" in all cases in milliseconds
    it('should return "0s ago" in all cases in milliseconds', () => {
      const currentTime = new Date();
      const pastTime = new Date(currentTime.getTime() - 10); // 10 millisecond ago
      expect(getElapsedTime(pastTime)).toBe('0s ago');
      const pastTime2 = new Date(currentTime.getTime() - 100); // 100 millisecond ago
      expect(getElapsedTime(pastTime2)).toBe('0s ago');
    });

    // Returns "1m ago" for a time that is 1 minute and 30 seconds ago
    it('should return "1m ago" for a time that is 1 minute and 30 seconds ago', () => {
      const currentTime = new Date();
      const pastTime = new Date(currentTime.getTime() - 90000); // 1 minute and 30 seconds ago
      expect(getElapsedTime(pastTime)).toBe('1m ago');
    });
  });

  // Returns elapsed time in years for a time that is more than a year ago
  it('should return elapsed time in years when the time is more than a year ago', () => {
    const currentTime = new Date();
    const pastTime = new Date(currentTime.getTime() - 31536000000); // 1 year ago
    expect(getElapsedTime(pastTime)).toBe('1y ago');
  });

  // Returns elapsed time in days for a time that is less than a month ago
  it('should return elapsed time in days when the time is less than a month ago', () => {
    const currentTime = new Date();
    const pastTime = new Date(currentTime.getTime() - 86400000); // 1 day ago
    expect(getElapsedTime(pastTime)).toBe('1d ago');
  });

  it('should throw an error for invalid date input', () => {
    expect(() => getElapsedTime('invalid date')).toThrow(Error);
  });
});
