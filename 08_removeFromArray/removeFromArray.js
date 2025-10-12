// Implement a function that takes an array and some other arguments then removes the other arguments from that array:
// See if you can make use of some built-in array methods in this exercise
const removeFromArray = function(arr, ...values) {
    for (let value of values)
    {
        let valueIndex = arr.findIndex(element => element === value);

        while (valueIndex !== -1)
        {
            arr.splice(valueIndex, 1);
            
            valueIndex = arr.findIndex(element => element === value);
        }
    }

    return arr;
};

// Do not edit below this line
module.exports = removeFromArray;
