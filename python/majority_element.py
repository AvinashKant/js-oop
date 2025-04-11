def majority_element(nums: list[int]) -> int:
    """
    Given an array nums of size n, return the majority element.
    The majority element is the element that appears more than ⌊n / 2⌋ times.
    You may assume that the majority element always exists in the array.
    """
    n = len(nums)
    counts = {}
    for num in nums:
        counts[num] = counts.get(num, 0) + 1
        if counts[num] > n // 2:
            return num

# Example Usage:
nums1 = [3, 2, 3]
print(f"Majority element in {nums1}: {majority_element(nums1)}")  # Output: 3

nums2 = [2, 2, 1, 1, 1, 2, 2]
print(f"Majority element in {nums2}: {majority_element(nums2)}")  # Output: 2