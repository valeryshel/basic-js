const CustomError = require("../extensions/custom-error");

module.exports = function countCats(matrix) {
   let cats = 0; // количество котов
   let flatMatrix = matrix.flat(); // делаем матрицу плоской
   for (let i = 0; i <= flatMatrix.length; i++) { // перебираем длину плоско матриы
     if (flatMatrix[i] === "^^") { //если элемент эсивалентен ^^, то добавим его в cats
        cats++;
     }
   }
   return cats;
};
