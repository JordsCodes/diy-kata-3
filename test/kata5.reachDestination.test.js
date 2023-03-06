const { reachDestination } = require("../src");

describe("reachDestination", () => {
  it("returns string with estimated time of arrival", () => {
    expect(reachDestination(65, 10)).toBe("I should be there in 6.5 hours.");
    expect(reachDestination(44, 20)).toBe("I should be there in 2.5 hours.");
    expect(reachDestination(90, 25)).toBe("I should be there in 4 hours.");
  });
});
