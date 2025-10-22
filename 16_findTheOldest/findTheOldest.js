// Given an array of objects representing people with a birth and death year, return the oldest person
const getAge = (person, year = new Date().getFullYear()) => 
  (person.yearOfDeath ?? year) - person.yearOfBirth;

const findTheOldest = function(array) {
  const currentYear = new Date().getFullYear();
  return array.reduce((oldest, person) => {
    return getAge(person, currentYear) > getAge(oldest, currentYear)
      ? person
      : oldest;
  });
};

// Do not edit below this line
module.exports = findTheOldest;
