/**
 * @param {string} s
 * @return {string}
 */
var sortVowels = function(s) {
    const vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
    const sVowels = s.split("").filter(c => vowels.includes(c)).sort();
    
    const output = [];
    let i = 0;
    for (const c of s) {
        const letter = vowels.includes(c) ? sVowels[i++] :  c;
        output.push(letter);
    }
    return output.join("");
};