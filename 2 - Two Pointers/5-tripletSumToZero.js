/**
 * Triplet Sum to Zero (medium)
 */
/**
 * Given an array of unsorted numbers, find all unique triplets in it that add up to zero.
 */

const arrays = [
  [-3, 0, 1, 2, -1, 1, -2],
  [-5, 2, -1, -2, 3],
];

function extractTriplets(array) {
  const triplets = [];

  array.sort((a, b) => a - b);

  let rPointer = array.length - 1;

  for (let index = 0; index < array.length; index++) {
    const element = array[index];

    // doing this to avoid duplicate triplets, and it will only take effect when array sorted
    if (index > 0 && element === array[index - 1]) continue;

    searchPair(array, -element, index + 1, rPointer, triplets);
  }

  return triplets;
}

function searchPair(array, targetSum, lPointer, rPointer, triplets) {
  while (lPointer <= rPointer) {
    const sum = array[lPointer] + array[rPointer];

    if (sum === targetSum) {
      triplets.push([-targetSum, array[lPointer], array[rPointer]]);
      rPointer--, lPointer++;
    } else if (sum > targetSum) rPointer--;
    else lPointer++;
  }
}

for (let index = 0; index < arrays.length; index++) {
  console.log(
    `Triplets whose sum is equal to zero of [${arrays[index]}] are: `,
    extractTriplets(arrays[index])
  );
}
