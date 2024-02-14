/**
 * @param {string[]} words
 * @return {number}
 */
var maximumNumberOfStringPairs = function(words) {
    let doubleCount = 0;
    for (let i = 0; i < words.length; i++) {
        let current = words[i];
        for (let i = 0; i < words.length; i++) {
            if (current !== words[i]) {
                let reversed = words[i].split("").reverse().join("");
                if (current === reversed) {
                    doubleCount++;
                }
            }
        }
    }
    
    return doubleCount / 2;
};