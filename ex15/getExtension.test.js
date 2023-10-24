const getExtension = require("./getExtension");

describe("get website and files Extension", () => {
  it('test 1', () => {
    expect(getExtension(["file.html", "file.js"])).toEqual(["html", "js"] );
  });

  it('test 2', () => {
    expect(getExtension(["image.jpg", "image.png", "image.gif"])).toEqual( ["jpg", "png", "gif"] );
  });

  it('test 3', () => {
    expect(getExtension(["file.pdf", "file.txt", "file.docx"])).toEqual(["pdf", "txt", "docx"]);
  });
});