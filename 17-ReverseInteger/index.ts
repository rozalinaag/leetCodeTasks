function reverse(x: number): number {
  let negative = 1;
  let maxInt = Math.pow(2, 31)
  let minInt = -maxInt

  if (x < 0) {
    negative = -1;
  }

  let reverseX = (x * negative).toString().split('').reverse().join('');

  let reverseNumber = Number(reverseX);

  if (reverseNumber >=  maxInt - 1 || reverseNumber <= minInt) {
    return 0;
  } else {
    return reverseNumber * negative;
  }
}

console.log('test 1: 1563847412');
console.log(0 == reverse(1563847412));

console.log('test 2: -123');
console.log(-321 === reverse(-123));

console.log('test 2: 120');
console.log(21 === reverse(120));
