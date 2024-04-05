function searchInsert(nums: number[], target: number): number {
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === target || nums[i]>target){
      return i
    }
  }

  return nums.length
}

console.log('test 1: [1,3,5,6]');
console.log(1 === searchInsert([1, 3, 5, 6], 2));

console.log('test 2: [1,3,5,6]');
console.log(2 === searchInsert([1, 3, 5, 6], 5));

console.log('test 3: [1,3,5,6]');
console.log(4 === searchInsert([1, 3, 5, 6], 7));
