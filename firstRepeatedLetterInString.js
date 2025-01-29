function getFirstRepeatedLetterOf(str) {
    const lowerCaseStr = str.toLowerCase();
    for (const letter of lowerCaseStr) {
        const index = lowerCaseStr.indexOf(letter);
        if (lowerCaseStr.slice(index + 1).includes(letter)) {
            return letter;
        }
    }
    return "none"
}

const str = "abcdefgab"
console.log(`The first repeated letter in "${str}" is ${getFirstRepeatedLetterOf(str)}`);