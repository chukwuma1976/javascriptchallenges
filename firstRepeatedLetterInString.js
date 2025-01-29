function getFirstRepeatedLetterOf(str) {
    for (const letter of str) {
        const index = str.indexOf(letter);
        if (str.slice(index + 1).includes(letter)) {
            return letter;
        }
    }
    return "none"
}

const str = "abcdefg"
console.log(`The first repeated letter in "${str}" is ${getFirstRepeatedLetterOf(str)}`);