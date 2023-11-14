/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[][]}
 */
var findDifference = function(nums1, nums2) {
    const num1diff = Array.from(new Set(nums1.filter((num) => !nums2.includes(num))));
    const num2diff = Array.from(new Set(nums2.filter((num) => !nums1.includes(num))));
    
    const output = [num1diff, num2diff];
    
    return output;  
    
};