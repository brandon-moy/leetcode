/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function(nums, target) {
    nums.sort((a,b) => a - b);
    let output = nums[0] + nums[1] + nums[2];
    
    for(let i = 0; i < nums.length; i++) {
        let start = i + 1;
        let end = nums.length - 1;
        while(start < end) {
            const sum = nums[i] + nums[start] + nums[end];
            if(sum > target) {
                end--;
            } else {
                start++;
            }
            if(Math.abs(target - sum) < Math.abs(target - output)) {
                output = sum;
            }
        }
    }
    return output;
};