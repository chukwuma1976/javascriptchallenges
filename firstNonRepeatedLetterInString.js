function getFirstNonRepeatedLetterOf(str) {
    const lowerCaseStr = str.toLowerCase();
    for (const letter of lowerCaseStr) {
        const index = lowerCaseStr.indexOf(letter);
        if (!lowerCaseStr.slice(index + 1).includes(letter)) {
            return letter;
        }
    }
    return "none"
}

const str = "abcdefgabc"
console.log(`The first non repeated letter in "${str}" is ${getFirstNonRepeatedLetterOf(str)}`);