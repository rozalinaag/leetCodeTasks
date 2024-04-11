function longestPalindrome(s: string): string {
  let palindrome = s[0];

  for (let i=0; i< s.length; i++){
    const lastIndex = s.lastIndexOf(s[i])
    const newString = s.slice(i, lastIndex + 1)

    if (isPalindrom(newString) && newString.length> palindrome.length){
      palindrome = newString
    }
  }

  return palindrome
}

function isPalindrom (palindrome: string){
  return palindrome === palindrome.split("").reverse().join("")
}

console.log('test 1: babad');
console.log('bab' == longestPalindrome('babad'));

console.log('test 2: cbbd');
console.log('bb' === longestPalindrome('cbbd'));

console.log('test 2: aacabdkacaa');
console.log('aca' === longestPalindrome('aacabdkacaa'));

console.log('test 2: dfks');
console.log('d' === longestPalindrome('dfks'));
