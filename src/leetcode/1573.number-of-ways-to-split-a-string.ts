/*
 * @lc app=leetcode.cn id=1573 lang=typescript
 * @lcpr version=30204
 *
 * [1573] 分割字符串的方案数
 *
 * https://leetcode.cn/problems/number-of-ways-to-split-a-string/description/
 *
 * algorithms
 * Medium (32.16%)
 * Likes:    20
 * Dislikes: 0
 * Total Accepted:    8.1K
 * Total Submissions: 25.1K
 * Testcase Example:  '"10101"'
 *
 * 给你一个二进制串 s  （一个只包含 0 和 1 的字符串），我们可以将 s 分割成 3 个 非空 字符串 s1, s2, s3 （s1 + s2 +
 * s3 = s）。
 *
 * 请你返回分割 s 的方案数，满足 s1，s2 和 s3 中字符 '1' 的数目相同。
 *
 * 由于答案可能很大，请将它对 10^9 + 7 取余后返回。
 *
 *
 *
 * 示例 1：
 *
 * 输入：s = "10101"
 * 输出：4
 * 解释：总共有 4 种方法将 s 分割成含有 '1' 数目相同的三个子字符串。
 * "1|010|1"
 * "1|01|01"
 * "10|10|1"
 * "10|1|01"
 *
 *
 * 示例 2：
 *
 * 输入：s = "1001"
 * 输出：0
 *
 *
 * 示例 3：
 *
 * 输入：s = "0000"
 * 输出：3
 * 解释：总共有 3 种分割 s 的方法。
 * "0|0|00"
 * "0|00|0"
 * "00|0|0"
 *
 *
 * 示例 4：
 *
 * 输入：s = "100100010100110"
 * 输出：12
 *
 *
 *
 *
 * 提示：
 *
 *
 * s[i] == '0' 或者 s[i] == '1'
 * 3 <= s.length <= 10^5
 *
 *
 */

// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
function numWays(s: string): number {
  const flagArray = s
    .split('')
    .map((item, index) => {
      if (item === '1') {
        return index;
      } else {
        return -1;
      }
    })
    .filter((item) => item !== -1);
  if (flagArray.length === 0) {
    return s.length === 3 ? 1 : (((s.length - 1) * (s.length - 2)) / 2) % 1000000007;
  }
  if (flagArray.length % 3 !== 0) {
    return 0;
  }
  const splitCount = flagArray.length / 3;
  const first = flagArray[splitCount] - flagArray[splitCount - 1];
  const second = flagArray[splitCount * 2] - flagArray[splitCount * 2 - 1];
  return (first * second) % 1000000007;
}
// @lc code=end

/*
// @lcpr case=start
// "10101"\n
// @lcpr case=end

// @lcpr case=start
// "1001"\n
// @lcpr case=end

// @lcpr case=start
// "0000"\n
// @lcpr case=end

// @lcpr case=start
// "100100010100110"\n
// @lcpr case=end

 */
numWays('0100100010');
