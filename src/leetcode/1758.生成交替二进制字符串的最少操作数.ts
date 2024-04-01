/*
 * @lc app=leetcode.cn id=1758 lang=typescript
 *
 * [1758] 生成交替二进制字符串的最少操作数
 */

// @lc code=start
function minOperations(s: string): number {
  let cnt = 0;
  for (let i = 0; i < s.length; i++) {
    if (Number(s[i]) != i % 2) {
      cnt += 1;
    }
  }
  return Math.min(cnt, s.length - cnt);
}
// @lc code=end
minOperations('1111');
