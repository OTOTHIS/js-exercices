
const prodImp = require("./prodImp");

describe("produit des nombres impaire de tableau", () => {
  it(" [1, 2, 3, 4] => 3 ", () => {
    expect(prodImp([1, 2, 3, 4])).toBe(3);
  });

  it("[3, 6, 8, 5, 5, 7] => 525", () => {
    expect(prodImp([3, 6, 8, 5, 5, 7])).toBe(525);
  });


  it(" [1, 0, 1, 0, 1, 0] => 1 ", () => {
    expect(prodImp( [1, 0, 1, 0, 1, 0])).toBe(1);
  });
  


});
