/**
 * Remove Duplicates (easy)
 */
/**
 * Given an array of sorted numbers, remove all duplicates from it. You should not use any extra space; after removing the duplicates in-place return the new length of the array.
 */
/**
 * Approach1
 */
const arrays = [
  [2, 3, 3, 3, 6, 9, 9],
  [2, 2, 2, 11],
];

// function removeDuplicates(array) {
//   const frequencyMap = {};

//   for (const element of array) {
//     if (!(element in frequencyMap)) frequencyMap[element] = 0;
//     frequencyMap[element] += 1;
//   }

//   return Object.keys(frequencyMap).length;
// }

// for (let index = 0; index < arrays.length; index++) {
//   console.log(
//     `Length of array after removing the duplicates of [${
//       arrays[index]
//     }] is: ${removeDuplicates(arrays[index])}`
//   );
// }

/**
 * Approach2
 */
function removeDuplicates(array) {
  let nonDuplicatePointer = 1;

  for (let next = 0; next < array.length; next++) {
    const element = array[next];

    if (element !== array[nonDuplicatePointer - 1]) {
      // Swap
      array[nonDuplicatePointer] = element;
      nonDuplicatePointer++;
      console.log({array});
    }
  }

  return nonDuplicatePointer;
}

for (let index = 0; index < arrays.length; index++) {
  console.log(
    `Length of array after removing the duplicates of [${
      arrays[index]
    }] is: ${removeDuplicates(arrays[index])}`
  );
}

/**
 * Similar Questions
 * Problem 1: Given an unsorted array of numbers and a target ‘key’, remove all instances of ‘key’ in-place and return the new length of the array.
 */
const arraysP1 = [
  [3, 2, 3, 6, 3, 10, 9, 3],
  [2, 11, 2, 2, 1],
];

const keys = [3, 2];

function removeDuplicatesBaseOnKey(array, key) {
  let nonDuplicatePointer = 0;

  for (let current = 0; current < array.length; current++) {
    const element = array[current];

    if (element !== key) {
      // Swap
      array[nonDuplicatePointer] = element;
      nonDuplicatePointer++;
    }
  }

  return nonDuplicatePointer;
}

for (let index = 0; index < arraysP1.length; index++) {
  console.log(
    `Length of array after removing the duplicates of [${
      arraysP1[index]
    }] with given key ${keys[index]} is: ${removeDuplicatesBaseOnKey(
      arraysP1[index],
      keys[index]
    )}`
  );
}

/**
 * NOTE::: In problems like removing duplicates the core focus should be the unique elements not the duplicates :p
 */
