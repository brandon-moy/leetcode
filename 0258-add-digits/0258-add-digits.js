/**
 * @param {number} num
 * @return {number}
 */
var addDigits = function(num) {
    const stringNum = num.toString();
    let firstSum = 0;
    for (let i = 0; i < stringNum.length; i++) {
        firstSum += +stringNum[i];
    }
    
    let firstSumString = firstSum.toString();
    if (firstSumString.length === 1) {
        return firstSum;
    } else {
        let secondSum = 0;
        while (firstSumString.length > 1) {
            secondSum = +firstSumString[0] + +firstSumString[1];
            if (secondSum.toString().length > 1) {
                firstSumString = secondSum.toString();
                secondSum = 0;
            } else {
                return secondSum;
            }
        }
    }
    
};