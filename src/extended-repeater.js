const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {

  if (options.repeatTimes == undefined) { options.repeatTimes = 1 };
  if (options.additionRepeatTimes == undefined) { options.additionRepeatTimes = 1};
  if (options.addition === null) { options.addition = 'null' };
  if (options.addition === false) { options.addition = 'false' };
  if (str === null) str = 'null';

  if (options.addition) {

    let finalAddition = (options.addition + ((options.additionRepeatTimes == 1) ? '' : ((options.additionSeparator) ? options.additionSeparator : '|'))).repeat(options.additionRepeatTimes);

    if (finalAddition[finalAddition.length - 1] == '|') {

      str += finalAddition.substring(0, finalAddition.length - ((options.additionSeparator == undefined) ? 1 : (options.additionRepeatTimes == 1) ? 0 : options.additionSeparator.length));

    } else {
    
    str += finalAddition.substring(0, finalAddition.length - ((options.additionSeparator == undefined) ? 0 : (options.additionRepeatTimes == 1) ? 0 : options.additionSeparator.length));
    
    }
      
  }
    
  let finalStr = (str + ((options.separator == undefined) ? '+' : options.separator)).repeat(options.repeatTimes);
    
  return finalStr.substring(0, finalStr.length - ((options.separator == undefined) ? 1 : options.separator.length))
    
}

module.exports = {
  repeater
};
