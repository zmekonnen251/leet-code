class Solution:
    def missingNumber(self, nums: List[int]) -> int:
        min = nums[0];
        max = nums[0];
        
        for i in nums:
            if(min>i):
                min = i
            if(max<i):
                max = i
                
        for i in range(0,len(nums)+1):
            if(i not in nums):
                return i
           
        