/*
 * @lc app=leetcode.cn id=190 lang=typescript
 *
 * [190] 颠倒二进制位
 */

// @lc code=start
function reverseBits(n: number): number {
  const sign = n < 0 ? -1 : 1;
  n = sign * n;
  let result = 0;
  for (let i = 0; i < 32; i++) {
    result = (result << 1) + (n & 1);
    n >>= 1;
  }
  result >>>= 0;
  return result * sign;
}
// @lc code=end
