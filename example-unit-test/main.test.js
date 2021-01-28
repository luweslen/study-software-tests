const sum = require('./main');

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});

test('adds 1 + 3 is not equal 3', () => {
  expect(sum(1, 3)).not.toBe(3);
});