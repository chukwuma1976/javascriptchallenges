function findGaps(num) {
    const binary = num.toString(2);
    console.log(binary);
    if (!binary.includes('1') || (!binary.includes('0')))
        return 0;
    const zeroes = binary.split('1').filter(zero => zero !== '');

    if (binary[0] === '0')
        zeroes.shift();
    if (binary[binary.length - 1] === '0')
        zeroes.pop();

    const lengths = zeroes.map(zero => zero.length)
    return Math.max(...lengths);
}

console.log(findGaps(16657));
console.log(findGaps(16656));
console.log(findGaps(11026448));
console.log(findGaps(136462336));