function countUniqueElements(arr) {
    const unique = new Set(arr);
    return new Array(...unique).length;
}

console.log(countUniqueElements([1, 1, 2, 2, 3, 3, 3]));
console.log(countUniqueElements([1, 1, 2, 2, 3, 3, 3, 4, 5, 6, 6, 6, 6, 9, 99]));