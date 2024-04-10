function lengthOfLongestSubstring(s: string): number {
  let lastString = ''
  let maxLen = 0

  for (let i = 0; i < s.length; i++) {
    const indexSameLetter = lastString.indexOf(s[i])

    if (indexSameLetter === -1){
      lastString += s[i]
    } else{
      lastString = lastString.slice(indexSameLetter + 1) + s[i]
    }

    maxLen = Math.max(lastString.length, maxLen)
  }

  return maxLen;
}

console.log('test 1: abcabcbb');
console.log(3 === lengthOfLongestSubstring('abcabcbb'));

console.log('test 2: bbbbb');
console.log(1 === lengthOfLongestSubstring('bbbbb'));

console.log('test 2: pwwkew');
console.log(3 === lengthOfLongestSubstring('pwwkew'));
