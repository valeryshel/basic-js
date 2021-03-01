const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {

  if (!Array.isArray(arr)) {
    throw new Error(); // если arr не является массивом, то выдаст ошибку
  }

  let result = []; // тут будет новый массив

  for (let i = 0; i < arr.length; i++) {
    switch (arr[i]) {
      case '--discard-next':
        if ( i !==arr.length - 1) {
          i+=1;
        }
        break;
      case '--discard-prev':
        if (i !== 0) {
          result.pop();
        }
        break;
      case '--double-next':
        if ( i !==arr.length - 1) {
          result.push(arr[i+1]);
        }
        break;
      case '--double-prev':
        if (i !== 0) {
          result.push(arr[i-1]);
        }
        break;

        default:
          result.push(arr[i]);
    }

  }
  return result;

};
