/*
 * @lc app=leetcode.cn id=73 lang=typescript
 *
 * [73] 矩阵置零
 */

// @lc code=start
/**
 Do not return anything, modify matrix in-place instead.
 */
function setZeroes(matrix: number[][]): void {
  const rowFlag = Array(matrix.length).fill(false);
  const colFlag = Array(matrix[0].length).fill(false);

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (matrix[i][j] === 0) {
        rowFlag[i] = true;
        colFlag[j] = true;
      }
    }
  }

  for (let i = 0; i < rowFlag.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (rowFlag[i] || colFlag[j]) {
        matrix[i][j] = 0;
      }
    }
  }
}
// @lc code=end
