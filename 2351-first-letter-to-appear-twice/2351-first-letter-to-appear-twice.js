/**
 * @param {string} s
 * @return {character}
 */
var repeatedCharacter = function(s) {
    const hold = new Set();
    for (let i = 0; i < s.length; i++) {
        if (hold.has(s[i])) {
            return s[i]
        } else {
            hold.add(s[i])
        }
    }
};