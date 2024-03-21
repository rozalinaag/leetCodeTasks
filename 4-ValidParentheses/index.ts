function isValid(s: string): boolean {

  const parantheses: Record<string, string> = {
    '(': ')',
    '{': '}',
    '[': ']',
  };

  for (let i = 0; i < s.length; i += 2) {
    if (parantheses[s[i]] !== s[i + 1]) {
      return false;
    }
  }

  return true;
}

console.log('test 1: ()');
console.log(true === isValid('()'));

console.log('test 2: ()[]{}');
console.log(true === isValid('()[]{}'));

console.log('test 3: (]');
console.log(false === isValid('(]'));
