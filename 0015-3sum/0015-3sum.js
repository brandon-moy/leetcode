/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    nums.sort((a,b) => a - b);
    const output = [];
    for(let i=0; i < nums.length - 2; i++){
        if(nums[i] != nums[i-1]){ 
          let left = i + 1;
          let right = nums.length - 1;

            while (left < right){
                const currentSum = nums[i] + nums[left] + nums[right];
                if (currentSum === 0){
                    output.push([nums[i], nums[left], nums[right]]);
                    while(nums[left] == nums[left + 1]) left++
                    while(nums[right] == nums[right - 1]) right--;
                    left++;
                    right--;
                } else if(currentSum < 0) {
                    left ++
                } else if(currentSum > 0){
                    right --
                }
            }
        }
    }
    return output
};