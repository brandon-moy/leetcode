/**
 * @param {string} address
 * @return {string}
 */
var defangIPaddr = function(address) {
    let defanged = '';
    for (let char in address) {
        if (address[char] !== '.') {
            defanged += address[char];
        } else {
            defanged = defanged + '[' + address[char] + ']';
        }
    }
    return defanged;
};