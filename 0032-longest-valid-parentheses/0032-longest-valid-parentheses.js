/**
 * @param {string} s
 * @return {number}
 */
var longestValidParentheses = function(s) {
    if (s.length <= 1) {
        return 0;
    }

    let openParentheses = [];
    let invalidParentheses = new Set();

    for (let i = 0; i < s.length; i++) {
        if (s[i] === '(') {
            openParentheses.push(i);
        } else {
            if (openParentheses.length) {
                openParentheses.pop();
            } else {
                invalidParentheses.add(i);
            }
        }
    }

    while (openParentheses.length) {
        invalidParentheses.add(openParentheses.pop());
    }

    if (!invalidParentheses.size) {
        return s.length;
    } else {
        let longestValidString = 0,
            currentStringLength = 0;

        for (let i = 0; i <= s.length; i++) {
            if (i < s.length && !invalidParentheses.has(i)) {
                currentStringLength++;
            }
            else {
                longestValidString = Math.max(
                    longestValidString,
                    currentStringLength
                );
                currentStringLength = 0;
            }
        }
        return longestValidString;
    }
};