class Solution {
    public static int[][] createMatrix(int rows, int cells) {
        int[][] matrix = new int[rows][cells];
        for (int i = 0; i < rows; i++) {
            matrix[i] = new int[cells];
        }
        return matrix;
    }
}