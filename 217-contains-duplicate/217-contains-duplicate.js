/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    hashTable = {}
    
    for(let i=0;i<nums.length;i++){
        if(hashTable[nums[i]]===undefined) {
            hashTable[nums[i]]=i;
        }else if(hashTable[nums[i]]!==undefined){
            return true;
        }
        
    }
    return false;
};