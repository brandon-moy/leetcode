/**
 * @param {number} low
 * @param {number} high
 * @return {number}
 */
var countOdds = function(low, high) {
    let output = 0;
    for (let i = low; i <= high; i++) {
        if (i % 2) {
            output++;
        }
    }
    return output;
};