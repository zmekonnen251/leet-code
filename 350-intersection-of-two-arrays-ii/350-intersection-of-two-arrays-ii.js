/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function(nums1, nums2) {
    const result = [];
    const hash = {}
    
    // if(nums1.length>nums2.length){
     for(let i=0;i<nums1.length;i++){   
        if(hash[nums1[i]]===undefined) hash[nums1[i]] = 1;
        else hash[nums1[i]]++;
      }
    
     for(let j=0;j<nums2.length;j++){
         if(hash[nums2[j]]!==undefined && hash[nums2[j]]>0){
             result.push(nums2[j]);
             hash[nums2[j]]--;
         }
     }
    
    console.log(hash)
    return result;
};