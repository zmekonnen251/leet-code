/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function(nums) {
    for(let i=0;i<nums.length;i++){
        const left = nums.slice(0,i).reduce((a,b)=>a+b,0);
        const right = nums.slice(i+1).reduce((a,b)=>a+b,0);
        if(left===right) return i;
    }
    return -1;
    
};