function productOfDigits(num) {
    const digits = num.toString().split('');
    let product = 1;
    for (const digit of digits) {
        product *= parseInt(digit);
    }
    return product;
}

console.log(productOfDigits(2199));