// Given an array of objects representing people with a birth and death year, return the oldest person
const findTheOldest = function(array) {
    return array.reduce((oldest, person) => {
        const currentYear = new Date().getFullYear();

        const personDeath = person.yearOfDeath ?? currentYear;
        const oldestDeath = oldest.yearOfDeath ?? currentYear;

        const personAge = personDeath - person.yearOfBirth;
        const oldestAge = oldestDeath - oldest.yearOfBirth;

        return personAge > oldestAge ? person : oldest;
    });
};

// Do not edit below this line
module.exports = findTheOldest;
