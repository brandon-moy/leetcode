/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var truncateSentence = function(s, k) {
    const sentArray = s.split(' ');
    sentArray.length = k;
    return sentArray.join(' ');
};