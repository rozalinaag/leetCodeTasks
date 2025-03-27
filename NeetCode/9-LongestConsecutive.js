function longestConsecutive(nums) {
    if (nums.length === 0 ){
        return 0
    }

    nums.sort((a, b) => a - b);

    let count = 1;
    let maxCount = 1

    for (let i = 1; i< nums.length; i++){
        if (nums[i] - nums[i-1] === 1){
            count++

            if (count>maxCount){
                maxCount = count
            }
        } else if(nums[i] !== nums[i-1]){
            count = 1
        }
    }
    return maxCount;
}

console.log(longestConsecutive([2,20,4,10,3,4,5]))