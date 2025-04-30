/**
 * Write a program to find the maximum and minimum values in an array of integers.
 */

function findMinMax(arr) {
    if (arr.length === 0) {
      throw new Error("Array cannot be empty");
    }
  
    let min = arr[0];
    let max = arr[0];
  
    for (let i = 1; i < arr.length; i++) {
      if (arr[i] < min) {
        min = arr[i];
      } else if (arr[i] > max) {
        max = arr[i];
      }
    }
  
    return { min, max };
  }
  
  // Example usage
  const arr = [10, 2, 34, 4, -5, 22, 0];
  const result = findMinMax(arr);
  console.log(`Minimum: ${result.min}, Maximum: ${result.max}`);