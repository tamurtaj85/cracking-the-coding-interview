/**
 * Quadruple Sum to Target (medium)
 */
/**
 * Given an array of unsorted numbers and a target number, find all unique quadruplets in it, whose sum is equal to the target number.
 */

const arrays = [
  [4, 1, 2, -1, 1, -3],
  [2, 0, -1, 1, -2, 2],
];

const targets = [1, 2];

function findQuadruplets(array, target) {
  const quadruplets = [];
  array.sort((a, b) => a - b);
  const n = array.length;

  for (let indexI = 0; indexI < n - 3; indexI++) {
    const elementW = array[indexI];

    for (let indexJ = indexI + 1; indexJ < n - 2; indexJ++) {
      const elementX = array[indexJ];

      let left = indexJ + 1,
        right = n - 1;

      while (left <= right) {
        // Equation sum = W+X+Y+Z
        const sum = elementW + elementX + array[left] + array[right];

        if (sum === target) {
          quadruplets.push([elementW, elementX, array[left], array[right]]);
          left++, right--;
        } else if (sum > target) right--;
        else left++;
      }
    }
  }

  return quadruplets;
}

for (let index = 0; index < arrays.length; index++) {
  console.log(
    `Quadruplets of [${arrays[index]}] with given target ${targets[index]} are: `,
    findQuadruplets(arrays[index], targets[index])
  );
}
