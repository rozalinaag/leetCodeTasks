function groupAnagrams(strs) {
  let result = new Map();

  function createMapCharacterFrequency(line) {
    let charsObj = new Object();
    for (const char of line) {
      charsObj[char] = (charsObj[char] || 0) + 1;
    }
    return charsObj;
  }

  function areObjectsEqual(objA, objB) {
    const keysA = Object.keys(objA).sort();
    const keysB = Object.keys(objB).sort();
    if (keysA.length !== keysB.length) return false;
    return keysA.every((key) => objA[key] === objB[key]);
  }

  function hasEqualKey(map, compareObj) {
    for (let key of map.keys()) {
      if (areObjectsEqual(key, compareObj)) {
        return key;
      }
    }
    return false;
  }

  for (let i = 0; i < strs.length; i++) {
    const keyObj = createMapCharacterFrequency(strs[i]);
    const keyResultObj = hasEqualKey(result, keyObj);
    if (keyResultObj) {
      result.set(keyResultObj, [...result.get(keyResultObj), strs[i]]);
    } else {
      result.set(keyObj, [strs[i]]);
    }
  }
  return [...result.values()];
}

console.log(groupAnagrams(['act', 'pots', 'tops', 'cat', 'stop', 'hat']));
