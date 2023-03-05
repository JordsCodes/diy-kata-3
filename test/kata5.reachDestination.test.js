const { reachDestination } = require("../src");

describe("reachDestination", () => {
  it("returns string with estimated time of arrival", () => {
    expect(reachDestination(65, 10)).toBe("I should be there in 6.5 hours.");
    expect(reachDestination(44, 10)).toBe("I should be there in 4.5 hours.");
    expect(reachDestination(87, 10)).toBe("I should be there in 9 hours.");
  });
});
