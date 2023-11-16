/**
 * @param {number[]} target
 * @param {number} n
 * @return {string[]}
 */
var buildArray = function(target, n) {
    let result = [];
    let i = 0;
    let num = 1;
    while (num <= n) {
        if (i == target.length) {
           return result;
        }
        else if (target[i] == num) {
            result.push("Push");
            i++;
        } else {
            result.push("Push");
            result.push("Pop");
        }
        num++;
    }
    return result;
};