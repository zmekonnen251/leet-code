/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    const hashTable = {}
    
    for(let i=0;i<nums.length;i++){
        if(hashTable[nums[i]]===undefined) {
            hashTable[nums[i]]=i;
        }else if(i!==nums.length){
            return true
        }
        
    }
    return false;
    
    // for(let i=0;i<nums.length;i++){
    //     for(let j=0;j<nums.length && i!==j;j++){
    //         if(nums[i]===nums[j]){
    //             return true;
    //         }
    //     }
    // }
    // return false;
    
};