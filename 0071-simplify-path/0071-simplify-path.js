/**
 * @param {string} path
 * @return {string}
 */
var simplifyPath = function(path) {
    const outputPath = [];
    for (const s of path.split('/')) {
        if (s === '' || s === '.') {
            continue;
        }
        if (s === '..') {
            if (outputPath.length) {
                outputPath.pop();
            }
        } else {
            outputPath.push(s);
        }
    }
    return '/' + outputPath.join('/');
};