

const replaceVoyel = (str, symb) => {
    return str.split('').map((value) => /[aoiue]/g.test(value) ? symb : value).join('');
}

// const replaceVoyel = (str, symb) => {
//     return str.replaceAll(/[aoyiu]/g, symb);
// }


module.exports = replaceVoyel