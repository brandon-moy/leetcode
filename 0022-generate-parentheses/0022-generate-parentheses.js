/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
    const result = [];
    generate(result, "", 0, 0, n);
    return result;
};

function generate(result, s, open, close, n) {
    if (open === n && close === n) {
        result.push(s);
        return;
    }

    if (open < n) {
        generate(result, s + "(", open + 1, close, n);
    }
    
    if (close < open) {
        generate(result, s + ")", open, close + 1, n);
    }
}