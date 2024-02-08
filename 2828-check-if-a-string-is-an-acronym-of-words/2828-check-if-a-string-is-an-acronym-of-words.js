/**
 * @param {string[]} words
 * @param {string} s
 * @return {boolean}
 */
var isAcronym = function(words, s) {
    if (words.length !== s.length) return false;
    let check = ""
    for (let i = 0; i < words.length; i++) {
        check += words[i][0]
    }
    if (check === s) return true;
    return false;
};