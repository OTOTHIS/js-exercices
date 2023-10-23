
const repeatChr = require("./repeatChr");

describe("repeat string", () => {
  it(" 'alex', 3  => 'aaallleeexxx'", () => {
    expect(repeatChr('alex' , 3)).toBe('aaallleeexxx');
  });

  it("'waytolearnx' , 1 => 'waytolearnx'", () => {
    expect(repeatChr('waytolearnx' , 1)).toBe('waytolearnx');
  });


  it(" [1, 0, 1, 0, 1, 0] => 1 ", () => {
    expect(repeatChr('bob' , 2)).toBe('bboobb');
  });
  


});
