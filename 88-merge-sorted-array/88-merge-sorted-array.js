/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
    let x = m-1;
    let y = n-1;
    for (let i=m+n-1;i>=0;i--){
        if(x<0 || nums2[y]>nums1[x]){
            nums1[i] = nums2[y];
            y--;
        }else{
             nums1[i] = nums1[x];
             x--;
        }
    }
    
    
    return nums1
};
    
     