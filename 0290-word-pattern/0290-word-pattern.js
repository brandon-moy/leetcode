/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
var wordPattern = function(pattern, s) {
    const a = pattern.split("");
    const b = s.split(" ");
    const pt = [];
    const x = {};
    if(a.length !== b.length) return false;
    for(let i = 0; i < a.length; i++) {
        if(!x[a[i]]) {
            x[a[i]] = b[i];
            if(pt.indexOf(b[i])!== -1) return false;
            pt.push(b[i]);
        } else if(x[a[i]]!==b[i]) return false;
    }
    return true
};