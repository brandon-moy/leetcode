/**
 * @param {number[]} prices
 * @return {number[]}
 */
var finalPrices = function(prices) {
    const length = prices.length;
    const output = new Array(length);
    for (let i = 0; i < length; i++) {
        output[i] = prices[i];
        for (let j = i + 1; j < length; j++) {
            if (prices[j] <= prices[i]) {
                output[i] -= prices[j];
                break;
            }
        }
    }
    return output;
};