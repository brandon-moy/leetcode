/**
 * @param {string} s
 * @param {character} letter
 * @return {number}
 */
var percentageLetter = function(s, letter) {
    let count = 0;
    const length = s.length;
    for (let i = 0; i < s.length; i++) {
        if (s[i] == letter) count++;
    }
    
    const percentage = Math.floor((count / length) * 100)
    return percentage;
};