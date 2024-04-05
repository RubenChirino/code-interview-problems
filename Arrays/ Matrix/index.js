function createMatrix(rows, cells) {
    const arr = [];
    for (let i = 0; i < rows; i++) {
        arr.push(new Array(cells));
    }
    return arr;
}