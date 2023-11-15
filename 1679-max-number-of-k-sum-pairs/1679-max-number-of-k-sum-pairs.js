/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maxOperations = function(nums, k) {
    let count = new Map();
        for (let num of nums) {
            count.set(num, count.has(num) ? count.get(num) + 1 : 1);
        };
        let ans = 0;
        for (let [num, _] of count.entries()) {
            if (count.has(k - num)) {
                ans += Math.min(count.get(num), count.get(k - num));
            }
        }
        return Math.floor(ans / 2);
};