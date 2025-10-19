/**
 * A function that returns a specific member of the Fibonacci sequence
 * @param {number} number requested specific member number from the Fibonacci sequence
 * @returns {number} fibonacci number
 */
const fibonacci = function(number) {
    if (typeof number !== 'number')
    {
        number = parseInt(number);
    }

    if (number < 0) return "OOPS";
    if (number === 0) return 0;

    const fibonacciNumber = [0, 1];

    for (let i = 2; i <= number; i++)
    {
        fibonacciNumber[i] = fibonacciNumber[i - 1] + fibonacciNumber[i - 2];
    }

    return fibonacciNumber[number];
};

// Do not edit below this line
module.exports = fibonacci;
