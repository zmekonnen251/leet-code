/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function(nums) {
    const result = [];
    
    for(let i=0;i<nums.length;i++){
        result.push(nums.slice(0,i+1).reduce((a,b)=>a+b,0))
    }
    
    return result;
};
