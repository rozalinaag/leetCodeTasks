function isValid(s: string): boolean {
  const stack: string[] = [];
  
  for (let i = 0; i < s.length; i++) {
      if (s[i] === '(' || s[i] === '{' || s[i] === '[') {
          stack.push(s[i]);
      }
      else if (s[i] === ')' && stack.length !== 0 && stack[stack.length - 1] === '(') {
          stack.pop();
      } else if (s[i] === '}' && stack.length !== 0 && stack[stack.length - 1] === '{') {
          stack.pop();
      } else if (s[i] === ']' && stack.length !== 0 && stack[stack.length - 1] === '[') {
          stack.pop();
      }
      else {
          return false;
      }
  }
  
  return stack.length === 0;
}

console.log('test 1: ()');
console.log(true === isValid('()'));

console.log('test 2: ()[]{}');
console.log(true === isValid('()[]{}'));

console.log('test 3: (]');
console.log(false === isValid('(]'));
