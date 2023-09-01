/**
 * @param {string} s
 * @return {string}
 */
var sortString = function(s) {
    let len = s.length;
    let freq = new Array(26).fill(0);
     for (let i = 0; i < len; i++) {
         freq[s.charCodeAt(i) - 97]++;
     }
 
     const output = [];
     let count = 0;
     while (count < len) {
         for (let i = 0; i < 26; i++) {
             if (freq[i] > 0) {
                 output.push(String.fromCharCode(i + 97));
                 freq[i]--;
                 count++;
             }
         }
 
         for (let i = 25; i >= 0; i--) {
             if (freq[i] > 0) {
                output.push(String.fromCharCode(i + 97));
                 freq[i]--;
                 count++;
             }
         }
     }
     return output.join('');
};