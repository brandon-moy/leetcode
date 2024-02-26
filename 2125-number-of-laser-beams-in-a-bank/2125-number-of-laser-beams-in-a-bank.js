/**
 * @param {string[]} bank
 * @return {number}
 */
var numberOfBeams = function(bank) {
    const lasers = [];
    for (let i = 0; i < bank.length; i++) {
        let laserCount = bank[i].split('').filter(num => num === '1').length;
        if (laserCount !== 0) lasers.push(laserCount);
    }
    
    let beams = 0;
    for (let i = 0; i < lasers.length - 1; i++) {
        beams += lasers[i] * lasers[i + 1];
    }
    
    return beams;
};