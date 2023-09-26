const { main, convertToNumbers, queensProblem } = require('../queens-P16415');

describe('Queens client', () => {
  it('should convert a string to a number', () => {
    expect(convertToNumbers('8')).toBe(8);
  });

  it('should throw an error if the string is not a number', () => {
    expect(() => convertToNumbers('a')).toThrow('The parameter must be a natural number');
  });

  it('should throw an error if the number is not a natural number', () => {
    expect(() => convertToNumbers('0')).toThrow('The number must be greater than 0');
  });

  it('should solve the queens problem', () => {
    expect(queensProblem(8)).toBe(92);
  });
});