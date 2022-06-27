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
    
    for(let j=0;j<t.length;j++){
        const countChar = count(t,t[j]);
        if(hash[t[j]]===undefined) return false;
        if(hash[t[j]]===countChar) continue;
        return false;
    }
    
    return true;
};

const count=(s,c)=>{
    let i=0;
    let count = 0;
    while(i<s.length){
        if(s[i]===c) count++;
        i++;
    }
    return count;
}