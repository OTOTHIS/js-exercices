
const surfaceTriangle = require("./surface-triangle");

describe("Surface de triangle", () => {
  it(" base = 8 , hauteur = 2   , result = 8 ", () => {
    expect(surfaceTriangle(8 , 2)).toBe(8);
  });

  it(" base = 7 , hauteur = 3   , result = 10.5", () => {
    expect(surfaceTriangle(7 , 3)).toBe(10.5);
  });
});
