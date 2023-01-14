/**
 * Permutation in a String (hard)
 */

/**
 * Given a string and a pattern, find out if the string contains any permutation of the pattern.
 * Permutation is defined as the re-arranging of the characters of the string.
 */

const strings = ['oidbcaf', 'odicf', 'bcdxabcdy', 'aaacb'];
const patterns = ['abc', 'dc', 'bcdyabcdx', 'abc'];

function hasPermutation(string, pattern) {
  const patternFreqMap = {};

  // Create the frequency map of the pattern
  for (const char of pattern) {
    if (!(char in patternFreqMap)) patternFreqMap[char] = 0;
    patternFreqMap[char] += 1;
  }

  let windowStart = 0,
    matchCount = 0;

  for (let windowIndex = 0; windowIndex < string.length; windowIndex++) {
    const char = string[windowIndex];

    // If the character exists in patternMap,
    if (char in patternFreqMap) {
      // Decrement its frequency
      patternFreqMap[char] -= 1;

      // If the frequency gets to 0, increment the matchCount cause we have found our character
      if (patternFreqMap[char] === 0) {
        matchCount++;
      }
    }

    // If the match count after above procedure equates to pattern length then we have a permutation
    if (matchCount === Object.keys(patternFreqMap).length) return true;

    // Else if window size increases than the pattern length shorten the window size
    if (windowIndex >= pattern.length - 1) {
      const charToBePoppedOut = string[windowStart];

      // If the character from the string exists in the patternMap
      if (charToBePoppedOut in patternFreqMap) {
        // And its frequency is already zero, it means it was not the actual char we are looking for so decrement the matchCount
        if (patternFreqMap[charToBePoppedOut] === 0) {
          matchCount--;
        }
        // And then increment the char frequency back to its original
        patternFreqMap[charToBePoppedOut] += 1;
      }

      windowStart++;
    }
  }

  return false;
}

for (let index = 0; index < strings.length; index++) {
  console.log(
    `Existance of permutation for "${strings[index]}" of pattern "${patterns[index]}" is: `,
    hasPermutation(strings[index], patterns[index])
  );
}
