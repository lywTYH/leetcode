/*
 * @lc app=leetcode.cn id=3019 lang=typescript
 *
 * [3019] 按键变更的次数
 */

// @lc code=start
function countKeyChanges(s: string): number {
  let count = 0;
  for (let i = 1; i < s.length; i++) {
    const diff = s[i].charCodeAt(0) - s[i - 1].charCodeAt(0);
    if (diff !== 0 && Math.abs(diff) !== 32) {
      count++;
    }
  }
  return count;
}
// @lc code=end
