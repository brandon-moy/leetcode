/**
 * @param {string[]} sentences
 * @return {number}
 */
var mostWordsFound = function(sentences) {
    let output = 0;
    for (let i = 0; i < sentences.length; i++) {
        const split = sentences[i].split(' ');
        if (split.length > output) output = split.length;
    }
    return output;
};