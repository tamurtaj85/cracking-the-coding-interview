/**
 * Find the Missing Number (easy)
 *
 * We are given an array containing ‘n’ distinct numbers taken from the range 0 to ‘n’. Since the array has only ‘n’ numbers out of the total ‘n+1’ numbers, find the missing number.
 */

function findMissingNumber(arr) {
  let i = 0;
  const n = arr.length;

  while (i < n) {
    const j = arr[i];

    // console.log({i, ai: arr[i], j, aj: arr[j]});

    if (arr[i] < n && arr[i] !== arr[j]) {
      [arr[i], arr[j]] = [arr[j], arr[i]];
    } else i++;

    // console.log({arr});
  }

  for (let missingNumber = 0; missingNumber < n; missingNumber++) {
    if (arr[missingNumber] !== missingNumber) return missingNumber;
  }

  return n;
}

const testCases = [
  [4, 0, 3, 1],
  [8, 3, 5, 2, 4, 6, 0, 1],
];

testCases.forEach((test) => {
  console.log(
    'for given distinct sequence: ',
    [...test],
    '\nthe missing number is: ',
    findMissingNumber(test),
    '\n'
  );
});
