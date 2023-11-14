/**
 * @param {number[]} arr
 * @return {boolean}
 */
var uniqueOccurrences = function(arr) {
    const occurences = {};
    
    for(let num of arr) {
        if(!occurences[num]) {
            occurences[num] = 1;
        } else {
            occurences[num] = occurences[num] + 1;
        }
    }
    
    const valuesArr = Object.values(occurences).sort();
    let j = 0;
    for (let i = 1; i < valuesArr.length; i++) {
        if (valuesArr[j] === valuesArr[i]) {
            return false;
        }
        j++;
    }
    return true;
};