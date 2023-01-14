/**
 * Words Concatenation (hard)
 */

/**
 * Given a string and a list of words, find all the starting indices of substrings in the given string that are a concatenation of all the given words exactly once without any overlapping of words. It is given that all words are of the same length.
 */

const strings = ['catfoxcat', 'catcatfoxfox'];
const words = [
  ['cat', 'fox'],
  ['cat', 'fox'],
];

function getConcatinationIndexes(string, wordsArr) {}

for (let index = 0; index < strings.length; index++) {
  console.log(
    `Concatination indexes for "${strings[index]}" with words  "${words[index]}" are: `,
    getConcatinationIndexes(strings[index], patterns[index])
  );
}
