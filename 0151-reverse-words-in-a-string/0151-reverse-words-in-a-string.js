/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    const wordsArr = s.split(' ')
    const noSpaces = wordsArr.filter((word) => word !== '');
    return noSpaces.reverse().join(' ');
}