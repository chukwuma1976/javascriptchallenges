function convertToInteger(romanNumeral) {

    const romanNumerals = {
        M: 1000,
        D: 500,
        C: 100,
        L: 50,
        X: 10,
        V: 5,
        I: 1

    }

    let prev = -1;
    let next = 0;
    let sum = romanNumerals[romanNumeral[0]];

    while (next < romanNumeral.length) {
        if (prev >= 0) {
            let prevNum = romanNumerals[romanNumeral[prev]];
            let nextNum = romanNumerals[romanNumeral[next]];
            if (prevNum < nextNum) {
                sum += (nextNum - (prevNum * 2));
            } else {
                sum += nextNum
            }
        }
        next++;
        prev++;
    }
    return sum;

}

console.log(convertToInteger('MCMVII'));
console.log(convertToInteger('XXXIX'));
console.log(convertToInteger('MMCDXXI'));
console.log(convertToInteger('CLX'));
console.log(convertToInteger('MIX'));
console.log(convertToInteger('MMMCMXCIX'));
console.log(convertToInteger('MMXXV'));