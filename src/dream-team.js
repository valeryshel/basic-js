const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  if (Array.isArray(members) === false) return false; // проверка является ли members массивом

  let dreamTeamName = ''; // переменная для имени команды

  members.forEach(element => {
    if(typeof(element) === 'string') { // проверка на тип данных
      dreamTeamName += element.trim()[0]; // [0] элемент строки добавляем в dreamTeamName + обрезаем пробелы
    }
  });
  return dreamTeamName.toUpperCase().split('').sort().join(''); // верхний регистр -> разделяем по эл-там -> сортировка -> соединяем
};
