/**
 * Smallest Window containing Substring (hard)
 */

/**
 * Given a string and a pattern, find the smallest substring in the given string which has all the characters of the given pattern.
 */

const strings = ['aabdec', 'abdabca', 'adcad'];
const patterns = ['abc', 'abc', 'abc'];

function findSmallestSubstring(string, pattern) {
  const patternMap = {};

  for (const char of pattern) {
    if (!(char in patternMap)) patternMap[char] = 0;
    patternMap[char] += 1;
  }

  let windowStart = 0,
    matchCount = 0,
    minLength = string.length + 1,
    subStrStart = 0;

  for (let windowIndex = 0; windowIndex < string.length; windowIndex++) {
    const rChar = string[windowIndex];

    if (rChar in patternMap) {
      patternMap[rChar] -= 1;

      if (patternMap[rChar] === 0) matchCount++;
    }

    while (matchCount === pattern.length) {
      if (minLength > windowIndex - windowStart + 1) {
        minLength = windowIndex - windowStart + 1;
        subStrStart = windowStart;
      }

      const lChar = string[windowStart];

      if (lChar in patternMap) {
        if (patternMap[lChar] === 0) matchCount--;

        patternMap[lChar] += 1;
      }

      windowStart++;
    }
  }

  return minLength > string.length
    ? ''
    : string.substring(subStrStart, minLength + subStrStart);
}

for (let index = 0; index < strings.length; index++) {
  console.log(
    `Smallest substring for "${strings[index]}" with pattern  "${patterns[index]}" is: `,
    findSmallestSubstring(strings[index], patterns[index])
  );
}
