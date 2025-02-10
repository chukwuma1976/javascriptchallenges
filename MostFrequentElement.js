function findMostFrequentElement(arr) {
    if (arr.length === 0)
        return "no elements present";
    if (arr.length <= 2)
        return arr[0];

    let elements = {};
    let mostFrequent = arr[0];

    for (let i = 0; i < arr.length; i++) {
        if (!elements[arr[i]]) {
            elements[arr[i]] = 1;
        } else elements[arr[i]]++
        if (i > 0 && elements[arr[i]] > elements[mostFrequent]) {
            mostFrequent = arr[i];
        }
    }
    return mostFrequent;
}

console.log(findMostFrequentElement([1, 2, 3, 4, 5, 1, 4, 9, 3, 6, 9, 9]));
console.log(findMostFrequentElement([]));
console.log(findMostFrequentElement([1, 2]));
console.log(findMostFrequentElement([2]));
console.log(findMostFrequentElement([true, true, true, false, false, true]));
console.log(findMostFrequentElement("mirror mirror on the wall who is the fairest of them all".split(' ')));
