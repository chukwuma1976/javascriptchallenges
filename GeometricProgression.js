function checkArithmeticProgression(numbers) {
    if (numbers.length <= 2) return true;

    let prev = 1;
    let next = 2;
    let lastDiv = numbers[1] / numbers[0];
    let currentDiv = numbers[1] / numbers[0];

    while (next < numbers.length) {
        if (lastDiv !== currentDiv) return false;
        prev++;
        next++;
        lastDiv = currentDiv;
        currentDiv = numbers[next] / numbers[prev];
    }
    return true;
}

console.log(checkArithmeticProgression([1, 2, 4, 8]));
console.log(checkArithmeticProgression([1, 2, 3, 4, 6]));
console.log(checkArithmeticProgression([1, 5, 25, 125, 625]));
console.log(checkArithmeticProgression([3, 9, 27, 81, 15]));
console.log(checkArithmeticProgression([1]));
console.log(checkArithmeticProgression([1, 2]));