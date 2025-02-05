/**
 * Find the Smallest Missing Positive Number (medium)
Given an unsorted array containing numbers, find the smallest missing positive number in it.
 */

function findSmallestMissingPositiveNumber(arr) {
  let i = 0;
  const n = arr.length;

  while (i < n) {
    const j = arr[i] - 1;

    // as problem states we have to look for positive numbers
    // also there is no specified range i.e. 1-n or 0-n, we can have any number range
    if (arr[i] > 0 && arr[i] <= n && arr[i] !== arr[j]) {
      [arr[i], arr[j]] = [arr[j], arr[i]];
    } else i++;
  }

  for (let missing = 0; missing < n; missing++) {
    if (arr[missing] !== missing + 1) return missing + 1;
  }

  return n + 1;
}

const testCases = [
  [-3, 1, 5, 4, 2],
  [3, -2, 0, 1, 2],
  [3, 2, 5, 1],
];

testCases.forEach((test) => {
  console.log(
    'for given unsorted array: ',
    [...test],
    '\nthe smallest missing positive number is following: ',
    findSmallestMissingPositiveNumber(test),
    '\n'
  );
});
