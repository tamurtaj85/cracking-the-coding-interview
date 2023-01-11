/**
 * MAXIMUM SUM SUBARRAY OF SIZE K
 */

/**
 * Given an array of positive numbers and a positive number ‘k’, find the maximum sum of any contiguous subarray of size ‘k’.
 */

const arr = [
  [2, 1, 5, 1, 3, 2],
  [2, 3, 4, 1, 5],
];
const k = [3, 2];

function calculateMaximumSumSubArray(windowSize, array) {
  const sumArray = [];

  let windowStart = 0;
  let windowSum = 0;
  let maxSum = 0;

  for (let windowIndex = 0; windowIndex < array.length; windowIndex++) {
    windowSum += array[windowIndex];

    if (windowIndex >= windowSize - 1) {
      // Approach 1
      // sumArray.push(windowSum);

      // Approach 2
      maxSum = Math.max(maxSum, windowSum);

      windowSum -= array[windowStart];
      windowStart++;
    }
  }

  // return Math.max(...sumArray);
  return maxSum;
}

console.log(
  `Maximum sum of array [${arr[0]}] with window size: ${k[0]} is:`,
  calculateMaximumSumSubArray(k[0], arr[0])
);
console.log(
  `Maximum sum of array [${arr[1]}] with window size: ${k[1]} is:`,
  calculateMaximumSumSubArray(k[1], arr[1])
);
