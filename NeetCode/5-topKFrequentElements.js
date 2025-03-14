function topKFrequent(nums, k) {
  let resultFrequents = {};

  for (const element of nums) {
    if (element in resultFrequents) {
      resultFrequents[element] += 1;
    } else {
      resultFrequents[element] = 1;
    }
  }

  let indexFrequency = [];
  for (let key in resultFrequents) {
    frequency = resultFrequents[key];
    if (indexFrequency[frequency]) {
      indexFrequency[frequency].push(key);
    } else {
      indexFrequency[frequency] = [key];
    }
  }

  let result = [];
  for (let i = indexFrequency.length - 1; i > 0; i--) {
    result.push(...indexFrequency[i].slice(0, k));
    if (result.length >= k) {
      break;
    }
  }

  return result;
}

console.log(topKFrequent((nums = [1, 2, 2, 3, 3, 3]), (k = 2)));
