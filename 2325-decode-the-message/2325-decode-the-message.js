/**
 * @param {string} key
 * @param {string} message
 * @return {string}
 */
var decodeMessage = function(key, message) {
    let unique = "";
    for (let i = 0; i < key.length; i++) {
        if (key[i] === " ") continue;
        if (!unique.includes(key[i])) {
            unique += key[i]
        }
    }
    
    const alphabet = "abcdefghijklmnopqrstuvwxyz"
    
    let output = "";
    
    for (i = 0; i < message.length; i++) {
        if (message[i] == " ") {
            output += " ";
        } else {
            const index = unique.indexOf(message[i]);
            output += alphabet[index];
        }
    }
    return output;
};