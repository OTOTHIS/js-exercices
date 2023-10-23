
const getMax = require("./getMax");

describe("Get max number", () => {
  it(" get max of numbers ", () => {
    expect(getMax(5, 9, 1)).toBe(9);
  });

  it(" 'WayToLearnX' to be 'XnraeLoTyaW'", () => {
    expect(getMax(2, 3, 10)).toBe(10);
  });
});
