/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function(nums) {
    const output = [];
    for (let i = 0; i < nums.length; i++) {
        if (i === 0) {
            output.push(nums[i]);
        } else {
            let sum = nums[0]
            for(let j = 1; j < i + 1; j++) {
                sum += nums[j];
            }
            output.push(sum);
        }
    }
    return output;
};