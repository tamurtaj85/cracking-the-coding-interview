/**
 * Find all Missing Numbers (easy)
 * We are given an unsorted array containing numbers taken from the range 1 to ‘n’. The array can have duplicates, which means some numbers will be missing. Find all those missing numbers.
 */

function findAllMissingNumbers(arr) {
  let i = 0;
  const n = arr.length;

  while (i < n) {
    // if array start from 1 then we have to do this arr[i]-1, else if it starts with 0 then j=arr[i] is enough
    const j = arr[i] - 1;

    // we don't need to do j<n because we are already doing arr[i]-1, so it will always be less than the length of array
    // if array contains 0 then we can't do arr[i]-1, so we have place a check for j<n
    if (arr[i] !== arr[j]) {
      [arr[i], arr[j]] = [arr[j], arr[i]];
    } else i++;
  }

  const missingNumbers = [];

  for (let missingNumber = 0; missingNumber < n; missingNumber++) {
    if (arr[missingNumber] != missingNumber + 1)
      missingNumbers.push(missingNumber + 1);
  }

  return missingNumbers;
}

const testCases = [
  [2, 3, 1, 8, 2, 3, 5, 1],
  [2, 4, 1, 2],
  [2, 3, 2, 1],
];

testCases.forEach((test) => {
  console.log(
    'for given sequence of numbers: ',
    [...test],
    '\nthe missing numbers are: ',
    findAllMissingNumbers(test),
    '\n'
  );
});
