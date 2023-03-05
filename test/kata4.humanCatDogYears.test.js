const { humanCatDogYears } = require("../src");

describe("humanCatDogYears", () => {
  it("returns human, cat, dog years respectively", () => {
    expect(humanCatDogYears(10)).toEqual([10, 56, 64]);
    expect(humanCatDogYears(12)).toEqual([12, 64, 74]);
    expect(humanCatDogYears(15)).toEqual([15, 76, 89]);
  });
});
