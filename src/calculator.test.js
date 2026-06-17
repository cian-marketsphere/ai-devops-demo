const { add } = require('./calculator');

describe('add()', () => {
  test('adds 2 + 3 to equal 5', () => {
    // BUG: expected value is wrong — should be 5, not 6
    expect(add(2, 3)).toBe(6);
  });

  test('adds negative numbers', () => {
    expect(add(-1, -1)).toBe(-2);
  });
});
