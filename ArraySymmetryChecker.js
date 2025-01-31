function checkArraySymmetry(arr) {
    let left = 0;
    let right = arr.length - 1;
    while (left < right) {
        if (arr[left] !== arr[right]) {
            return false
        }
        left++;
        right--;
    }
    return true;
}

console.log(checkArraySymmetry([0, 0, 0, 0, 0]));
console.log(checkArraySymmetry([1, 2, 3, 4, 5]));
console.log(checkArraySymmetry([]));
console.log(checkArraySymmetry([0, 0, 1, 0, 0]));
console.log(checkArraySymmetry([0, 0, 0, 0, 1]));