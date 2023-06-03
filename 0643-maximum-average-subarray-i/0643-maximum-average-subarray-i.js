/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findMaxAverage = function(nums, k) {
    let max = -Infinity;
    let current = 0;
    let start = 0;
    
    for (let i = 0; i < nums.length; i++) {
        current += nums[i];
        
        if (i - start === k - 1) {
            let avg = current / k;
            max = Math.max(max, avg);
            current -= nums[start];
            start++;
        }
    }
    
    return max;
};