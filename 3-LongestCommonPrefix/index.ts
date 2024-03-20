function longestCommonPrefix(strs: string[]): string {
  let prefix = strs[0];

  for (let i = 0; i < strs.length; i++) {
    if (strs[i].length < prefix.length) {
      /* if the word length is less than the length of the prefix,
       then need to trim the prefix.*/
      prefix = prefix.slice(0, strs[i].length);
    }

    while (prefix != '' && strs[i].indexOf(prefix) !== 0) {
      prefix = prefix.slice(0, prefix.length - 1);
    }
  }

  return prefix;
}

console.log('test 1: flower, flow, flight');
console.log('fl' === longestCommonPrefix(['flower', 'flow', 'flight']));

console.log('test 2: ower, owty, owht');
console.log('ow' === longestCommonPrefix(['ower', 'owty', 'owht']));

console.log('test 3: dog, raceca, car');
console.log('' === longestCommonPrefix(['dog', 'racecar', 'car']));
