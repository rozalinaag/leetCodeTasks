function groupAnagrams(strs) {
  let result = new Map();

  function createArrayCharacterFrequency(line) {
    let array = new Array(26);
    for (const char of line) {
      let = codeSymbol = char.charCodeAt() - 'a'.charCodeAt();

      if (array[codeSymbol]) {
        array[codeSymbol] += 1;
      } else {
        array[codeSymbol] = 1;
      }
    }

    return array;
  }

  for (let i = 0; i < strs.length; i++) {
    const arrayKey = createArrayCharacterFrequency(strs[i]).toString();
    if (result.has(arrayKey)) {
      result.set(arrayKey, [...result.get(arrayKey), strs[i]]);
    } else {
      result.set(arrayKey, [strs[i]]);
    }
  }
  console.log(result);
  return [...result.values()];
}

console.log(groupAnagrams(['act', 'pots', 'tops', 'cat', 'stop', 'hat']));
