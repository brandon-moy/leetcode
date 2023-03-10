/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    const merge = nums1.concat(nums2);
    const sort = merge.sort((a, b) => a - b);
    if (sort.length % 2 !== 0) {
        const mid = (sort.length - 1) / 2;
        return sort[mid];
    } else {
        const midLow = Math.floor((sort.length - 1) / 2);
        const midHigh = Math.ceil((sort.length - 1) / 2);
        sum = sort[midLow] + sort[midHigh];
        return sum / 2;
    }
};