/**
 * SLIDING WINDOW PATTERN
 */
const array = [1, 3, 2, 6, -1, 4, 1, 8, 2];

function calculateAverage(windowSize, array) {
  const averageArr = [];

  let windowStart = 0;
  let windowSum = 0;

  for (let windowIndex = 0; windowIndex < array.length; windowIndex++) {
    // Summing up each element of array  at every iteration
    windowSum += array[windowIndex];

    // if we have passed the (windowSize -1) size,
    if (windowIndex >= windowSize - 1) {
      // then, calculate the average and push it to array
      averageArr.push(windowSum / windowSize);
      // subtract the value that is being poped out of the window
      windowSum -= array[windowStart];
      // update the windowStart index
      windowStart++;
    }
  }

  return averageArr;
}

console.log(
  'Calculate average of subsequent subarrays of K window size',
  calculateAverage(5, array)
);
