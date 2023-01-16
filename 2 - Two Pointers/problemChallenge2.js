/**
 * Comparing Strings containing Backspaces (medium)
 */
/**
 * Given two strings containing backspaces (identified by the character ‘#’), check if the two strings are equal.
 */

const strGroup1 = ['xy#z', 'xy#z', 'xp#', 'xywrrmp'];
const strGroup2 = ['xzz#', 'xyz#', 'xyz##', 'xywrrmu#p'];

function validateString(str1, str2) {
  let strRight1 = str1.length - 1,
    strRight2 = str2.length - 1;

  while (strRight1 >= 0 || strRight2 >= 0) {
    const strLength1 = checkBackspaces(str1, strRight1);
    const strLength2 = checkBackspaces(str2, strRight2);

    if (strLength1 < 0 && strLength2 < 0) return true;
    if (strLength1 < 0 || strLength2 < 0) return false;
    if (str1[strLength1] !== str2[strLength2]) return false;

    strRight1 = strLength1 - 1;
    strRight2 = strLength2 - 1;

    return true;
  }
}

function checkBackspaces(str, index) {
  let backspace = 0;

  while (index >= 0) {
    if (str[index] === '#') {
      backspace++;
    } else if (backspace > 0) backspace--;
    else break;

    index--;
  }

  return index;
}

for (let index = 0; index < strGroup1.length; index++) {
  console.log(
    `Equality of str1 "${strGroup1[index]}" and str2 "${strGroup2[index]}" is: `,
    validateString(strGroup1[index], strGroup2[index])
  );
}
