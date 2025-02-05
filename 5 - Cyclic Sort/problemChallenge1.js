/**
 * Find the Corrupt Pair (easy)
We are given an unsorted array containing ‘n’ numbers taken from the range 1 to ‘n’. The array originally contained all the numbers from 1 to ‘n’, but due to a data error, one of the numbers got duplicated which also resulted in one number going missing. Find both these numbers.
 */

function findTheCorruptPair(arr) {
  let i = 0;
  const n = arr.length;

  while (i < n) {
    const j = arr[i] - 1;

    if (arr[i] !== arr[j]) {
      [arr[i], arr[j]] = [arr[j], arr[i]];
    } else i++;
  }

  for (let corrupt = 0; corrupt < n; corrupt++) {
    if (arr[corrupt] !== corrupt + 1)
      return {duplicate: arr[corrupt], missing: corrupt + 1};
  }

  return {duplicate: -1, missing: -1};
}

const testCases = [
  [3, 1, 2, 5, 2],
  [3, 1, 2, 3, 6, 4],
];

testCases.forEach((test) => {
  console.log(
    'for given series of data: ',
    [...test],
    '\nthe faulty pair is the following: ',
    findTheCorruptPair(test),
    '\n'
  );
});
