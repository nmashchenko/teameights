import { capitalize } from './capitalize'; // Replace 'your-file' with the actual file path

describe('capitalizeFirstLetter', () => {
  it('should capitalize the first letter of a lowercase string', () => {
    const input = 'hello, world!';
    const expected = 'Hello, world!';
    const result = capitalize(input);
    expect(result).toBe(expected);
  });

  it('should not modify an empty string', () => {
    const input = '';
    const result = capitalize(input);
    expect(result).toBe('');
  });

  it('should not modify a string with an already capitalized first letter', () => {
    const input = 'Hello, world!';
    const result = capitalize(input);
    expect(result).toBe('Hello, world!');
  });

  it('should capitalize the first letter of a single lowercase character', () => {
    const input = 'a';
    const result = capitalize(input);
    expect(result).toBe('A');
  });

  it('should capitalize the first letter of a string with leading spaces', () => {
    const input = '   hello, world!';
    const expected = 'Hello, world!';
    const result = capitalize(input);
    expect(result).toBe(expected);
  });

  it('should capitalize the first letter of a string with trailing spaces', () => {
    const input = 'hello, world!   ';
    const expected = 'Hello, world!';
    const result = capitalize(input);
    expect(result).toBe(expected);
  });

  it('should handle strings with only spaces', () => {
    const input = '   ';
    const result = capitalize(input);
    expect(result).toBe('   ');
  });
});
