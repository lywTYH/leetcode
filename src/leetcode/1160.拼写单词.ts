/*
 * @lc app=leetcode.cn id=1160 lang=typescript
 *
 * [1160] 拼写单词
 */

// @lc code=start
function countCharacters(words: string[], chars: string): number {
  const charsArr = new Array(26).fill(0);
  for (let i = 0; i < chars.length; i++) {
    charsArr[chars.charCodeAt(i) - 97]++;
  }
  return words.reduce((acc, word) => {
    const copyArray = [...charsArr];
    for (let i = 0; i < word.length; i++) {
      const count = copyArray[word.charCodeAt(i) - 97] || 0;
      if (count === 0) {
        return acc;
      }
      copyArray[word.charCodeAt(i) - 97] = count - 1;
    }
    return acc + word.length;
  }, 0);
}
// @lc code=end
