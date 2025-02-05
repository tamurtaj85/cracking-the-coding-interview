/**
 * Duplicate number but with constraints
 * Can we solve the above problem in O(1) space and without modifying the input array?
 */

function findDuplicateNumber(arr) {
  let slow = arr[0],
    fast = arr[arr[0]];

  // find whether they have a cycle or not
  while (slow !== fast) {
    slow = arr[slow];
    fast = arr[arr[fast]];
  }

  // get the cycle length
  let cycleLength = 1,
    current = arr[arr[slow]];

  while (current !== arr[slow]) {
    current = arr[current];
    cycleLength++;
  }

  // get the cycle start
  return getStart(arr, cycleLength);
}

function getStart(arr, cycleLength) {
  let fast = arr[0],
    slow = arr[0];

  // as with the 2 pointers problems, move the fast point n steps ahead
  while (cycleLength > 0) {
    fast = arr[fast];
    cycleLength--;
  }

  // then traverse them one by one until they meet at a common point, hence the start of cycle
  while (slow !== fast) {
    slow = arr[slow];
    fast = arr[fast];
  }

  return slow;
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
