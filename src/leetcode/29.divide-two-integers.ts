/*
 * @lc app=leetcode.cn id=29 lang=typescript
 * @lcpr version=30204
 *
 * [29] 两数相除
 *
 * https://leetcode.cn/problems/divide-two-integers/description/
 *
 * algorithms
 * Medium (22.31%)
 * Likes:    1231
 * Dislikes: 0
 * Total Accepted:    239.9K
 * Total Submissions: 1.1M
 * Testcase Example:  '10\n3'
 *
 * 给你两个整数，被除数 dividend 和除数 divisor。将两数相除，要求 不使用 乘法、除法和取余运算。
 *
 * 整数除法应该向零截断，也就是截去（truncate）其小数部分。例如，8.345 将被截断为 8 ，-2.7335 将被截断至 -2 。
 *
 * 返回被除数 dividend 除以除数 divisor 得到的 商 。
 *
 * 注意：假设我们的环境只能存储 32 位 有符号整数，其数值范围是 [−2^31,  2^31 − 1] 。本题中，如果商 严格大于 2^31 − 1
 * ，则返回 2^31 − 1 ；如果商 严格小于 -2^31 ，则返回 -2^31^ 。
 *
 *
 *
 * 示例 1:
 *
 * 输入: dividend = 10, divisor = 3
 * 输出: 3
 * 解释: 10/3 = 3.33333.. ，向零截断后得到 3 。
 *
 * 示例 2:
 *
 * 输入: dividend = 7, divisor = -3
 * 输出: -2
 * 解释: 7/-3 = -2.33333.. ，向零截断后得到 -2 。
 *
 *
 *
 * 提示：
 *
 *
 * -2^31 <= dividend, divisor <= 2^31 - 1
 * divisor != 0
 *
 *
 */

// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
function divide(dividend: number, divisor: number): number {
  if (dividend === 0 || divisor === 0) return 0;
  if (divisor === 1) return dividend;

  const MAX_VALUE = 2 ** 31 - 1,
    MIN_VALUE = -(2 ** 31);

  if (dividend === MIN_VALUE) {
    if (divisor === 1) {
      return MIN_VALUE;
    }
    if (divisor === -1) {
      return MAX_VALUE;
    }
  }
  if (divisor === MIN_VALUE) {
    return dividend === MIN_VALUE ? 1 : 0;
  }

  if (divisor === -1) {
    if (dividend > -(2 ** 31)) return -dividend;
    return 2 ** 31 - 1;
  }
  let res  =0;
  if (dividend > 0 && divisor > 0) {
    while (dividend >= divisor) {
      dividend -= divisor;
      res++;
    }
    return res;
  }
  if (dividend < 0 && divisor < 0) {
    while (dividend <= divisor) {
      dividend -= divisor;
      res++;
    }
    return res;
  }
  if (dividend > 0 && divisor < 0) {
    while (dividend >= -divisor) {
      dividend += divisor;
      res++;
    }
    return -res;
  }
  if (dividend < 0 && divisor > 0) {
    while (dividend <= -divisor) {
      dividend += divisor;
      res++;
    }
    return -res;
  }
  return res;
}
// @lc code=end

/*
// @lcpr case=start
// 10\n3\n
// @lcpr case=end

// @lcpr case=start
// 7\n-3\n
// @lcpr case=end

 */
