/**
 * @param {number[]} nums
 * @return {number}
 */
var differenceOfSum = function(nums) {
    let output = 0;

    nums.forEach((value) => {
        output += value;
        while (value !== 0) {
            output -= value % 10;
            value = Math.floor(value / 10);
        }
    });
    return output;
};