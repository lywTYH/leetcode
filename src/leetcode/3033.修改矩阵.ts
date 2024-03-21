/*
 * @lc app=leetcode.cn id=3033 lang=typescript
 *
 * [3033] 修改矩阵
 */
// @lc code=start
function modifiedMatrix(matrix: number[][]): number[][] {
  const colLength = matrix[0].length;
  for (let i = 0; i < colLength; i++) {
    const replaceIndex: number[] = [];
    let max = -1;
    for (let j = 0; j < matrix.length; j++) {
      if (matrix[j][i] === -1) {
        replaceIndex.push(j);
      }
      max = max > matrix[j][i] ? max : matrix[j][i];
    }
    if (replaceIndex.length > 0) {
      for (let index = 0; index < replaceIndex.length; index++) {
        matrix[replaceIndex[index]][i] = max;
      }
    }
  }
  return matrix;
}
// @lc code=end
