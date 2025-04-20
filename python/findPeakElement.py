class Solution:
    def findPeakElement(self, nums: list[int]) -> int:
        left = 0
        right = len(nums) - 1

        while left < right:
            mid = (left + right) // 2
            if nums[mid] > nums[mid + 1]:
                # If the middle element is greater than the next element,
                # a peak must exist in the left half (including mid).
                right = mid
            else:
                # If the middle element is smaller than or equal to the next element,
                # a peak must exist in the right half (excluding mid).
                left = mid + 1

        # At the end of the loop, left and right will converge to the index of a peak element.
        return left

solution = Solution()
nums1 = [1, 2, 3, 1]
print(solution.findPeakElement(nums1))  # Output: 2

nums2 = [1, 2, 1, 3, 5, 6, 4]
print(solution.findPeakElement(nums2))