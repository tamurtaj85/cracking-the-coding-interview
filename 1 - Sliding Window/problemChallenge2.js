/**
 * String Anagrams (hard)
 */

/**
 * Given a string and a pattern, find all anagrams of the pattern in the given string.
 * Anagram is actually a Permutation of a string.
 * Write a function to return a list of starting indices of the anagrams of the pattern in the given string.
 */

const strings = ['ppqp', 'abbcabc'];
const anagrams = ['pq', 'abc'];

function getAnagramIndexes(string, anagram) {
  const anagramMap = {};

  for (const char of anagram) {
    if (!(char in anagramMap)) anagramMap[char] = 0;
    anagramMap[char] += 1;
  }

  const anagramIndexes = [];
  let windowStart = 0,
    matchCount = 0;

  for (let windowIndex = 0; windowIndex < string.length; windowIndex++) {
    const rChar = string[windowIndex];

    if (rChar in anagramMap) {
      anagramMap[rChar] -= 1;

      if (anagramMap[rChar] === 0) matchCount++;
    }

    if (matchCount === Object.keys(anagramMap).length)
      anagramIndexes.push(windowStart);

    if (windowIndex >= anagram.length - 1) {
      const lChar = string[windowStart];

      if (lChar in anagramMap) {
        if (anagramMap[lChar] === 0) matchCount--;

        anagramMap[lChar] += 1;
      }

      windowStart++;
    }
  }

  return anagramIndexes;
}

for (let index = 0; index < strings.length; index++) {
  console.log(
    `Anagram indexes for "${strings[index]}" with anagram  "${anagrams[index]}" are: `,
    getAnagramIndexes(strings[index], anagrams[index])
  );
}
