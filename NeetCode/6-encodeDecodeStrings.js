function encode(strs) {
  let result = '';

  if (strs.length === 0) {
    return null;
  }

  if (strs.length === 1 && strs[0] === '') {
    return '';
  }

  for (let i = 0; i < strs.length; i++) {
    let lenWord = strs[i].length;
    result += `${lenWord}` + strs[i];
  }

  console.log(result);

  return result;
}

function decode(str) {
  let result = [];

  if (str === null) {
    return [];
  }

  if (str === '') {
    return [''];
  }

  for (let i = 0; i < str.length - 3; i++) {
    if (Number(str[i])) {
      let lenNum = Number(str[i]);
      //error because number can be more than 1 symbol. Count it and use ()
      console.log(lenNum);
      console.log(str.slice(i + 1, i + 1 + lenNum));
      result.push(str.slice(i + 1, i + 1 + lenNum));
      i = i + lenNum;
    }
  }
  return result;
}

let line = encode(['we', 'say', ':', 'yesf', '!@#$%^&*()']);

console.log(decode(line));
