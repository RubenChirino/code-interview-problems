function maxIncreaseKeepingSkyline(grid) {
    const N = grid.length;
    const rowMaxes = new Array(N).fill(0);
    const colMaxes = new Array(N).fill(0);

    for (let r = 0; r < N; ++r) {
        for (let c = 0; c < N; ++c) {
            rowMaxes[r] = Math.max(rowMaxes[r], grid[r][c]);
            colMaxes[c] = Math.max(colMaxes[c], grid[r][c]);
        }
    }

    let ans = 0;
    for (let r = 0; r < N; ++r) {
        for (let c = 0; c < N; ++c) {
            ans += Math.min(rowMaxes[r], colMaxes[c]) - grid[r][c];
        }
    }

    return ans;
}

const grid = [
    [3, 0, 8, 4],
    [2, 4, 5, 7],
    [9, 2, 6, 3],
    [0, 3, 1, 0]
];

console.log(maxIncreaseKeepingSkyline(grid));
