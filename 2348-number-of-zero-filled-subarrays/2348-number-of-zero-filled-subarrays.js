/**
 * @param {number[]} nums
 * @return {number}
 */
var zeroFilledSubarray = function(nums) {
    let output = 0;
    let counter = 0;
    
    for (let i = 0; i < nums.length; i++) {
        if(nums[i] === 0) {
            counter++;
            if (i === nums.length -1) output += (counter * counter + counter) / 2
        } else {
            output += (counter * counter + counter) / 2;
            counter = 0;
        }
    }
    return output;
}
    
