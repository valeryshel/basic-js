const CustomError = require("../extensions/custom-error");

module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
  let result = {};
  let turns = Math.pow(2 , disksNumber) - 1;// если у нас 3 стерженя, то работает 2 в степени n - 1, где n - кол-во колец.
  let seconds = Math.trunc(( turns * 60 * 60 ) / turnsSpeed); // turns * минуты * секунды / скорость перемещения колец
  return result = { turns , seconds};

};
