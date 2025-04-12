def find_median_sorted_arrays(nums1: list[int], nums2: list[int]) -> float:
    """
    Given two sorted arrays nums1 and nums2 of size m and n respectively, return the median of the two sorted arrays.
    The overall run time complexity should be O(log (m+n)).
    Example 1:
        Input: nums1 = [1,3], nums2 = [2]
        Output: 2.00000
        Explanation: merged array = [1,2,3] and median is 2.
    Example 2:
        Input: nums1 = [1,2], nums2 = [3,4]
        Output: 2.50000
        Explanation: merged array = [1,2,3,4] and median is (2 + 3) / 2 = 2.5.
    """
    m, n = len(nums1), len(nums2)
    if m > n:
        nums1, nums2, m, n = nums2, nums1, n, m  # Ensure nums1 is the shorter array

    low, high = 0, m
    while low <= high:
        partition_x = (low + high) // 2
        partition_y = ((m + n + 1) // 2) - partition_x

        max_left_x = nums1[partition_x - 1] if partition_x > 0 else float('-inf')
        min_right_x = nums1[partition_x] if partition_x < m else float('inf')

        max_left_y = nums2[partition_y - 1] if partition_y > 0 else float('-inf')
        min_right_y = nums2[partition_y] if partition_y < n else float('inf')

        if max_left_x <= min_right_y and max_left_y <= min_right_x:
            # We have found the correct partition
            if (m + n) % 2 == 0:
                return (max(max_left_x, max_left_y) + min(min_right_x, min_right_y)) / 2
            else:
                return max(max_left_x, max_left_y)
        elif max_left_x > min_right_y:
            high = partition_x - 1
        else:
            low = partition_x + 1

    raise ValueError("Input arrays are not sorted.")

# Example Usage:
nums1_1 = [1, 3]
nums2_1 = [2]
print(f"Median of {nums1_1} and {nums2_1}: {find_median_sorted_arrays(nums1_1, nums2_1)}")  # Output: 2.0

nums1_2 = [1, 2]
nums2_2 = [3, 4]
print(f"Median of {nums1_2} and {nums2_2}: {find_median_sorted_arrays(nums1_2, nums2_2)}")  # Output: 2.5