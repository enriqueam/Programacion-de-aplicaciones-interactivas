import { convertToNumber, checkFormat, countSequences } from './Counting-frequences-P63414.test';

describe("Testing convertToNumber", () => {
  test("Testing with 0", () => {
    expect(convertToNumber("0")).toBe(0);
  });
  test("Testing with 23", () => { 
    expect(convertToNumber("23")).toBe(23);
  });
  test("Testing with 59", () => {
    expect(convertToNumber("59")).toBe(59);
  });
});

describe("Testing checkFormat", () => {
  test("Testing with 3 [1000000001, 1000000004]", () => {
    expect(() => checkFormat(3, [1000000001, 1000000004])).toThrowError();
  });
});

describe("Testing countSequences", () => {
  test("Testing with 3 [1000000001, 1000000004]", () => {
    expect(() => countSequences([11000000001 1000000011 1000000011 1000000004 1000000004 1000000200 1000000004])).toEqual({ '1000000001': 1, '1000000004': 3, '1000000011': 2, '1000000200': 1 });
  });
});