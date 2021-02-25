const CustomError = require("../extensions/custom-error");

module.exports = function countCats(matrix) {
   let cats = [];
   let flatMatrix = matrix.flat();
   for (let i = 0; i < flatMatrix; i++) {
     if (flatMatrix.includes("^^")) {
        cats.push(flatMatrix[i]);
     }
     return cats.length;
   }
};
