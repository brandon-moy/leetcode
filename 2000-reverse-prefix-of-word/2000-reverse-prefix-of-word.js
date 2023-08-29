/**
 * @param {string} word
 * @param {character} ch
 * @return {string}
 */
var reversePrefix = function(word, ch) {
    for (let i = 0; i < word.length; i++) {
        if (word[i] === ch) {
            let prefix = word.slice(0, i + 1);
            let rest = word.slice(i + 1, word.length);
            let reversedPrefix = prefix.split('').reverse().join('');
            let output = reversedPrefix + rest;
            return output;
        }
    }
    
    return word;
};