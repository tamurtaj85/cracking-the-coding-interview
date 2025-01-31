/**
 *
 * We are given an array containing positive and negative numbers. Suppose the array contains a number ‘M’ at a particular index. Now, if ‘M’ is positive we will move forward ‘M’ indices and if ‘M’ is negative move backwards ‘M’ indices. You should assume that the array is circular which means two things:

If, while moving forward, we reach the end of the array, we will jump to the first element to continue the movement.
If, while moving backward, we reach the beginning of the array, we will jump to the last element to continue the movement.
Write a method to determine if the array has a cycle. The cycle should have more than one element and should follow one direction which means the cycle should not contain both forward and backward movements.
 */

const arrayHasCycle = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    const isForwardDir = arr[i] >= 0;

    let slow = i,
      fast = i;

    while (true) {
      slow = getNextIndex(arr, isForwardDir, slow);
      fast = getNextIndex(arr, isForwardDir, fast);

      if (fast !== -1) {
        fast = getNextIndex(arr, isForwardDir, fast);
      }

      // both pointers should be moving in same direction,
      // if direction changes for anyone breakout
      // and when both becomes equal hence cycle exists
      if (slow === -1 || fast === -1 || slow === fast) break;
    }

    // confirms the cycle existence
    if (slow !== -1 && slow === fast) return true;
  }

  return false;
};

const getNextIndex = (arr, isForward, currIndex) => {
  const direction = arr[currIndex] >= 0;

  // if direction gets changed
  if (isForward !== direction) return -1;

  // formula to get the next index, for problems like (circular array)
  let nextIndex = (currIndex + arr[currIndex]) % arr.length;

  // if by any change we get the negative index, wrap it up to positive number
  if (nextIndex < 0) nextIndex += arr.length;

  // one element cycle
  if (nextIndex === currIndex) nextIndex = -1;

  return nextIndex;
};

const arr1 = [1, 2, -1, 2, 2];
const arr2 = [2, 2, -1, 2];
const arr3 = [2, 1, -1, -2];

console.log('array has cycle? ', arrayHasCycle(arr1));
console.log('array has cycle? ', arrayHasCycle(arr2));
console.log('array has cycle? ', arrayHasCycle(arr3));
