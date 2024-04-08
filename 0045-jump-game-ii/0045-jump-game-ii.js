/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function(nums) {
    let step = 0;
    let now = 0;
    let max = 0;

    for (let i = 0; i < nums.length - 1; i++) {
        max = Math.max(max, i + nums[i]);
        if (i === now) {
        step++;
        now = max;
        }
    }

    return step;
};