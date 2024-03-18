/**
 *  Given an integer x, return true if x is a palindrome, and false otherwise.
 *  without converting the integer to a string
 */

function isPalindrome(x: number): boolean {
  if (x < 0) {
    return false;
  }

  let dividedX = x;
  let reverseX = '';

  while (dividedX > 0) {
    reverseX += dividedX % 10;
    dividedX = Math.floor(dividedX / 10);
  }

  return x === Number(reverseX);
}

console.log('test 1: 121');
console.log(true === isPalindrome(121));

console.log('test 2: -121');
console.log(false === isPalindrome(-121));

console.log('test 3: 10');
console.log(false === isPalindrome(10));

console.log('test 4: 101');
console.log(true === isPalindrome(101));

console.log('test 5: 154');
console.log(false === isPalindrome(154));
