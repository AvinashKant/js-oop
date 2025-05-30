/**
 * 169. Majority Element
 * 
 * Given an array nums of size n, return the majority element.
 * The majority element is the element that appears more than ⌊n / 2⌋ times. 
 * You may assume that the majority element always exists in the array.
 */

var majorityElement = function (nums) {
    let freq = answer = 0;
    for (let i = 0; i < nums.length; i++) {
        if (freq == 0) {
            answer = nums[i];
        }
        if (answer == nums[i]) {
            freq++
        } else {
            freq--
        }
    }
    return answer
};