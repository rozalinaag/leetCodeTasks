function strStr(haystack: string, needle: string): number {
  //the easiest way
  // return haystack.indexOf(needle)

  //but we aren't looking for easy ways
  let iter = 0;
  let firstIndex = -1;

  for (let i = 0; i < haystack.length; i++) {
    if (iter === 0 && haystack.slice(i).length < needle.slice(iter).length) {
      return -1;
    }

    if (haystack[i] === needle[iter]) {
      console.log('trueee');
      if (iter === 0) {
        firstIndex = i;
      }

      if (iter === needle.length - 1) {
        return firstIndex;
      }

      iter += 1;
    } else {
      if (iter > 0) {
        console.log('falssse');
        i = i - iter + 1;
        iter = 0;
      }

      firstIndex = -1;
    }
  }

  return firstIndex;
}

console.log('test 1: sadbutsad');
console.log(3 === strStr('sadbutsad', 'but'));

console.log('test 2: leetcode');
console.log(-1 === strStr('leetcode', 'leeto'));

console.log('test 3: mississippi');
console.log(strStr('mississippi', 'pi'));

console.log('test 3: aaa');
console.log(0 === strStr('aaa', 'aaa'));
