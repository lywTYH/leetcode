/*
 * @lc app=leetcode.cn id=74 lang=typescript
 * @lcpr version=30204
 *
 * [74] 搜索二维矩阵
 *
 * https://leetcode.cn/problems/search-a-2d-matrix/description/
 *
 * algorithms
 * Medium (49.75%)
 * Likes:    931
 * Dislikes: 0
 * Total Accepted:    416.2K
 * Total Submissions: 835.9K
 * Testcase Example:  '[[1,3,5,7],[10,11,16,20],[23,30,34,60]]\n3'
 *
 * 给你一个满足下述两条属性的 m x n 整数矩阵：
 *
 *
 * 每行中的整数从左到右按非严格递增顺序排列。
 * 每行的第一个整数大于前一行的最后一个整数。
 *
 *
 * 给你一个整数 target ，如果 target 在矩阵中，返回 true ；否则，返回 false 。
 *
 *
 *
 * 示例 1：
 *
 * 输入：matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]], target = 3
 * 输出：true
 *
 *
 * 示例 2：
 *
 * 输入：matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]], target = 13
 * 输出：false
 *
 *
 *
 *
 * 提示：
 *
 *
 * m == matrix.length
 * n == matrix[i].length
 * 1 <= m, n <= 100
 * -10^4 <= matrix[i][j], target <= 10^4
 *
 *
 */

// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
function searchMatrix(matrix: number[][], target: number): boolean {
  if (matrix.length === 0) return false;
  if (matrix[0][0] > target) {
    return false;
  }
  if (matrix[matrix.length - 1][matrix[0].length - 1] < target) {
    return false;
  }
  const row = matrix.length;
  const col = matrix[0].length;
  let _row = 0;
  let _col = col - 1;
  while (_row < row && _col >= 0) {
    if (matrix[_row][_col] === target) {
      return true;
    } else if (matrix[_row][_col] < target) {
      _row++;
    } else {
      _col--;
    }
  }
  return false;
}
// @lc code=end

/*
// @lcpr case=start
// [[1,3,5,7],[10,11,16,20],[23,30,34,60]]\n3\n
// @lcpr case=end

// @lcpr case=start
// [[1,3,5,7],[10,11,16,20],[23,30,34,60]]\n13\n
// @lcpr case=end

 */
