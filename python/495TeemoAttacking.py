# LeetCode Problem 495: Teemo Attacking
# https://leetcode.com/problems/teemo-attacking/
def findPoisonedDuration(timeSeries, duration):
    if not timeSeries:
        return 0
    
    total = 0
    for i in range(len(timeSeries) - 1):
        total += min(duration, timeSeries[i+1] - timeSeries[i])
    
    # Add full duration for the last attack
    total += duration
    return total

# Example usage:

print(findPoisonedDuration([1, 4], 2))  # Output: 4
print(findPoisonedDuration([1, 2], 2))  # Output: 3


