/**
 * Squaring a Sorted Array (easy)
 */
/**
 * Given a sorted array, create a new array containing squares of all the number of the input array in the sorted order.
 */

const arrays = [
  [-2, -1, 0, 2, 3],
  [-3, -1, 0, 1, 2],
];

function calulateSquaresAndSort(array) {
  const arrLength = array.length;
  const squareArray = Array(arrLength).fill(0);

  let maxIndex = arrLength - 1,
    lPointer = 0,
    rPointer = arrLength - 1;

  while (lPointer < rPointer) {
    const rPointerSqr = array[rPointer] * array[rPointer];
    const lPointerSqr = array[lPointer] * array[lPointer];

    if (rPointerSqr > lPointerSqr) {
      squareArray[maxIndex] = rPointerSqr;
      rPointer--;
    } else {
      squareArray[maxIndex] = lPointerSqr;
      lPointer++;
    }

    maxIndex--;
  }

  return squareArray;
}

for (let index = 0; index < arrays.length; index++) {
  console.log(
    `Sorted square array of [${arrays[index]}] is: [${calulateSquaresAndSort(
      arrays[index]
    )}]`
  );
}
