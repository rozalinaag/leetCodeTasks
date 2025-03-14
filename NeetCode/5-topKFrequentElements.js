function topKFrequent(nums, k) {
  const frequencyMap = new Map();

  for (const num of nums) {
    frequencyMap.set(num, (frequencyMap.get(num) || 0) + 1);
  }

  let bucket = Array(nums.length + 1)
    .fill(null)
    .map(() => []);

  for (const [num, freq] of frequencyMap.entries()) {
    bucket[freq].push(num);
  }

  let result = [];
  for (let i = bucket.length - 1; i > 0; i--) {
    if (bucket[i].length > 0) {
      result.push(...bucket[i]);
    }

    if (result.length >= k) {
      return result.slice(0, k);
    }
  }
}

console.log(topKFrequent((nums = [5, 3, 1, 1, 1, 3, 73, 1]), (k = 2)));
