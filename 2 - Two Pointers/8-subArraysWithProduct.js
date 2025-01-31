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
    lPointer = 0;

  const subArrays = [];

  for (let rPointer = 0; rPointer < array.length; rPointer++) {
    product *= array[rPointer];

    while (product >= target && lPointer < array.length) {
      product /= array[lPointer];
      lPointer++;
    }

    // const tempArr = new Deque();
    const tempArr = [];
    for (let index = rPointer; index > lPointer - 1; index--) {
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
