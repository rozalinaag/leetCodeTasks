function twoSum(nums, target) {
  let hashMap = {};

  for (let i = 0; i < nums.length; i++) {
    let diff = target - nums[i];
    if (diff in hashMap) {
      return [hashMap[diff], i];
    }
    hashMap[nums[i]] = i;
  }
}

console.log(twoSum((nums = [5, 5]), (target = 10)));
