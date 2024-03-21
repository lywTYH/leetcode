/*
 * @lc app=leetcode.cn id=3014 lang=typescript
 *
 * [3014] 输入单词需要的最少按键次数 I
 */

// @lc code=start
function minimumPushes(word: string): number {
  const n = word.length;
  if (n <= 8) {
    return n;
  }
  if (n > 8 && n <= 16) {
    return 8 + (n - 8) * 2;
  }
  if (n > 16 && n <= 24) {
    return 24 + (n - 16) * 3;
  }
  return 48 + (n - 24) * 4;
}
// @lc code=end
