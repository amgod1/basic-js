const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
  
  if (!Array.isArray(arr)) throw new Error (`'arr' parameter must be an instance of the Array!`)

  workArr = [...arr];

  if (workArr[0] == '--discard-prev') { workArr.splice(0, 1) }

  for (let i = 0; i < workArr.length; i++) {

    if (workArr[i] == '--discard-next' && workArr[i + 2] == '--discard-prev' || 
        workArr[i] == '--discard-next' && workArr[i + 2] == '--double-prev') { workArr.splice(i, 3) } else

    if (workArr[i] == '--discard-next') { workArr.splice(i, 2) } else

    if (workArr[i] == '--discard-prev') { workArr.splice(i - 1, 2); i = 0 } else

    if (workArr[i] == '--double-next') { workArr[i] = workArr[i + 1] } else

    if (workArr[i] == '--double-prev') { workArr[i] = workArr[i - 1] }
    
  }

  for (let i = 0; i < workArr.length; i++) { if (workArr[i] == undefined) { workArr.splice(i, 1) } }

  return workArr

}

module.exports = {
  transform
};
