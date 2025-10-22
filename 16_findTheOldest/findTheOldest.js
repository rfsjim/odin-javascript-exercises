// Given an array of objects representing people with a birth and death year, return the oldest person

const findTheOldest = function(array) { 
    let oldestIndex, oldestSoFar = 0;
    return array.reduce((oldest, person, index) => { 
        let deathYear;
        if (person.yearOfDeath === null)
        { 
            deathYear = new Date().getFullYear(); 
        } else 
            { 
                deathYear = person.yearOfDeath; 
            }
            let age = deathYear - person.yearOfBirth;
            if ((age) > oldestSoFar)
                { 
                    oldestSoFar = (age);
                    oldestIndex = index;
                }
                return array[oldestIndex];
        },
        {})
    };

// Do not edit below this line
module.exports = findTheOldest;
