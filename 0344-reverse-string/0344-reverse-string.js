/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function(s) {
    let end = s.length - 1;
    
    for(let i = 0; i < s.length/2; i++) {
        let start = s[i];
        s[i] = s[end];
        s[end] = start;
        end--;
    }
    
    return s;
};