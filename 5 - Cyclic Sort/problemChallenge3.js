/**
 * Find the First K Missing Positive Numbers (hard)
 * Given an unsorted array containing numbers and a number ‘k’, find the first ‘k’ missing positive numbers in the array.
 */

function findFirstKMissingPositiveNumbers(arr, k) {
  let i = 0;
  const n = arr.length;

  while (i < n) {
    const j = arr[i] - 1;

    // ignoring all the negative and out of bounds numbers, rest of the logic is same
    if (arr[i] > 0 && arr[i] <= n && arr[i] !== arr[j]) {
      [arr[i], arr[j]] = [arr[j], arr[i]];
    } else i++;
  }

  const kMissingNumbers = [];

  for (
    let missing = 0;
    missing < n + k && kMissingNumbers.length < k;
    missing++
  ) {
    if (arr[missing] !== missing + 1 && !arr.includes(missing + 1))
      kMissingNumbers.push(missing + 1);
  }

  return kMissingNumbers;
}

const testCases = [
  {array: [3, -1, 4, 5, 5], k: 3},
  {array: [2, 3, 4], k: 3},
  {array: [-2, -3, 4], k: 2},
];

testCases.forEach((test) => {
  console.log(
    'for given array: ',
    [...test.array],
    ' and K: ',
    test.k,
    '\nthe first K positive missing numbers are: ',
    findFirstKMissingPositiveNumbers(test.array, test.k),
    '\n'
  );
});
