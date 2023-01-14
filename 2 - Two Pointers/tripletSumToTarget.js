/**
 * Triplet Sum Close to Target (medium)
 */
/**
 * Given an array of unsorted numbers and a target number, find a triplet in the array whose sum is as close to the target number as possible, return the sum of the triplet. If there are more than one such triplet, return the sum of the triplet with the smallest sum.
 */

const arrays = [
  [-2, 0, 1, 2],
  [-3, -1, 1, 2],
  [1, 0, 1, 1],
];

const targets = [2, 1, 100];

function trippletsCloseToTarget(array, target) {
  let smallestDiff = Infinity;
  array.sort((a, b) => a - b);
  const arrLength = array.length;

  for (let index = 0; index < arrLength; index++) {
    const element = array[index];
    let lPointer = index + 1,
      rPointer = arrLength - 1;

    while (lPointer < rPointer) {
      const targetDiff = target - element - array[lPointer] - array[rPointer];

      if (targetDiff === 0) return target;

      if (
        Math.abs(targetDiff) < Math.abs(smallestDiff) ||
        (Math.abs(targetDiff) === Math.abs(smallestDiff) &&
          targetDiff > smallestDiff)
      )
        smallestDiff = targetDiff;

      if (targetDiff > 0) lPointer++;
      else rPointer--;
    }
  }

  return target - smallestDiff;
}

for (let index = 0; index < arrays.length; index++) {
  console.log(
    `Array tripplet whose sum is equal to target ${targets[index]} of [${arrays[index]}] is: `,
    trippletsCloseToTarget(arrays[index], targets[index])
  );
}
