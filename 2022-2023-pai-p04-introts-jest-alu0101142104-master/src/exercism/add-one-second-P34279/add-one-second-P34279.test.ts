require ('./add-one-second-P34279');

// Testing with jest
describe("Testing add-one-second-P34279", () => {
  test("Testing with 00:00:00", () => {
    expect(main(0, 0, 0)).toBe("00:00:01");
  });
  test("Testing with 23:59:59", () => {
    expect(main(23, 59, 59)).toBe("00:00:00");
  });
  test("Testing with 12:34:56", () => {
    expect(main(12, 34, 56)).toBe("12:34:57");
  });
  test("Testing with 12:34:59", () => {
    expect(main(12, 34, 59)).toBe("12:35:00");
  });
});

