function matrix(n) {
    let spiralMatrix = [];
    for (let i = 0; i < n; i++) {
        spiralMatrix.push([]);
    }

    let count = 1;
    let startRow = 0, startCol = 0;
    let endRow = 0, endCol = n - 1;

    while (startCol <= endCol && startRow <= endRow) {
        // Top
        for (let i = startCol; i <= endCol; i++) {
            spiralMatrix[startRow][i] = count;
            count++;
        }
        startRow++;

        // Right
        for (let i = startRow; i <= endRow; i++) {
            spiralMatrix[i][endCol] = count;
            count++;
        }
        endCol--;

        // Bottom
        for (let i = endCol; i >= startCol; i--) {
            spiralMatrix[endRow][i] = count;
            count++;
        }
        endRow--;
        // start
        for (let i = endRow; i >= startRow; i--) {
            spiralMatrix[i][startCol] = count;
            count++;
        }
        startCol++;

    }

    return spiralMatrix;

}

console.log(matrixSpiral(3));

// [[1,2,3,4],
//  [12,13,14,5],
//  [11,16,15,6], 
//  [10,9,8,7]]