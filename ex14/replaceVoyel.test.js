const replaceVoyel = require("./replaceVoyel");

describe("replaceVoyel avec symbole", () => {
  it('test 1', () => {
    expect(replaceVoyel("voyelle","$")).toEqual("v$y$ll$");
  });

  it('test 2', () => {
    expect(replaceVoyel("boulevard" , "?")).toEqual("b??l?v?rd");
  });

  it('test 3', () => {
    expect(replaceVoyel("bouche" , "@")).toEqual("b@@ch@");
  });
});