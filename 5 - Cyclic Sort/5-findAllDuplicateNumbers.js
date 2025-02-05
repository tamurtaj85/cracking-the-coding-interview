/**
 * Find all Duplicate Numbers (easy)
 * We are given an unsorted array containing ‘n’ numbers taken from the range 1 to ‘n’. The array has some duplicates, find all the duplicate numbers without using any extra space.
 */

function findAllDuplicates(arr) {
  let i = 0;
  const n = arr.length,
    duplicates = [];

  while (i < n) {
    const j = arr[i] - 1;

    if (arr[i] !== arr[j]) {
      [arr[i], arr[j]] = [arr[j], arr[i]];
    } else i++;
  }

  for (let duplicate = 0; duplicate < n; duplicate++) {
    if (arr[duplicate] !== duplicate + 1) duplicates.push(arr[duplicate]);
  }

  return duplicates;
}

const testCases = [
  [3, 4, 4, 5, 5],
  [5, 4, 7, 2, 3, 5, 3],
];

testCases.forEach((test) => {
  console.log(
    'for given sequence: ',
    [...test],
    '\nthe duplicates are: ',
    findAllDuplicates(test),
    '\n'
  );
});
