function findLongestSubstring(str) {
    const nonRepeat = new Set(str);

    let size = nonRepeat.size
    while (size > 1) {
        let left = 0;
        let right = size;
        while (right < str.length) {
            const substr = str.slice(left, right);
            const numOfUniqueLtrs = new Set(substr).size;
            if (numOfUniqueLtrs === substr.length) return numOfUniqueLtrs;
            left++;
            right++;
        }
        size--
    }

}

console.log(findLongestSubstring('abcabcabcdefabcd'));