const filterWords = require("./filterWords");

describe("Filter words start with Z", () => {
  it(' ["Bob", "Alex", "Zoello"] =>   ["Bob", "Alex"]  ', () => {
    expect(filterWords(["Bob", "Alex", "Zoello"])).toEqual(["Bob", "Alex"]);
  });

  it('["Lion", "Zebra", "Gazelle"] => ["Lion", "Zebra", "Gazelle"]', () => {
    expect(filterWords(["Lion", "Zebra", "Gazelle"])).toEqual(["Lion", "Gazelle"]);
  });


  it(' ["Mercedes", "Bmw", "Audi"] =>  ["Mercedes", "Bmw", "Audi"] ', () => {
    expect(filterWords(["Mercedes", "Bmw", "Audi"])).toEqual(["Mercedes", "Bmw", "Audi"]);
  });
  


});
