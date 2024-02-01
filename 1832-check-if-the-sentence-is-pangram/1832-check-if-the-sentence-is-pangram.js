/**
 * @param {string} sentence
 * @return {boolean}
 */
var checkIfPangram = function(sentence) {
    const alphabet = Array. from(Array(26), (e, i) => String. fromCharCode(i + 97));
    if (sentence.length < 26) return false;
    for (let i = 0; i < sentence.length; i++) {
        const letter = sentence[i]
        if (alphabet.includes(letter)) {
            const index = alphabet.indexOf(letter)
            alphabet.splice(index, 1)
        }
    }
    if (alphabet.length === 0) return true;
    return false;
};