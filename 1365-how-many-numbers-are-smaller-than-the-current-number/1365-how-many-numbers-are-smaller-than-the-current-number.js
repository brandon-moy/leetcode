/**
 * @param {number[]} nums
 * @return {number[]}
 */
var smallerNumbersThanCurrent = function(nums) {
    const output = [];
    for (let i = 0; i < nums.length; i++) {
        let current = nums[i];
        let count = 0;
        for (let j = 0; j < nums.length; j++) {
            if (j !== i) {
                if (nums[j] < current) {
                    count++;
                }
            }
        }
        output.push(count);
    }
    return output;
};