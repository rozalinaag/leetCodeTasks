function hasDuplicate(nums) {
  let objNums = {};

  for (let i = 1; i < nums.length; i++) {
    if (objNums[nums[i]]) {
      return true;
    } else {
      objNums[nums[i]] = 1;
    }
  }

  return false;
}

console.log(hasDuplicate([1, 3, 2, 3]));
