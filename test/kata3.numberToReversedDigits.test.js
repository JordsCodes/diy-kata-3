const { numberToReversedDigits } = require("../src");

describe("numberToReversedDigits", () => {
  it("returns a reversed array of the number's digits", () => {
    expect(numberToReversedDigits(12345)).toEqual([5, 4, 3, 2, 1]);
    expect(numberToReversedDigits(1985)).toEqual([5, 8, 9, 1]);
    expect(numberToReversedDigits(1337)).toEqual([7, 3, 3, 1]);
  });
});
