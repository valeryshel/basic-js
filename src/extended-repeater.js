const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, {repeatTimes = 1, separator = '+', addition, additionRepeatTimes = 1, additionSeparator = '|' }) {
  let string = String(str);
  let add = String(addition);
  let arr = [];
  let stringNew = '';

  for (let i = 0; i < repeatTimes; i++) {
    for (let j = 0; j < additionRepeatTimes; j++) {
      if (additionRepeatTimes > 1 && j < additionRepeatTimes - 1){
        stringNew = stringNew + add + additionSeparator;
      } else {
        stringNew += add;
      }
    }
    if ( i + 1 === repeatTimes) {
      string += stringNew;
      arr.push(string);
    } else {
      string = string + stringNew + separator;
      arr.push(string);
    }
  }
return arr.join('');

};
