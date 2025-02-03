function areDelimitersBalanced(str) {
    const delimiters = '<{[()]}>';
    const pairs = [['<', '>'], ['{', '}'], ['[', ']'], ['(', ')'], ['>', '<'], ['}', '{'], [']', '['], [')', '(']];
    const arr = [];

    for (const letter of str) {
        if (delimiters.includes(letter)) arr.push(letter);
    }

    let left = 0;
    let right = arr.length - 1;
    while (left < right) {
        if (!pairs.some(pair => pair[0] === arr[left] && pair[1] === arr[right])) {
            return false;
        }
        left++;
        right--;
    }
    return true;
}

const str1 = " { label: 'third', id: 3, children: [ [Object], [Object] ] },";
const str2 = "children: [ [Object], ]], 1, 'different Type', true ]";
const str3 = "[ { label: 'seventh', id: 7, children: [] } ]";
const str4 = " { label: 'third', id: 3, children: [[[]] [Object], [Object] ] },";

console.log(areDelimitersBalanced(str1));
console.log(areDelimitersBalanced(str2));
console.log(areDelimitersBalanced(str3));
console.log(areDelimitersBalanced(str4));