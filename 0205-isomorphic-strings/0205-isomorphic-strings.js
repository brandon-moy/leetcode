/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function(s, t) {
   let checkS = {};
   let checkT = {}
   for(let i = 0; i< s.length; i++){
    if(!checkS[s[i]] && !checkT[t[i]]){
      checkS[s[i]] = t[i];
      checkT[t[i]] = s[i];
    }else{
      if(checkS[s[i]] !== t[i]){
        return false
      }
    }
   }
    return true;
};