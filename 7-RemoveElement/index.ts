function removeElement(nums: number[], val: number): number {
  let countVal = 0;

  for (let i = 0; i < nums.length - countVal; i++) {
    if (nums[i] === val) {
      nums[i] = nums[nums.length - 1 - countVal]
      i = i - 1
      countVal += 1;
    }
  }

  return nums.length - countVal;
}

console.log('test 1: [3,2,2,3]');
console.log(2 === removeElement([3, 2, 2, 3], 3));

console.log('test 2: [0,1,2,2,3,0,4,2]');
console.log(5 === removeElement([0, 1, 2, 2, 3, 0, 4, 2], 2));
