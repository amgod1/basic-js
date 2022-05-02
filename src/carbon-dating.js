const { NotImplementedError } = require('../extensions/index.js');

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 * 
 * @param {String} sampleActivity string representation of current activity 
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 * 
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
function dateSample(sampleActivity) {

  if (typeof sampleActivity == 'number' || 
      typeof sampleActivity == 'boolean' || 
      typeof sampleActivity == 'undefined' || 
      typeof sampleActivity == 'object' ||
      sampleActivity == '' ||
      sampleActivity[0] == ' ' ||
      Array.isArray(sampleActivity) == true) { return false }

  if (typeof sampleActivity == 'string') {
      
    for (let i = 0; i < sampleActivity.length; i++) { if (/^[a-zA-Z ]+$/.test(sampleActivity[i])) return false }
          
  }

  if (typeof sampleActivity == 'string' && 0 >= Number(sampleActivity) || Number(sampleActivity) > 15) { return false }

  return Math.trunc ( Math.log ( MODERN_ACTIVITY / Number(sampleActivity) ) / ( Math.LN2 / HALF_LIFE_PERIOD ) ) + 1

}

module.exports = {
  dateSample
};
