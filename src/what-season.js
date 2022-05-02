const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason(date) {
  
  if (!date) {
    return 'Unable to determine the time of year!';
  }
  
  if (!(date instanceof Date)) {
    throw new Error("Invalid date!");
  }
  
  if (2 <= date.getMonth() && date.getMonth() <= 4) {
    return 'spring';
  }
  
  if (5 <= date.getMonth() && date.getMonth() <= 7) {
    return 'summer';
  }
  
  if (8 <= date.getMonth() && date.getMonth() <= 10) {
    return 'autumn (fall)';
  }
  
  return 'winter';

}

module.exports = {
  getSeason
};
