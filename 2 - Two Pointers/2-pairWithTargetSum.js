/**
 * Pair for given sum in array (easy)
 */

/**
 * Given an array of sorted numbers and a target sum, find a pair in the array whose sum is equal to the given target.
 */

const arrays = [
  [1, 2, 3, 4, 6],
  [2, 5, 9, 11],
];
const targets = [6, 11];

function getPairElementsForSum(array, sum) {
  let startPointer = 0,
    endPointer = array.length - 1;

  while (startPointer < endPointer) {
    const pointersSum = array[startPointer] + array[endPointer];

    if (pointersSum === sum) return [array[startPointer], array[endPointer]];

    if (pointersSum > sum) endPointer--;
    else startPointer++;
  }
}

for (let index = 0; index < arrays.length; index++) {
  console.log(
    `Pair from [${arrays[index]}] whose sum is equal to ${
      targets[index]
    } are: ${getPairElementsForSum(arrays[index], targets[index])} `
  );
}
