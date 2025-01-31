/**
 * Longest Substring with K Distinct Characters (medium)
 */

/**
 * Given a string, find the length of the longest substring in it with no more than K distinct characters.
 */

const strings = ['araaci', 'araaci', 'cbbebi'];
const kChars = [2, 1, 3];

function longestSubstring(string, k) {
  const distinctCharsMap = new Map();

  let windowStart = 0,
    windowSize = 0;

  for (let windowIndex = 0; windowIndex < string.length; windowIndex++) {
    const char = string[windowIndex];

    // Count the frequency of characters
    if (distinctCharsMap.has(char)) {
      let value = distinctCharsMap.get(char);
      distinctCharsMap.set(char, ++value);
    } else distinctCharsMap.set(char, 1);

    // Get the size of distinct characters in map and then reduce the window size
    while (distinctCharsMap.size > k) {
      const popedOutchar = string[windowStart];

      let value = distinctCharsMap.get(popedOutchar);

      distinctCharsMap.set(popedOutchar, --value);

      if (value === 0) distinctCharsMap.delete(popedOutchar);

      windowStart++;
    }

    windowSize = Math.max(windowSize, windowIndex - windowStart + 1);
  }

  return windowSize;
}

for (let index = 0; index < strings.length; index++) {
  console.log(
    `Longest length of substring of string "${strings[index]}" with ${kChars[index]} distinct characters is: `,
    longestSubstring(strings[index], kChars[index])
  );
}
