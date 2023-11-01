/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function(s, p) {
return recursiveIsMatch(0, 0, s, p);
}

function recursiveIsMatch(i, j, s, p) {
    const inputStringLength = s.length;
    const patternLength = p.length;

    if (j == patternLength) {
        return i == inputStringLength;
    }

    if (j + 1 < patternLength && p.charAt(j + 1) == '*') {
        if (recursiveIsMatch(i, j + 2, s, p)) return true;
        while (
            i < inputStringLength &&
            (p.charAt(j) == '.' || s.charAt(i) == p.charAt(j))
        ) {
            if (recursiveIsMatch(++i, j + 2, s, p)) return true;
        }
    }
    else if (
        i < inputStringLength &&
        (p.charAt(j) == '.' || s.charAt(i) == p.charAt(j))
    ) {
        return recursiveIsMatch(i + 1, j + 1, s, p);
    }

    return false;
}