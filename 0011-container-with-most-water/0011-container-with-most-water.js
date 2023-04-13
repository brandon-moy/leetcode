/**
 * @param {number[]} height
 * @return {number}
 */
const maxArea = function(height) {
    let start = 0;
    let end = height.length - 1;
    let max = 0;
    let area = 0;
    
    while(start < end) {
        area = (end - start) * Math.min(height[start], height[end]);
        max = Math.max(area, max);
        
        if (height[start] < height[end]) {
            start++;
        } else {
            end--;
        }
    }
    
    return max;
};