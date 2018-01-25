const waterWall = require('../water-wall');

test('outputs index and total water for test sample input', () => {
  const input = [5, 3, 7, 2, 6, 4, 5, 9, 1, 2];
  const actual = waterWall(input);
  const expected = [3, 8, 11];
  
  expect(actual).toEqual(expected);
})