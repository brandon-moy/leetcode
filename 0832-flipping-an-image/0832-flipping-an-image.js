/**
 * @param {number[][]} image
 * @return {number[][]}
 */
var flipAndInvertImage = function(image) {
    const output = [];
    for (let i = 0; i < image.length; i++) {
        const reversed = image[i].reverse();
        const invert = [];
        for (let j = 0; j < reversed.length; j++) {
            if (reversed[j]) {
                invert.push(0)
            } else {
                invert.push(1)
            }
        }
        output.push(invert)
    }
    return output;
};