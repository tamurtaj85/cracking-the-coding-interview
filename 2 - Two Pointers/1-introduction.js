/**
 * Given an array of sorted numbers and a target sum, find a pair in the array whose sum is equal to the given target.
 */

const array = [1, 2, 3, 4, 6];
const sum = 6;

function getPairElementsForSum(array, sum) {
  let startPointer = 0,
    endPointer = array.length - 1;

  for (let index = 0; index < array.length; index++) {
    const pointersSum = array[startPointer] + array[endPointer];

    if (pointersSum === sum) return [array[startPointer], array[endPointer]];

    if (pointersSum > sum) endPointer--;
    else startPointer++;
  }
}

console.log(
  `Pair from [${array}] whose sum is equal to ${sum} are: ${getPairElementsForSum(
    array,
    sum
  )} `
);
