/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function(s, t) {
    if (s.length === 0) return true;
    
    let sPosition = 0;
    
    for(let i = 0; i < t.length; i++) {
        if (s[sPosition] === t[i]) sPosition++;
    }
    
    return sPosition === s.length;
};