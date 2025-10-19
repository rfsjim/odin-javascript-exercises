/**
 * Tests if given string is a palindrome
 * @param {string} string
 * @returns {boolean} true if palindrome, false if not 
 */
const palindromes = function (string) {
    string = string.toLowerCase().replace(/[^a-z0-9]/g, "").split("");

    let reverseString = [];

    for (let i = string.length - 1; i >= 0; i--)
    {
        reverseString.push(string[i]);
    }

    string = string.join();
    reverseString = reverseString.join();

    if (string === reverseString) return true;
    return false;
};

// Do not edit below this line
module.exports = palindromes;
