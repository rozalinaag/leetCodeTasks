function encode(strs) {
  let result = '';
  for (let i = 0; i < strs.length; i++) {
    let lenWord = strs[i].length;
    result += `(${lenWord})` + strs[i];
  }

  console.log(result);
  return result;
}

function decode(str) {
  console.log(str);
  return str.split(' ');
}

let line = encode(['neet', 'code', 'love', 'you']);

console.log(decode(line));
