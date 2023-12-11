/**
 * @param {string} sentence
 * @return {string}
 */
var toGoatLatin = function(sentence) {
    const sentenceArr = sentence.split(" ")
    let suffix = "maa"
    let output = []
    const vowels = ["a", "e", "i", "o", "u"]
    
    for (let i = 0; i < sentenceArr.length; i++) {
        let newWord = ''
        if (vowels.includes(sentenceArr[i][0].toLowerCase())) {
            newWord = sentenceArr[i] + suffix
        } else {
            newWord = sentenceArr[i].split(' ').map(e=>  e.substr(1,) +e[0] + suffix).join('')
        }
        output.push(newWord)
        suffix += 'a'
    }
    return output.join(' ')
};