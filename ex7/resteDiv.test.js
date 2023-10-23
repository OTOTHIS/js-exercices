
const resteDiv = require("./getMax");

describe("reste de deux nombre", () => {
  it("  1 % 3 = 1 ", () => {
    expect(getMax( 1 , 3)).toBe(1);
  });

  it("  2 % 4 = 2 ", () => {
    expect(getMax( 2 , 4)).toBe(2);
  });


  it("  3 % 3 = 0 ", () => {
    expect(getMax( 3 , 3)).toBe(0);
  });
  


});
