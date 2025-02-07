function transposeMatrix(matrix) {
    const width = Math.min(matrix[0].length, matrix.length);
    const length = Math.max(matrix[0].length, matrix.length);

    const newMatrix = [];
    for (let i = 0; i < length; i++) {
        newMatrix[i] = [];
        for (let j = 0; j < width; j++) {
            newMatrix[i][j] = matrix[j][i];
        }
    }

    return newMatrix;
}

function printMatrix(matrix) {
    matrix.forEach(e => console.log(`[${e.toString()}]`));
}

const matrix = [
    [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    [2, 0, 0, 0, 0, 0, 0, 0, 0, 8],
    [4, 0, 0, 0, 0, 0, 0, 0, 0, 6],
    [6, 0, 0, 0, 0, 0, 0, 0, 0, 4],
    [8, 0, 0, 0, 0, 0, 0, 0, 0, 2],
    [10, 9, 8, 7, 6, 5, 4, 3, 2, 1],
]

printMatrix(matrix);
console.log('\n*********************\n');
printMatrix(transposeMatrix(matrix));