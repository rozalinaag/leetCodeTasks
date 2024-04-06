function lengthOfLastWord(s: string): number {
  return s.split(' ').reverse().find(word => word.length > 0)!.length
}

console.log('test 1: Hello World');
console.log(5 === lengthOfLastWord('Hello World'));

console.log('test 2:    fly me   to   the moon  ');
console.log(4 === lengthOfLastWord('   fly me   to   the moon  '));

console.log('test 3: luffy is still joyboy');
console.log(6 === lengthOfLastWord('luffy is still joyboy'));

console.log('test 3: a');
console.log(1 === lengthOfLastWord('a'));
