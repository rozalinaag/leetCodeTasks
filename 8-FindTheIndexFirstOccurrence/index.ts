function strStr(haystack: string, needle: string): number {
  //the easiest way
  // return haystack.indexOf(needle)

  //but we aren't looking for easy ways
  let m = haystack.length;
  let n = needle.length;

  for (let i = 0; i < m - n + 1; ++i)
    if (haystack.slice(i, i + n) === needle) return i;

  return -1;
}

console.log('test 1: sadbutsad');
console.log(3 === strStr('sadbutsad', 'but'));

console.log('test 2: leetcode');
console.log(-1 === strStr('leetcode', 'leeto'));

console.log('test 3: mississippi');
console.log(9 === strStr('mississippi', 'pi'));

console.log('test 3: aaa');
console.log(0 === strStr('aaa', 'aaa'));
