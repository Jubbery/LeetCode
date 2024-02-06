// Write a function that takes a string as input
// and reverse only the vowels of a string.
// a,e,I,o,u,

// Hello -> Holle

var reverseVowelsInString = function (s: string) {
  const VOWELS: Set<string> = new Set("aeiou");

  let left = 0,
    right = s.length - 1;

  let strArr: string[] = s.toLowerCase().split("");

  while (left < right) {
    let isLeftVowel = VOWELS.has(strArr[left]);
    let isRightVowel = VOWELS.has(strArr[right]);

    if (isLeftVowel && isRightVowel) {
      let temp = strArr[left];
      strArr[left] = strArr[right];
      strArr[right] = temp;
      left++;
      right--;
    } else if (isLeftVowel && !isRightVowel) {
      right--;
    } else {
      left++;
    }
  }

  return strArr.join("");
};
