const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  if (Array.isArray(members) === false) return false;

  let dreamTeamName = '';

  members.forEach(element => {
    if(typeof(element) === 'string') {
      dreamTeamName += element.trim()[0];
    }
  });
  return dreamTeamName.toUpperCase().split('').sort().join('');
};
