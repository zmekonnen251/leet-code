/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    let max_so_far = nums[0];
    let max_i = nums[0];
    
    for(let i=1;i<nums.length;i++){
        max_i = Math.max( nums[i] , max_i + nums[i]);
        max_so_far = Math.max(max_so_far,max_i);
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