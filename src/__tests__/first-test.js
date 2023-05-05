import { strikeOfLife } from '../streak-of-life.js';

test('strike-of-life', () => {
  const hero = { name: 'Маг', health: 14 };
  const result = strikeOfLife(hero);
  expect(result).toBe('critical');
});

test('strike-of-life', () => {
  const hero = { name: 'Маг', health: 15 };
  const result = strikeOfLife(hero);
  expect(result).toBe('wounded');
});

test('strike-of-life', () => {
  const hero = { name: 'Маг', health: 50 };
  const result = strikeOfLife(hero);
  expect(result).toBe('wounded');
});

test('strike-of-life', () => {
  const hero = { name: 'Маг', health: 51 };
  const result = strikeOfLife(hero);
  expect(result).toBe('healthy');
});
