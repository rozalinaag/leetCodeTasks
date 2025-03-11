function twoSum(nums, target) {
  let hashMap = {};

  for (let i = 0; i < nums.length; i++) {
    let currentValue = nums[i];

    if (currentValue > target) {
      continue;
    }

    if (!hashMap[currentValue]) {
      hashMap[currentValue] = [i];
    } else {
      hashMap[currentValue].add(i);
    }

    let needToFind = target - currentValue;

    if (
      hashMap[needToFind] &&
      hashMap[needToFind][0] !== hashMap[currentValue][0]
    ) {
      return [hashMap[needToFind][0], hashMap[currentValue][0]];
    }
  }
}

twoSum((nums = [3, 4, 5, 6]), (target = 7));
