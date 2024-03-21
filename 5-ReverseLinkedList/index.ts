function reverseList(head: number[]): number[] {
  let reversedArray: number[] = []

  for (let i = head.length-1; i >= 0; i--) {
    reversedArray.push(head[i])
  }

  return reversedArray;
}

console.log('test 1: [1,2,3,4,5]');
console.log(reverseList([1, 2, 3, 4, 5]));

console.log('test 2: [1,2]');
console.log(reverseList([1, 2]));

console.log('test 3: []');
console.log(reverseList([]));
