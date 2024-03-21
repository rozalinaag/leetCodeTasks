function isValid(s: string): boolean {
  const open = ['(', '{', '['];

  const openParantheses: Record<string, number> = {
    '(': 0,
    '{': 0,
    '[': 0,
  };

  const closedParantheses: Record<string, number> = {
    ')': 0,
    '}': 0,
    ']': 0,
  };

  for (let i = 0; i < s.length; i++) {
    if (open.includes(s[i])) {
      openParantheses[s[i]] += 1;
    } else {
      closedParantheses[s[i]] += 1;
    }
  }
  
  return (
    openParantheses['('] === closedParantheses[')'] &&
    openParantheses['{'] === closedParantheses['}'] &&
    openParantheses['['] === closedParantheses[']']
  );
}

console.log('test 1: ()');
console.log(true === isValid('()'));

console.log('test 2: ()[]{}');
console.log(true === isValid('()[]{}'));

console.log('test 3: (]');
console.log(false === isValid('(]'));
