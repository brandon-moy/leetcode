/**
 * @param {string} firstWord
 * @param {string} secondWord
 * @param {string} targetWord
 * @return {boolean}
 */
var isSumEqual = function(firstWord, secondWord, targetWord) {
    function wordValue(word) {
        let res = 0;
        for (let letter of word) {
            res = res * 10 + (letter.charCodeAt() - 'a'.charCodeAt());
        }
        return res;
    }
    return wordValue(firstWord) + wordValue(secondWord) === wordValue(targetWord);
};