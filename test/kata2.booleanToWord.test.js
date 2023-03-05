const { booleanToWord } = require("../src");

describe("booleanToWord", () => {
  it("when passed true, return 'Yes'", () => {
    expect(booleanToWord(true)).toBe("Yes");
  });

  it("when passed false, return 'No'", () => {
    expect(booleanToWord(false)).toBe("No");
  });
});
