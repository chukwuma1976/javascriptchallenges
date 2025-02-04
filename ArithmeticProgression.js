function checkArithmeticProgression(numbers) {
    if (numbers.length <= 2) return true;

    let prev = 1;
    let next = 2;
    let lastDiff = numbers[1] - numbers[0];
    let currentDiff = numbers[1] - numbers[0];

    while (next < numbers.length) {
        if (lastDiff !== currentDiff) return false;
        prev++;
        next++;
        lastDiff = currentDiff;
        currentDiff = numbers[next] - numbers[prev];
    }
    return true;
}

console.log(checkArithmeticProgression([1, 2, 3, 4]));
console.log(checkArithmeticProgression([1, 2, 3, 4, 6]));
console.log(checkArithmeticProgression([1, 6, 2, 3, 4]));
console.log(checkArithmeticProgression([3, 6, 9, 12, 15]));
console.log(checkArithmeticProgression([1]));
console.log(checkArithmeticProgression([1, 2]));