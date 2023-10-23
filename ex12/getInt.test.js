const getInt = require("./getInt");

describe("Increment number", () => {
  it('[1, 2, "3", "4", "5", 6]  =  [1, 2, 6] ', () => {
    expect(getInt([1, 2, "3", "4", "5", 6])).toEqual( [1, 2, 6]);
  });


  /* Error here  */

  it('["Vache", 20, "Cheval", 1, "Poule", 50]  =>  [20, 1, 1] ', () => {
    expect(getInt(["Vache", 20, "Cheval", 1, "Poule", 50])).toEqual( [20, 1, 50]);
  });

  it('["Str", false, 5.56, 6] => [6]', () => {
    expect(getInt(["Str", false, 5.56, 6])).toEqual( [6]);
  });


});
