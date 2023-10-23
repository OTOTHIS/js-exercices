const prodImp = (arr) => {
  let imprArr = arr.filter((v) => v % 2 !== 0);
  return imprArr.reduce((prev, next) => prev * next);
};

module.exports = prodImp