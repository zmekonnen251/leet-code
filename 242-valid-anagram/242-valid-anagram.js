/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    if(s.length!==t.length) return false;
    const hash = {};
 
    for(let i=0;i<s.length;i++){
        
        if(hash[s[i]]===undefined) hash[s[i]] = 1;
        else if(hash[s[i]]!==undefined) hash[s[i]]++;
    }
    const split_t = t.split('');
    for(let j=0;j<split_t.length;j++){
        if(hash[split_t[j]]===undefined) return false;
        if(hash[split_t[j]]===1) delete hash[split_t[j]];
        if(hash[split_t[j]]!==1) hash[split_t[j]]--;
    }
    
    const hash_k = Object.values(hash);
    console.log(hash_k)
    for(let k=0;k<hash_k.length;k++){
        if(isNaN(hash_k[k])) continue;
        return false;
    }
    
    return true;
};
