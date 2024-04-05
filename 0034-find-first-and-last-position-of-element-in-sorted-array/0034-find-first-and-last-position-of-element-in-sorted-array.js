/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
    const left = nums.indexOf(target);
    if (left === -1) return [-1, -1];
    let right = 0;
    let index = nums.length - 1;
    while (index > 0) {
        if (nums[index] === target) {
            right = index;
            break;
        }
        index--;
    }
    
    return [left, right];
};