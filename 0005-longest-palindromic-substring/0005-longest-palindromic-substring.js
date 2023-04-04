/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
  let longest = '';

    var getLongestPalindrome = function (left, right) {
        while (
            left >= 0 &&
            right < s.length &&
            s[left] === s[right]
        ) {
            left--;
            right++;
        }

        if (right - left > longest.length) {
            longest = s.slice(left + 1, right);
        }
    };

    for (let i = 0; i < s.length; i++) {
        getLongestPalindrome(i, i + 1);

        getLongestPalindrome(i, i);

        if ((s.length - i) * 2 < longest.length) {
            break;
        }
    }

    return longest;  
};