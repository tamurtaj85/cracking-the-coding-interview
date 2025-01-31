/**
 * Longest Subarray with Ones after Replacement (hard)
 */

/**
 * Given an array containing 0s and 1s, if you are allowed to replace no more than ‘k’ 0s with 1s, find the length of the longest contiguous subarray having all 1s.
 */

const arrays = [
  [0, 1, 1, 0, 0, 0, 1, 1, 0, 1, 1],
  [0, 1, 0, 0, 1, 1, 0, 1, 1, 0, 0, 1, 1],
];

const ks = [2, 3];

function longestSubArrayOfOnes(array, k) {
  const frequencyMap = {};

  let windowStart = 0,
    longestSubArr = 0;

  for (let windowIndex = 0; windowIndex < array.length; windowIndex++) {
    const element = array[windowIndex];

    if (element in frequencyMap) {
      frequencyMap[element] += 1;
    } else frequencyMap[element] = 1;

    if (windowIndex - windowStart + 1 - frequencyMap[element] > k) {
      const elementToBePopped = array[windowStart];
      frequencyMap[elementToBePopped] -= 1;
      windowStart++;
    }

    longestSubArr = Math.max(longestSubArr, windowIndex - windowStart + 1);
  }

  return longestSubArr;
}

for (let index = 0; index < arrays.length; index++) {
  console.log(
    `Longest subarray for [${arrays[index]}] after ${ks[index]} replacements is: `,
    longestSubArrayOfOnes(arrays[index], ks[index])
  );
}
