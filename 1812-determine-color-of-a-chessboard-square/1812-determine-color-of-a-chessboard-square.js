/**
 * @param {string} coordinates
 * @return {boolean}
 */
var squareIsWhite = function(coordinates) {
    const set1 = ['a', 'c', 'e', 'g'];
    const set2 = ['b', 'd', 'f', 'h'];
    
    if (set1.includes(coordinates[0])) {
        if (+coordinates[1] % 2) {
            return false;
        } else {
            return true;
        }
    } else {    
        if (+coordinates[1] % 2) {
            return true;
        } else {
            return false;
        }
    }
};