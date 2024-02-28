/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
    const magArr = [...magazine];
    for (const char of ransomNote) {
        const index = magArr.indexOf(char);
        if (index < 0) return false;
        magArr.splice(index, 1);
    }
  return true;
};