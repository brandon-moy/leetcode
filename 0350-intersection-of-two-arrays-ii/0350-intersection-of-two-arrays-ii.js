/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function(nums1, nums2) {
    const output = [];
    for (var i = 0; i < nums2.length; i++){
        if (nums1.includes(nums2[i])){
            output.push(nums2[i]);
            nums1.splice(nums1.indexOf(nums2[i]), 1);
        }
    }
    
    return output;
};