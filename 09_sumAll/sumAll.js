// Implement a function that takes 2 positive integers and returns the sum of every integer between (and including) them
const sumAll = function(a, b) {
    if (Number.isNaN(a) || a <= 0 || !Number.isInteger(a) ||
        b <= 0 || Number.isNaN(b) || !Number.isInteger(b))
    {
        return 'ERROR';
    }

    if (a > b)
    {
        [a, b] = [b, a];
    }

    let sum = 0;

    for (let i = a; i <= b; i++)
    {
        sum += i;
    }

    return sum;
};

// Do not edit below this line
module.exports = sumAll;
