



const increment = require("./increment");

describe("Increment number", () => {
  it(" 4 + 1 = 5 ", () => {
    expect(increment(4)).toBe(5);
  });

  it(" 3 + 1 = 4 ", () => {
    expect(increment(3)).toBe(4);
  });
});
