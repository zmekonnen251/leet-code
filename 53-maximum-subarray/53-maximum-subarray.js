/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    let max_so_far = nums[0];
    let max_end_here = nums[0];
    
    for(let i=1;i<nums.length;i++){
        max_end_here = Math.max( nums[i] , max_end_here + nums[i]);
        max_so_far = Math.max(max_so_far,max_end_here);
    }
    
    return max_so_far;
};

// max_ending_here = arr[0]  //stores the sum of MSP till position 'i'
// max_so_far = arr[0]       //stores the sum of MSP

// for i = 1 to size_of_array
// {
//     max_ending_here = max(ar[i], max_ending_here + arr[i])
//     max_so_far = max(max_so_far, max_ending_here)
// }