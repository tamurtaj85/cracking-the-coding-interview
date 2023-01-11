/**
 * SAMLLEST SUB ARRAY OF GIVEN SUM
 */

/**
 *Given an array of positive numbers and a positive number ‘S’, find the length of the smallest contiguous subarray whose sum is greater than or equal to ‘S’. Return 0, if no such subarray exists.
 */

const arrays = [
  [2, 1, 5, 2, 3, 2],
  [2, 1, 5, 2, 8],
  [3, 4, 1, 1, 6],
];

const sums = [7, 7, 8];

function calculateSmallestSubArray(array, sumValue) {
  let windowSum = 0;
  let windowStart = 0;
  let smallestWindow = Infinity;

  for (let windowIndex = 0; windowIndex < array.length; windowIndex++) {
    windowSum += array[windowIndex];

    // We have to loop over again and again to get the smallest window size possible
    while (windowSum >= sumValue) {
      smallestWindow = Math.min(smallestWindow, windowIndex - windowStart + 1);
      windowSum -= array[windowStart];
      windowStart++;
    }
  }

  return smallestWindow === Infinity ? 0 : smallestWindow;
}

for (let index = 0; index < arrays.length; index++) {
  console.log(
    `Smallest Lenght of sub array for sum: ${sums[index]} is: `,
    calculateSmallestSubArray(arrays[index], sums[index])
  );
}
