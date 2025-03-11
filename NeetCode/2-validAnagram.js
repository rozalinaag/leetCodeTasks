function isAnagram(s, t) {
  if (s.length !== t.length) {
    return false;
  }

  let sHashTab = {};
  let tHashTab = {};

  for (let i = 0; i < s.length; i++) {
    if (sHashTab[s[i]]) {
      sHashTab[s[i]] += 1;
    } else {
      sHashTab[s[i]] = 1;
    }
  }

  for (let i = 0; i < t.length; i++) {
    let currentValue = t[i];

    if (!sHashTab[currentValue]) {
      return false;
    }

    if (tHashTab[currentValue]) {
      tHashTab[currentValue] += 1;

      if (tHashTab[currentValue] > sHashTab[currentValue]) {
        return false;
      }
    } else {
      tHashTab[currentValue] = 1;
    }
  }

  return true;
}

console.log(isAnagram((s = 'jar'), (t = 'jam')));
