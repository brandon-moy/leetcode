/**
 * @param {number[]} nums
 * @param {number} key
 * @return {number}
 */
var mostFrequent = function(nums, key) {
    let counter = {};
    let mostFrequent;
    let temp = 0;
    for(let index in nums){
        if(nums[index -1] && nums[index-1] == key){
            counter[nums[index]] = (counter[nums[index]] || 0) + 1;
        }
    }
    for(let i in counter){
      if(temp < counter[i]){
        temp = counter[i];
        mostFrequent = i;
      }
  }
  return mostFrequent
};