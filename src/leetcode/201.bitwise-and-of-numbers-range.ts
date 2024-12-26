/*
 * @lc app=leetcode.cn id=201 lang=typescript
 * @lcpr version=30204
 *
 * [201] 数字范围按位与
 *
 * https://leetcode.cn/problems/bitwise-and-of-numbers-range/description/
 *
 * algorithms
 * Medium (55.04%)
 * Likes:    533
 * Dislikes: 0
 * Total Accepted:    101.7K
 * Total Submissions: 184.8K
 * Testcase Example:  '5\n7'
 *
 * 给你两个整数 left 和 right ，表示区间 [left, right] ，返回此区间内所有数字 按位与 的结果（包含 left 、right
 * 端点）。
 *
 *
 *
 * 示例 1：
 *
 * 输入：left = 5, right = 7
 * 输出：4
 *
 *
 * 示例 2：
 *
 * 输入：left = 0, right = 0
 * 输出：0
 *
 *
 * 示例 3：
 *
 * 输入：left = 1, right = 2147483647
 * 输出：0
 *
 *
 *
 *
 * 提示：
 *
 *
 * 0 <= left <= right <= 2^31 - 1
 *
 *
 */

// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
function rangeBitwiseAnd(left: number, right: number): number {
  if (left === right) return left;
  if (left === 0) return 0;
  let shift = 0;
  while (left < right) {
    right = right >> 1;
    left = left >> 1;
    ++shift;
  }
  return left << shift;
}
// @lc code=end
console.log(rangeBitwiseAnd(3, 4));
/*
// @lcpr case=start
// 5\n7\n
// @lcpr case=end

// @lcpr case=start
// 0\n0\n
// @lcpr case=end

// @lcpr case=start
// 1\n2147483647\n
// @lcpr case=end

 */
//  10
//  11   1
// 100  10
