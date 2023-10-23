const getMax = (...numbers) => {
  return numbers.sort((a, b) => b - a)[0];
};

module.exports = getMax;
