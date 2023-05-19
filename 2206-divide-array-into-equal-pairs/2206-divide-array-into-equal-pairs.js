/**
 * @param {number[]} nums
 * @return {boolean}
 */
var divideArray = function(nums) {
    const test = [];
    for (let i = 0; i < nums.length; i++) {
        if (!test.includes(nums[i])) {
            test.push(nums[i])
        } else {
            const start = test.findIndex((number) => number === nums[i]);
            test.splice(start, 1);
        }
    }
        if (!test.length) return true;
        return false
};
