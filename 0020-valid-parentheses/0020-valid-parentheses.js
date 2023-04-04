/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    const sets = { "(": ")", "{": "}", "[": "]" }
    const hold = []
    for (let i of s) {
        if (sets[i]) {
            hold.push(sets[i])
        } else if (hold.length > 0 && hold[hold.length - 1] === i) {
            hold.pop()
        } else {
            return false;
        }
    }
    return hold.length === 0;
};