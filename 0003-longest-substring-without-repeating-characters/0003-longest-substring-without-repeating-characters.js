/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let set = new Set();
    
    let left =0;
    let maxSize =0;
    if(s.length===1) return 1;
    if(s.length===0) return 0;
    
   
    
    for(let i=0;i<s.length;i++){
        while(set.has(s[i])){
            set.delete(s[left]);
            left++;
        }
        
        set.add(s[i]);
        maxSize = Math.max(maxSize,set.size);
    }
    return maxSize;
};