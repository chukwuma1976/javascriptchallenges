function convertToDecimal(binary) {
    return parseInt(binary, 2);
}

console.log(convertToDecimal('100000100010001'));
console.log(convertToDecimal('100000100010000'));
console.log(convertToDecimal('101010000100000000010000'));
console.log(convertToDecimal('1000001000100100000000000000'));