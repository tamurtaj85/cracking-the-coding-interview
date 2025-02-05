/**
 * Cyclic Sort (easy)
 * We are given an array containing ‘n’ objects. Each object, when created, was assigned a unique number from 1 to ‘n’ based on their creation sequence. This means that the object with sequence number ‘3’ was created just before the object with sequence number ‘4’.

Write a function to sort the objects in-place on their creation sequence number in 
O(n) and without any extra space. For simplicity, let’s assume we are passed an integer array containing only the sequence numbers, though each number is actually an object.
 */

function cyclicSort(arr) {
  let i = 0;

  while (i < arr.length) {
    // this will give the correct index of current object/sequence number under i
    const j = arr[i] - 1;

    // if the object/sequence number is not on the correct index, swap
    if (arr[i] !== arr[j]) {
      [arr[i], arr[j]] = [arr[j], arr[i]];
    } else {
      // it will only increment when number is on its actual index
      i++;
    }
  }

  return arr;
}

const testCases = [
  [3, 1, 5, 4, 2],
  [2, 6, 4, 3, 1, 5],
  [1, 5, 6, 4, 3, 2],
];

testCases.forEach((test) => {
  console.log(
    'for given sequence of object',
    [...test],
    '\nthe correct sequence is as follows: ',
    cyclicSort(test),
    '\n'
  );
});
