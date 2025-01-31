/**
 * Longest Substring with Same Letters after Replacement (hard)
 */

/**
 * Given a string with lowercase letters only, if you are allowed to replace no more than ‘k’ letters with any letter, find the length of the longest substring having the same letters after replacement.
 */

const strings = ['aabccbb', 'abbcb', 'abccde'];
const ks = [2, 1, 1];

function longestSubStringAfterK_Replacement(string, k) {
  const stringMap = new Map();

  let longestStr = 0,
    windowStart = 0;

  for (let windowIndex = 0; windowIndex < string.length; windowIndex++) {
    const char = string[windowIndex];

    if (stringMap.has(char)) {
      let count = stringMap.get(char);
      stringMap.set(char, ++count);
    } else stringMap.set(char, 1);

    if (windowIndex - windowStart + 1 - stringMap.get(char) > k) {
      const charToBePoppedOut = string[windowStart];
      let count = stringMap.get(charToBePoppedOut);
      stringMap.set(charToBePoppedOut, --count);
      windowStart++;
    }

    longestStr = Math.max(longestStr, windowIndex - windowStart + 1);
  }

  return longestStr;
}

for (let index = 0; index < strings.length; index++) {
  console.log(
    `Longest substring for "${strings[index]}" after ${ks[index]} replacements is: `,
    longestSubStringAfterK_Replacement(strings[index], ks[index])
  );
}
