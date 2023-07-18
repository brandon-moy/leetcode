/**
 * @param {number} num
 * @return {number}
 */
var numberOfSteps = function(num) {
    let count = 0
    for (; num; count++) {
        if (num % 2) num--
        else num /= 2
    }
    return count;
};