/*
 * @lc app=leetcode.cn id=62 lang=typescript
 * @lcpr version=30204
 *
 * [62] 不同路径
 *
 * https://leetcode.cn/problems/unique-paths/description/
 *
 * algorithms
 * Medium (68.85%)
 * Likes:    2123
 * Dislikes: 0
 * Total Accepted:    884.1K
 * Total Submissions: 1.3M
 * Testcase Example:  '3\n7'
 *
 * 一个机器人位于一个 m x n 网格的左上角 （起始点在下图中标记为 “Start” ）。
 *
 * 机器人每次只能向下或者向右移动一步。机器人试图达到网格的右下角（在下图中标记为 “Finish” ）。
 *
 * 问总共有多少条不同的路径？
 *
 *
 *
 * 示例 1：
 *
 * 输入：m = 3, n = 7
 * 输出：28
 *
 * 示例 2：
 *
 * 输入：m = 3, n = 2
 * 输出：3
 * 解释：
 * 从左上角开始，总共有 3 条路径可以到达右下角。
 * 1. 向右 -> 向下 -> 向下
 * 2. 向下 -> 向下 -> 向右
 * 3. 向下 -> 向右 -> 向下
 *
 *
 * 示例 3：
 *
 * 输入：m = 7, n = 3
 * 输出：28
 *
 *
 * 示例 4：
 *
 * 输入：m = 3, n = 3
 * 输出：6
 *
 *
 *
 * 提示：
 *
 *
 * 1 <= m, n <= 100
 * 题目数据保证答案小于等于 2 * 10^9
 *
 *
 */

// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
function uniquePaths(m: number, n: number): number {
  const dp: number[][] = Array(m).fill(Array(n).fill(0));
  const setDpByPosition = (i: number, j: number) => {
    if (i === 0 || j === 0) {
      dp[i][j] = 1;
    } else {
      dp[i][j] = dp[i - 1][j] + dp[i][j - 1];
    }
  };
  dp.forEach((item, i) => item.forEach((_, j) => setDpByPosition(i, j)));
  return dp[m - 1][n - 1];
}
// @lc code=end
uniquePaths(3, 7);
/*
// @lcpr case=start
// 3\n7\n
// @lcpr case=end

// @lcpr case=start
// 3\n2\n
// @lcpr case=end

// @lcpr case=start
// 7\n3\n
// @lcpr case=end

// @lcpr case=start
// 3\n3\n
// @lcpr case=end

 */
