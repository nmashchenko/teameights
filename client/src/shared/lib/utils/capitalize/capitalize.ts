export const capitalize = (input: string): string => {
  const trimmedInput = input.trim();

  if (!trimmedInput.length) {
    return input;
  }
  return trimmedInput.charAt(0).toUpperCase() + trimmedInput.slice(1);
};
