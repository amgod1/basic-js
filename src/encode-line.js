const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {

  const arr = str.split('');
  let result = '';
  let count = 1;
  arr.forEach(function(el, i, arr2) {
    if (el !== arr2[i + 1] || i === arr2.length-1) {
      if (count === 1) {
        result += el;
      } else {
        result += count + el;
      }
  
  count = 1;
  return;
  }
  count++;
  });
  
  return result;

}

module.exports = {
  encodeLine
};
