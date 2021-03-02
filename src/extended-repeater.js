const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, {repeatTimes = 1, separator = '+', addition = '', additionRepeatTimes = 1, additionSeparator = '|' }) {
  let arr = [];
  let string = ''; // пустая строка для str
  let string2 = ''; // пустая строка для addition
  for (let i = 0; i < repeatTimes; i++) {
    string = String(str)
    if (addition || typeof addition == 'boolean' || addition === null) { // string || boolean || null
      for (let j = 0; j < additionRepeatTimes; j++) {  // перебрать кол-во повторов addition
        if (additionRepeatTimes > 1 && j < additionRepeatTimes - 1) { //addition повторы от 2 до предпоследнего
          string2 = string2 + String(addition) + String(additionSeparator); // добавляем addition + add. separator
        } else {
          string2 = string2 + String(addition); // добавляем только addition
        }
      }
    }
    if (i + 1 !== repeatTimes) { //индекс + 1 не равен кол-ву повторов
      string = string + string2 + separator; // складываем addition и separator
      arr.push(string);
      string = String(str);
      string2 = '';
    } else {
      string = string + string2 ;
      arr.push(string);
      string = String(str);
      string2 = '';
    }
  }
  return arr.join('');
};
