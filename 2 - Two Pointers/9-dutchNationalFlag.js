/**
 * Dutch National Flag Problem (medium)
 */
/**
 * Given an array containing 0s, 1s and 2s, sort the array in-place. You should treat numbers of the array as objects, hence, we can’t count 0s, 1s, and 2s to recreate the array.

The flag of the Netherlands consists of three colors: red, white and blue; and since our input array also consists of three different numbers that is why it is called Dutch National Flag problem.
 */

const arrays = [
  [1, 0, 2, 1, 0],
  [2, 2, 0, 1, 2, 0],
];

function dutchFlagSort(array) {
  let low = 0,
    high = array.length - 1;

  for (let index = 0; index <= high; ) {
    const element = array[index];

    if (element === 0) {
      [array[low], array[index]] = [element, array[low]];
      index++;
      low++;
    } else if (element === 2) {
      [array[high], array[index]] = [element, array[high]];
      high--;
    } else index++;
  }

  return array;
}

for (let index = 0; index < arrays.length; index++) {
  console.log(
    `Dutch flag sorted array of [${arrays[index]}] is: `,
    dutchFlagSort(arrays[index])
  );
}
