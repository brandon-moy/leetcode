/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
var kidsWithCandies = function(candies, extraCandies) {
    const output = [];
    const max = Math.max.apply(null, candies)
    for (let i = 0; i < candies.length; i++) {
        output.push(candies[i] + extraCandies >= max);
    }
    return output;
};