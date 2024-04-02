function removeDuplicates(nums: number[]): number {
  for (let i =0; i<nums.length; i++){
    if (nums[i] === nums[i + 1]){
      nums.splice(i+1, 1)
      i = i - 1
    }
  }

  return nums.length;
};

console.log('test 1: [1,1,2]');
console.log(2 === removeDuplicates([1,1,2]));

console.log('test 2: [0,0,1,1,1,2,2,3,3,4]');
console.log(5 === removeDuplicates([0,0,1,1,1,2,2,3,3,4]));

console.log('test 3: [0, 0]');
console.log(1 === removeDuplicates([0,0]));