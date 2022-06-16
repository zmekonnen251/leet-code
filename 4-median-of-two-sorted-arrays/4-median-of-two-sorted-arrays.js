/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {

    let mergedArr = [...nums1,...nums2];
  
    
    const sortedArr = mergedArr.sort((a,b)=>a-b)
    console.log(sortedArr)
    
    if(sortedArr.length%2===0){
        let mid = sortedArr.length/2;
        return (sortedArr[mid]+sortedArr[mid-1])/2;
    }else {
        let mid = Math.floor(sortedArr.length/2)
        return sortedArr[mid]
    }
    
};