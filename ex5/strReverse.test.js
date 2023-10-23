
const strReverse = require("./strReverse");

describe("Str reverse", () => {
  it(" 'hello' tobe 'olleH' ", () => {
    expect(strReverse("Hello")).toBe("olleH");
  });

  it(" 'WayToLearnX' to be 'XnraeLoTyaW'", () => {
    expect(strReverse("WayToLearnX")).toBe("XnraeLoTyaW");
  });
});
