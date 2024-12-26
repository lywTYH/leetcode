/*
 * @lc app=leetcode.cn id=63 lang=typescript
 * @lcpr version=30204
 *
 * [63] 不同路径 II
 *
 * https://leetcode.cn/problems/unique-paths-ii/description/
 *
 * algorithms
 * Medium (41.72%)
 * Likes:    1313
 * Dislikes: 0
 * Total Accepted:    551.5K
 * Total Submissions: 1.3M
 * Testcase Example:  '[[0,0,0],[0,1,0],[0,0,0]]'
 *
 * 给定一个 m x n 的整数数组 grid。一个机器人初始位于 左上角（即 grid[0][0]）。机器人尝试移动到 右下角（即 grid[m -
 * 1][n - 1]）。机器人每次只能向下或者向右移动一步。
 *
 * 网格中的障碍物和空位置分别用 1 和 0 来表示。机器人的移动路径中不能包含 任何 有障碍物的方格。
 *
 * 返回机器人能够到达右下角的不同路径数量。
 *
 * 测试用例保证答案小于等于 2 * 10^9。
 *
 *
 *
 * 示例 1：
 *
 * 输入：obstacleGrid = [[0,0,0],[0,1,0],[0,0,0]]
 * 输出：2
 * 解释：3x3 网格的正中间有一个障碍物。
 * 从左上角到右下角一共有 2 条不同的路径：
 * 1. 向右 -> 向右 -> 向下 -> 向下
 * 2. 向下 -> 向下 -> 向右 -> 向右
 *
 *
 * 示例 2：
 *
 * 输入：obstacleGrid = [[0,1],[0,0]]
 * 输出：1
 *
 *
 *
 *
 * 提示：
 *
 *
 * m == obstacleGrid.length
 * n == obstacleGrid[i].length
 * 1 <= m, n <= 100
 * obstacleGrid[i][j] 为 0 或 1
 *
 *
 */

// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
function uniquePathsWithObstacles(obstacleGrid: number[][]): number {
  const m = obstacleGrid.length;
  const n = obstacleGrid[0].length;
  const dp: number[][] = Array(m).fill(Array(n).fill(0));
  const setDpByPosition = (i: number, j: number) => {
    if (obstacleGrid[i][j] === 1) {
      dp[i][j] = 0;
      return;
    }
    if (i === 0 && j === 0) {
      dp[i][j] = 1;
      return;
    }
    if (i === 0 || j === 0) {
      dp[i][j] = i > 0 ? dp[i - 1][j] : dp[i][j - 1];
    } else {
      dp[i][j] = dp[i - 1][j] + dp[i][j - 1];
    }
  };
  dp.forEach((item, i) => item.forEach((_, j) => setDpByPosition(i, j)));
  return dp[m - 1][n - 1];
}
// @lc code=end
uniquePathsWithObstacles([[1]]);
/*
// @lcpr case=start
// [[0,0,0],[0,1,0],[0,0,0]]\n
// @lcpr case=end

// @lcpr case=start
// [[0,1],[0,0]]\n
// @lcpr case=end

 */
