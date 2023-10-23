const minuteToSecond = require("./minuteToSecond");

describe("Minute to second", () => {
  it(" 4 * 60 = 240 ", () => {
    expect(minuteToSecond(4)).toBe(240);
  });

  it(" 3 + 60 = 180 ", () => {
    expect(minuteToSecond(3)).toBe(180);
  });
});
