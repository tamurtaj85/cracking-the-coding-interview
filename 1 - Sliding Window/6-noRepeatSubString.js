/**
 * No-repeat Substring (hard)
 */

/**
 * Given a string, find the length of the longest substring which has no repeating characters.
 */

const strings = ['aabccbb', 'abbbb', 'abccde'];

function longestSubstring(string) {
  const stringMap = new Map();

  let longestSubString = 0,
    windowStart = 0;

  for (let windowIndex = 0; windowIndex < string.length; windowIndex++) {
    const char = string[windowIndex];

    if (stringMap.has(char)) {
      let count = stringMap.get(char);
      stringMap.set(char, ++count);
    } else stringMap.set(char, 1);

    while (stringMap.get(char) > 1) {
      let count = stringMap.get(char);
      stringMap.set(char, --count);
      windowStart = windowIndex;
    }

    longestSubString = Math.max(
      longestSubString,
      windowIndex - windowStart + 1
    );
  }

  return longestSubString;
}

for (let index = 0; index < strings.length; index++) {
  console.log(
    `Longest substring for "${strings[index]}" is: `,
    longestSubstring(strings[index])
  );
}
