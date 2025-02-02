function sumTwoLargest(nums) {
    nums.sort((a, b) => a - b);
    return nums[nums.length - 1] + nums[nums.length - 2];
}

const numbers = [111, 1, 4, 7, 12, 6, 9, 10, 43];
console.log(sumTwoLargest(numbers));