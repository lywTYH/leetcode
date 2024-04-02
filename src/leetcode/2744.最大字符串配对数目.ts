/*
 * @lc app=leetcode.cn id=2744 lang=typescript
 *
 * [2744] 最大字符串配对数目
 */

// @lc code=start
function maximumNumberOfStringPairs(words: string[]): number {
  let ans = 0;
  const map: Record<string, boolean> = {};
  words.forEach((word, index) => {
    if (map[word]) {
      ans++;
    }
    const key = word.split('').reverse().join('');
    map[key] = true;
  });
  return ans;
}
// @lc code=end
