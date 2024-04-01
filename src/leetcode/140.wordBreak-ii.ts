/*
 * @lc app=leetcode.cn id=140 lang=typescript
 *
 * [140] 单词拆分 II
 */

// @lc code=start
const backtrack = (
  s: string,
  length: number,
  wordSet: Set<string>,
  index: number,
  map: Map<number, string[][]>
) => {
  if (map.has(index)) {
    return map.get(index)!;
  }
  const wordBreaks: string[][] = [];
  if (index === length) {
    wordBreaks.push([]);
  }
  for (let i = index + 1; i <= length; i++) {
    const word = s.substring(index, i);
    if (wordSet.has(word)) {
      const nextWordBreaks = backtrack(s, length, wordSet, i, map);
      nextWordBreaks.forEach((nextWordBreak) => {
        const wordBreak = [word, ...nextWordBreak];
        wordBreaks.push(wordBreak);
      });
    }
  }
  map.set(index, wordBreaks);
  return wordBreaks;
};
function wordBreak(s: string, wordDict: string[]): string[] {
  const map = new Map<number, string[][]>();
  const wordBreaks = backtrack(s, s.length, new Set(wordDict), 0, map);
  const breakList = [];
  for (const wordBreak of wordBreaks) {
    breakList.push(wordBreak.join(' '));
  }
  return breakList;
}
// @lc code=end
wordBreak('catsanddog', ['cat', 'cats', 'and', 'sand', 'dog']);
