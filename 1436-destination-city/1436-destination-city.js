/**
 * @param {string[][]} paths
 * @return {string}
 */
var destCity = function(paths) {
    const departure = new Set();
    for (path of paths) {
        departure.add(path[0]);
    }
    
    for (path of paths) {
        if (!departure.has(path[1])) {
            return path[1];
        }
    }
};