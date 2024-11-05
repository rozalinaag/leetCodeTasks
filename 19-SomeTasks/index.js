function scoreOfString(s) {
  let sum = 0;

  for (let i = 0; i < s.length - 1; i++) {
    sum += Math.abs(s[i].charCodeAt(0) - s[i + 1].charCodeAt(0));
  }

  return sum;
}

console.log(scoreOfString('ol'));
console.log(scoreOfString('zaz'));
console.log(scoreOfString('he'));
console.log(scoreOfString('hhhhhhhhh'));
