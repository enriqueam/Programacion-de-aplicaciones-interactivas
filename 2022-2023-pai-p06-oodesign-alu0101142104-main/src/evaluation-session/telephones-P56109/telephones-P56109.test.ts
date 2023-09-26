const { TraduceNumber } = require('./traduceNumber')

describe("Telephones-P56109", () => {
  test("Testing isNumber() with 0", () => {
    const traductor = new TraduceNumber();
    expect(traductor.isNumber("0")).toBe(true);
  });
  test("Testing isNumber() with a letter", () => {
    const traductor = new TraduceNumber();
    expect(traductor.isNumber("a")).toBe(false);
  });
  test("Testing isNumber() with 0", () => {
    const traductor = new TraduceNumber();
    expect(traductor.isNumber("5")).toBe(true);
  });

  test("Testing traduceToNumber() with 1-800-PAINTER", () => {
    const traductor = new TraduceNumber();
    expect(traductor.traduce("1-800-PAINTER")).toBe("1-800-7246837");
  });

  test("Testing traduceToNumber() with 802-PONME-CALIENTE", () => {
    const traductor = new TraduceNumber();
    expect(traductor.traduce("802-PONME-CALIENTE")).toBe("802-76663-22543683");
  });

  test("Testing traduceToNumber() with WAA-D1T1PV", () => {
    const traductor = new TraduceNumber();
    expect(traductor.traduce("WAA-D1T1PV")).toBe("922-318178");
  });
});