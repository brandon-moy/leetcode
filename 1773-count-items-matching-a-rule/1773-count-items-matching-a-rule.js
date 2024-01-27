/**
 * @param {string[][]} items
 * @param {string} ruleKey
 * @param {string} ruleValue
 * @return {number}
 */
var countMatches = function(items, ruleKey, ruleValue) {
    let output = 0;
    const key = ruleKey === "type" ? 0 : ruleKey === "color" ? 1 : 2
    for (let i = 0; i < items.length; i++) {
        if (items[i][key] === ruleValue) {
            output ++;
        }
    }
    return output;
};