/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let current = [];
    let longestLength = 0;
    for (let i = 0; i < s.length; i++) {
        const currentPosition = current.indexOf(s[i]);
        if (currentPosition !== -1) {
            current.splice(0, currentPosition + 1);
        }
        current.push(s[i]);

        longestLength = Math.max(
            longestLength,
            current.length
        );
    }

    return longestLength;
};