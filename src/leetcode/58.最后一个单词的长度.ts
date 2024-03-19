/*
 * @lc app=leetcode.cn id=58 lang=typescript
 *
 * [58] 最后一个单词的长度
 */

// @lc code=start
function lengthOfLastWord(s: string): number {
  let count = 0;
  let i = s.length - 1;
  while (i >= 0 && s[i] === ' ') {
    i--;
  }
  while (i >= 0 && s[i] !== ' ') {
    count++;
    i--;
  }
  return count;
}
// @lc code=end
