/*
 * @lc app=leetcode.cn id=2697 lang=typescript
 *
 * [2697] 字典序最小回文串
 */

// @lc code=start
function makeSmallestPalindrome(s: string): string {
  const n = s.length;
  let left = 0;
  let right = n - 1;
  const tmp = s.split('');
  while (left < right) {
    if (tmp[left] !== tmp[right]) {
      if (tmp[right].charCodeAt(0) < tmp[left].charCodeAt(0)) {
        tmp[left] = tmp[right];
      } else {
        tmp[right] = tmp[left];
      }
    }
    left++;
    right--;
  }
  return tmp.join('');
}
// @lc code=end
