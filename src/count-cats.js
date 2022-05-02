const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix 
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */
function countCats(catsArr) {

  if (catsArr === '^^') {
    return 1;
  }

  if (!catsArr || !Array.isArray(catsArr)) {
    return 0;
  }

  return catsArr.reduce(function (mod, el) {
    if (Array.isArray(el)) {
      return mod + countCats(el);
  }
  
  if (el === '^^') {
    return mod + 1;
  }
  
    return mod;
  }, 0);

}

module.exports = {
  countCats
};
