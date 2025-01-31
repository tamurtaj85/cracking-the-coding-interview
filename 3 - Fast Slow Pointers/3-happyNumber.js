/**
 * Any number will be called a happy number if, after repeatedly replacing it with a number equal to the sum of the square of all of its digits, leads us to number ‘1’. All other (not-happy) numbers will never reach ‘1’. Instead, they will be stuck in a cycle of numbers which does not include ‘1’.
 */

function isHappyNumber(num) {
  let slow = num,
    fast = num;

  while (true) {
    slow = getSumOfSquaresOfDigits(slow);
    fast = getSumOfSquaresOfDigits(getSumOfSquaresOfDigits(fast));

    if (slow === fast) break;
  }

  return slow === 1;
}

function getSumOfSquaresOfDigits(num) {
  let nextSquaredNumber = 0;

  while (num > 0) {
    const rem = num % 10;
    nextSquaredNumber += rem * rem;
    num = Math.floor(num / 10);
  }

  return nextSquaredNumber;
}

const inpSet = [23, 12, 7, 5, 3, 1996, 1, 6, 8, 9, 1999, 49];

for (const element of inpSet) {
  console.log(`is ${element} a happy number? `, isHappyNumber(element));
}
