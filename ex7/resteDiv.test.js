
const resteDiv = require("./resteDiv");

describe("reste de deux nombre", () => {
  it("  1 % 3 = 1 ", () => {
    expect(resteDiv( 1 , 3)).toBe(1);
  });

  it("  2 % 4 = 2 ", () => {
    expect(resteDiv( 2 , 4)).toBe(2);
  });


  it("  3 % 3 = 0 ", () => {
    expect(resteDiv( 3 , 3)).toBe(0);
  });
  


});
