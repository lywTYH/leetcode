/*
 * @lc app=leetcode.cn id=3042 lang=typescript
 *
 * [3042] 统计前后缀下标对 I
 */

// @lc code=start
const isPrefixAndSuffix = (word1: string, word2: string): boolean => {
  return word1.startsWith(word2) && word1.endsWith(word2);
};

enum NextDirection {
  left,
  right,
  down,
  up,
}
function countPrefixSuffixPairs(words: string[]): number {
  let count = 0;
  for (let i = 0; i < words.length; i++) {
    for (let j = i + 1; j < words.length; j++) {
      if (isPrefixAndSuffix(words[j], words[i])) {
        count++;
      }
    }
  }
  return count;
}
// @lc code=end
