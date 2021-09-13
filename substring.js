const getLongestNonRepeatingSubstring = (text) => {
  let leftNeedle = 0
  let rightNeedle = 1
  let currSubstring = ''
  let currSubstringMap = {}
  let substringList = []
  while (leftNeedle < text.length && rightNeedle < text.length) {
    console.log(text[rightNeedle], !Boolean(currSubstringMap[text[rightNeedle]]) || currSubstringMap[text[rightNeedle]] < 1, currSubstringMap);
    if (!Boolean(currSubstringMap[text[rightNeedle]]) || currSubstringMap[text[rightNeedle]] < 1) {
      currSubstring = currSubstring + text[rightNeedle]
      currSubstringMap[text[rightNeedle]] = 1
      rightNeedle++;
    } else {
      leftNeedle++
      rightNeedle = leftNeedle + 1
      currSubstring = ''
      currSubstringMap = {}
    }
    substringList.push(currSubstring);
  }

  let maxLength = 0;
  let maxLengthIndex = 0;
  substringList.forEach((substring, index) => {
    if (substring.length > maxLength) {
      maxLength = substring.length
      maxLengthIndex = index
    }
  })
  console.log(substringList);
  return substringList[maxLengthIndex];
}

module.exports = {
  getLongestNonRepeatingSubstring
}
