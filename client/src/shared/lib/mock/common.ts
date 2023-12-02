import { faker } from '@faker-js/faker';

export const getRandomItemFromArray = (array: string[]): string => {
  const randomIndex = faker.number.int({ min: 0, max: array.length - 1 });
  return array[randomIndex];
};

export const getRandomItemFromObject = <T>(obj: { [key: string]: T }): T => {
  const keys = Object.keys(obj);
  const randomKey = getRandomItemFromArray(keys);
  return obj[randomKey as keyof typeof obj];
};

export const getRandomNumberBetween = (min: number, max: number) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

export const shuffleArray = <T>(array: T[]): T[] => {
  let currentIndex = array.length,
    randomIndex;

  // While there remain elements to shuffle...
  while (currentIndex !== 0) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
  }

  return array;
};
