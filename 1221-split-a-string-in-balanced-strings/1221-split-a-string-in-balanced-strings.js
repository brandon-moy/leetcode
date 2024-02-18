/**
 * @param {string} s
 * @return {number}
 */
var balancedStringSplit = function(s) {
    let output = 0;
    let l = 0;
    for (let char of s) {
        if (char == 'L') {
            l++;
        } else {
            l--;
        }
        if (l == 0) {
            output++;
        }
    }
    return output;
};