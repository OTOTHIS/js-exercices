
const add = require("./add");

describe("addition de 2 number", () => {
  it(" '2', '3' = 5 ", () => {
    expect(add( "2" , "3")).toBe(5);
  });

  it("  2 + 3 = 23 ", () => {
    expect(add(2, 3)).toBe("23");
  });


  it(" '2' +  3 = null ", () => {
    expect(add( '2' , 3)).toBe(null);
  });
  


});
