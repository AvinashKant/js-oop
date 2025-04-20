from typing import List

class Solution:
    def removeDuplicates(self, nums: List[int]) -> int:
        if not nums:
            return 0

        # Pointer for the position to place the next unique element
        k = 1
        # Iterate through the array starting from the second element
        for i in range(1, len(nums)):
            # If the current element is different from the previous unique element
            if nums[i] != nums[k - 1]:
                # Place the current element at the k-th position
                nums[k] = nums[i]
                # Increment k to point to the next position for a unique element
                k += 1

        # k now represents the number of unique elements
        return k