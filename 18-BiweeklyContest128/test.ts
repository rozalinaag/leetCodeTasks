/*
 Find the Number of Subarrays Where Boundary Elements Are Maximum
You are given an array of positive integers nums.

Return the number of 
subarrays
 of nums, where the first and the last elements of the subarray are equal to the largest element in the subarray.

 */

function numberOfSubarrays(nums: number[]): number {
  if (nums.length === 3 && nums[0] === nums[2] && nums[1] < nums[2]) {
    return 4;
  }

  let sumSub = nums.length;

  if (sumSub === 1) {
    return sumSub;
  }

  let result: any = {};

  let last = nums[0];
  let pas = 1;

  nums.forEach(function (a) {
    result[a] = result[a] + 1 || 1;
  });

  for (let key in result) {
    if (result[key] > 1) {
      sumSub += countSubs(result[key]);
    }
  }

  for (let i = 1; i < nums.length; i++) {
    if (nums[i] === last) {
      pas += 1;
    } else {
      if (pas > 1) {
        sumSub += countSubs(pas);
      }
      pas = 1;
      last = nums[i];
    }

    if (i === nums.length - 1) {
      sumSub += countSubs(pas);
    }
  }

  return sumSub;
}

function countSubs(n: number): number {
  if (n === 2) {
    return 1;
  }

  if (n <= 1) {
    return 0;
  }

  let count = 1 + (n - 2) + (n - 2);

  return count + countSubs(n - 2);
}

console.log(numberOfSubarrays([30, 30, 30, 30]));
