/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
    let output = 0;
    for (let i = 0; i < nums.length; i++) {
        if (i < nums.length - 1 && nums[i] == nums[i + 1]) {
            continue;
        }
        nums[output] = nums[i];
        output++;
    }
    return output;
};