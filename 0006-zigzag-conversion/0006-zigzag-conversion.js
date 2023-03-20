/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
    if (numRows === 1) {
        return s;
    }
    
    let current = 1;
    let direction = true;
    const zigzag = [];
    
    for(let i = 0; i < numRows; i++) {
        zigzag[i] = [];
    }
    
    for (let i = 0; i < s.length; i++) {
        zigzag[current - 1].push(s[i]);
        if (direction) {
            current++;
            if (current > numRows) {
                current = numRows - 1;
                direction = !direction;
            }
        } else {
            current--;
            if (current < 1) {
                current = 2;
                direction = !direction;
            }
        }
    }
    
    let output = '';
    
    for (let i = 0; i < numRows; i++) {
        output += zigzag[i].join('');
    }
    
    return output;
};