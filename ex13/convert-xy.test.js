const convert = require("./convert-xy");

describe("convertir deux tableaux de coordonnées x et y en un tableau de coordonnées", () => {
  it('test 1', () => {
    expect(convert([0, 2, 5], [8, 6, 9])).toEqual([[ 0, 8 ], [ 2, 6 ], [ 5, 9 ]]);
  });

  it('test 2', () => {
    expect(convert([2, 2], [4, 8])).toEqual([[ 2, 4 ], [ 2, 8 ]]);
  });

  it('test 3', () => {
    expect(convert([1], [2])).toEqual([[ 1, 2 ]]);
  });
});

