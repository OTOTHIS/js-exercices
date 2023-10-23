const repeatChr = (str, n) => {
  return String(str).split("").map((value) => value.repeat(n)).join("");
};
module.exports = repeatChr