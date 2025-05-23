function productExceptSelf(nums){
    let result = Array(nums.length).fill(1);

    let prefix = 1
    for (let i = 1; i < nums.length; i++) {
        result[i] = prefix;
        prefix *=nums[i]
    }

    let postfix = 1
    for (let i = nums.length - 1; i > -1; --i) {
        result[i] *=postfix;
        postfix *=nums[i]
    }
    return result
}

console.log(productExceptSelf([1,2,4,6]))
