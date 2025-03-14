function encode(strs) {
  let concat = strs.join(' ');
  return concat;
}

function decode(str) {
  console.log(str);
  return str.split(' ');
}

let line = encode(['neet', 'code', 'love', 'you']);

console.log(decode(line));
