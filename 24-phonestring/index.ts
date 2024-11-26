const phoneButtons: { [key: string]: string[] }  = {
  '2': ['a', 'b', 'c'],
  '3': ['d', 'e', 'f'],
  '4': ['g', 'h', 'i'],
  '5': ['j', 'k', 'l'],
  '6': ['m', 'n', 'o'],
  '7': ['p', 'q', 'r', 's'],
  '8': ['t', 'u', 'v'],
  '9': ['w', 'x', 'y', 'z'],
};

let possibleStrings: string[] = [];

function backtrack(i: number, curStr: string, digits: string): string {
  if (curStr.length === digits.length) {
    possibleStrings.push(curStr)
    return curStr;
  }

  for (let s of phoneButtons[digits[i]]) {
    let next = i
    if (digits.length != 1){
      next = i + 1
    }
    backtrack(next, curStr + s, digits);
  }

  return ''
}

function letterCombinations(digits: string): string[] {
  if (digits.length === 0) {
    return [];
  }

  backtrack(0, '', digits)
  return possibleStrings;
}