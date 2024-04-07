function merge(nums1: number[], m: number, nums2: number[], n: number): void {
  let indexOfAddedNums2 = 0;
  let lengthReadyArray = m;

  for (let i = 0; i < n + m; i++) {
    if (nums1[i] >= nums2[indexOfAddedNums2]) {
      let valueMiddleItem = nums1[i];
      nums1[i] = nums2[indexOfAddedNums2];

      let saveValue = valueMiddleItem;

      for (let index = i + 1; index < n + m; index++) {
        valueMiddleItem = nums1[index];
        nums1[index] = saveValue;
        saveValue = valueMiddleItem;
      }

      indexOfAddedNums2 += 1;
      lengthReadyArray += 1;
    } else if (i >= lengthReadyArray && indexOfAddedNums2 < n) {
      nums1[i] = nums2[indexOfAddedNums2];
      
      indexOfAddedNums2 += 1;
      lengthReadyArray += 1;
    }
  }

  console.log(nums1);
}

console.log('test 1: nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3');
merge([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3);

console.log('test 2: nums1 = [1], m = 1, nums2 = [], n = 0');
merge([1], 1, [], 0);

console.log('test 2: nums1 = [0], m = 0, nums2 = [1], n = 1');
merge([0], 0, [1], 1);
