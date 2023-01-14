/**
 * Subarrays with Product Less than a Target (medium)
 */
/**
 * Given an array with positive numbers and a target number, find all of its contiguous subarrays whose product is less than the target number.
 */

import Deque from 'collections/deque.js';

const arrays = [
  [2, 5, 3, 10],
  [8, 2, 6, 5],
];

const targets = [30, 50];

function subArraysWithSumLessThanTarget(array, target) {
  let product = 1,
    windowStart = 0;

  const subArrays = [];

  for (let windowIndex = 0; windowIndex < array.length; windowIndex++) {
    product *= array[windowIndex];

    while (product >= target && windowStart < array.length) {
      product /= array[windowStart];
      windowStart++;
    }

    // const tempArr = new Deque();
    const tempArr = [];
    for (let index = windowIndex; index > windowStart - 1; index--) {
      // tempArr.unshift(array[index]);
      tempArr.unshift(array[index]);

      subArrays.push([...tempArr]);
    }
  }

  return subArrays;
}

for (let index = 0; index < arrays.length; index++) {
  console.log(
    `Subarrays whose product of contiguous elements is less than ${targets[index]} of [${arrays[index]}] are: `,
    subArraysWithSumLessThanTarget(arrays[index], targets[index])
  );
}
