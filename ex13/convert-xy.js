const  convert = (x, y) => {

  let result = [] ;
    for (var i = 0; i < x.length; i++) {
      result.push([x[i], y[i]]);
    }
  
    return result;
  }
  
console.log(convert([0, 2, 5], [8, 6, 9]))

module.exports = convert


  