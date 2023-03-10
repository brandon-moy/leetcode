/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    const split = s.split(' ');
    let end = split.length - 1;
    if (split[end] === '') {
      while (split[end] === '') {
        end--;
        }   
    }
    return split[end].length;
};