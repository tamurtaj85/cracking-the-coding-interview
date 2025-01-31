/**
 * Triplets with Smaller Sum (medium)
 */
/**
 * Given an array arr of unsorted numbers and a target sum, count all triplets in it such that arr[i] + arr[j] + arr[k] < target where i, j, and k are three different indices. Write a function to return the count of such triplets.
 */

const arrays = [
  [-1, 0, 2, 3],
  [-1, 4, 2, 1, 3],
];
const targets = [3, 5];

function countTriplets(array, target) {
  let tripletsCount = 0;

  array.sort((a, b) => a - b);
  const arrLength = array.length;

  for (let index = 0; index < arrLength - 2; index++) {
    const element = array[index];

    let lPointer = index + 1,
      rPointer = arrLength - 1;

    const targetSum = target - element;

    while (lPointer < rPointer) {
      const sum = array[lPointer] + array[rPointer];

      if (sum < targetSum) {
        tripletsCount += rPointer - lPointer;
        lPointer++;
      } else rPointer--;
    }
  }

  return tripletsCount;
}

for (let index = 0; index < arrays.length; index++) {
  console.log(
    `Array triplet whose sum is less than target ${targets[index]} of [${arrays[index]}] are: `,
    countTriplets(arrays[index], targets[index])
  );
}
