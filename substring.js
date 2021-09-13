const getLongestNonRepeatingSubstring = (text) => {
  // pointers to track the largest non repeating chars
  let leftNeedle = 0
  let rightNeedle = 1
  let currSubstring = ''
  let currSubstringCharMap = {} // collect occurrences of a char in currSubstring
  let substringList = [] // collect all substrings
  while (leftNeedle < text.length && rightNeedle < text.length) {
    if (!Boolean(currSubstringCharMap[text[rightNeedle]]) || currSubstringCharMap[text[rightNeedle]] < 1) {
      currSubstring = currSubstring + text[rightNeedle]
      currSubstringCharMap[text[rightNeedle]] = 1
      rightNeedle++;
    } else {
      // reset needles by one character after getting a duplicated character
      leftNeedle++
      rightNeedle = leftNeedle + 1
      currSubstring = ''
      currSubstringCharMap = {}
    }
    substringList.push(currSubstring);
  }

  // Find the max substring from the list
  let maxLength = 0;
  let maxLengthIndex = 0;
  substringList.forEach((substring, index) => {
    if (substring.length > maxLength) {
      maxLength = substring.length
      maxLengthIndex = index
    }
  })
  return substringList[maxLengthIndex];
}

module.exports = {
  getLongestNonRepeatingSubstring
}
