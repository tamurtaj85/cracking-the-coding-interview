/**
 * Find the Duplicate Number (easy)
 *
 * We are given an unsorted array containing ‘n+1’ numbers taken from the range 1 to ‘n’. The array has only one duplicate but it can be repeated multiple times. Find that duplicate number without using any extra space. You are, however, allowed to modify the input array.
 */

function findDuplicateNumber(arr) {
  let i = 0;
  const n = arr.length;

  // double loop approach
  // while (i < n) {
  //   const j = arr[i] - 1;

  //   if (arr[i] !== arr[j]) {
  //     [arr[i], arr[j]] = [arr[j], arr[i]];
  //   } else i++;
  // }

  // for (let duplicateNumber = 0; duplicateNumber < n; duplicateNumber++) {
  //   if (arr[duplicateNumber] !== duplicateNumber + 1)
  //     return arr[duplicateNumber];
  // }

  // single loop approach
  while (i < n) {
    // if the next number is different keep going
    if (arr[i] !== i + 1) {
      const j = arr[i] - 1;

      // if elements are not in their correct place
      if (arr[i] !== arr[j]) {
        [arr[i], arr[j]] = [arr[j], arr[i]]; //swap
      } // we have found duplicate
      else return arr[i];
    } else i++; // increment
  }

  return -1;
}

const testCases = [
  [1, 4, 4, 3, 2],
  [2, 1, 3, 3, 5, 4],
  [2, 4, 1, 4, 4],
];

testCases.forEach((test) => {
  console.log(
    'for given sequence of numbers: ',
    [...test],
    '\nthe duplicate in them is: ',
    findDuplicateNumber(test),
    '\n'
  );
});
