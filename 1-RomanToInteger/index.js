/**
 * Given a roman numeral, convert it to an integer.
 * @param {string} s
 * @return {number}
 */

var romanToInt = function (s) {
  const symbolValue = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  let result = 0;

  for (let i = 0; i < s.length; i++) {
    if (symbolValue[s[i]] < symbolValue[s[i + 1]]) {
      result += symbolValue[s[i + 1]] - symbolValue[s[i]];
      i = i + 1;
    } else {
      result += symbolValue[s[i]];
    }
  }

  return result;
};
