function longestSubsequence(arr) {
    const temp = [...arr]
    const sorted = temp.sort((a, b) => a - b);
    let subSeq = [];
    let pointer = 0;

    for (let i = 0; i < arr.length; i++) {
        for (let j = i; j < sorted.length; j++) {
            if (sorted[i] === arr[j]) {
                subSeq.push(sorted[i]);
                continue;
            }
        }
    }
    console.log(subSeq);
    return subSeq;
}

const sorted1 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]
const numbers = [0, 8, 4, 12, 2, 10, 6, 14, 1, 9, 5, 13, 3, 11, 7, 15]

longestSubsequence(numbers);