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

function extractTripplets(array) {
  const tripplets = [];
  array.sort((a, b) => a - b);

  let rPointer = array.length - 1;

  for (let index = 0; index < array.length; index++) {
    const element = array[index];

    // if (index > 0 && element === array[index - 1]) continue;

    searchPair(array, -element, index + 1, rPointer, tripplets);
  }

  return tripplets;
}

function searchPair(array, targetSum, lPointer, rPointer, tripplets) {
  while (lPointer <= rPointer) {
    const sum = array[lPointer] + array[rPointer];

    if (sum === targetSum) {
      tripplets.push([-targetSum, array[lPointer], array[rPointer]]);
      rPointer--, lPointer++;
    } else if (sum > targetSum) rPointer--;
    else lPointer++;
  }
}

for (let index = 0; index < arrays.length; index++) {
  console.log(
    `Tripplets whose sum is equal to zero of [${arrays[index]}] are: `,
    extractTripplets(arrays[index])
  );
}
