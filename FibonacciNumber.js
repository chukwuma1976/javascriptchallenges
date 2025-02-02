function fibonacci(number) {
    let nums = [0, 1];
    for (let i = 2; i <= number; i++) {
        const sum = nums[i - 1] + nums[i - 2];
        nums.push(sum);
    }
    return nums[number];
}

for (let i = 0; i <= 20; i++) {
    console.log(`The fibonacci number at position ${i} is ${fibonacci(i)}.`);
}
