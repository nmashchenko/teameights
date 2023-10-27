import { faker } from '@faker-js/faker';

export const getRandomItemFromArray = (array: string[]): string => {
  const randomIndex = faker.number.int({ min: 0, max: array.length - 1 });
  return array[randomIndex];
};

export const getRandomNumberBetween = (min: number, max: number) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};
