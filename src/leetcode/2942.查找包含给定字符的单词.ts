/*
 * @lc app=leetcode.cn id=2942 lang=typescript
 *
 * [2942] 查找包含给定字符的单词
 */

// @lc code=start
function findWordsContaining(words: string[], x: string): number[] {
  const ans = [];
  for (let i = 0; i < words.length; i++) {
    if (words[i].includes(x)) {
      ans.push(i);
    }
  }
  return ans;
}
// @lc code=end
