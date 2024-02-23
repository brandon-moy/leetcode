/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProductDifference = function(nums) {
    nums.sort((a, b) => a - b);
    
    const end = nums.length;
    
    const a = nums[end - 1];
    const b = nums[end - 2];
    
    const c = nums[0];
    const d = nums[1];
    
    return (a * b) - (c * d);
};