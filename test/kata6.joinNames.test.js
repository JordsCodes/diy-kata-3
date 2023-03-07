const { joinNames } = require("../src");

describe("joinNames", () => {
  it("returns string of names, seperated by commas and an ampersand", () => {
    expect(
      joinNames([{ name: "Bart" }, { name: "Lisa" }, { name: "Maggie" }])
    ).toBe("Bart, Lisa & Maggie");
    expect(
      joinNames([
        {
          name: "Cartman",
          age: "9",
          hat: "blue",
        },
        {
          name: "Stan",
          age: "10",
          hat: "blue",
        },
        {
          name: "Randy",
          age: "40",
          hat: "N/A",
        },
        {
          name: "Kyle",
          age: "9",
          hat: "green",
        },
      ])
    ).toBe("Cartman, Stan, Randy & Kyle");
  });
});
