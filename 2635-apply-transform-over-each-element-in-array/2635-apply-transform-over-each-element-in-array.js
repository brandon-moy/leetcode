/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var map = function(arr, fn) {
    const output = [];
    for(let i = 0; i < arr.length; i++) {
        const mapped = fn(arr[i], i);
        output.push(mapped);
    }
    return output;
};