const filterWords = (arr) => {
  return arr.filter((value) => value.charAt(0) !== "Z");
};

module.exports = filterWords;
