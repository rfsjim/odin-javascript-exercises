// write a function called reverseString that returns its input, reversed!

const reverseString = function(string) {
    let stringArr = string.split("");
    let returnArr = [];

    for (let i = stringArr.length - 1; i >= 0; i--) {
        returnArr.push(stringArr[i]);
    }

    return returnArr.join("");
};

// Do not edit below this line
module.exports = reverseString;
