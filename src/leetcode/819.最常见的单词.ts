/*
 * @lc app=leetcode.cn id=819 lang=typescript
 *
 * [819] 最常见的单词
 */

// @lc code=start
function mostCommonWord(paragraph: string, banned: string[]): string {
  const str = paragraph.toLocaleLowerCase().replace(/[^a-z]/g, ' ');
  const arr = str.split(' ');

  const bannedMap = banned.reduce(
    (l, i) => {
      l[i] = true;
      return l;
    },
    {} as Record<string, boolean>
  );

  const map: Record<string, number> = {};
  let max = '';
  let maxNum = 0;
  arr.forEach((item) => {
    if (bannedMap[item] === undefined && item && item !== ' ') {
      map[item] !== undefined ? map[item]++ : (map[item] = 1);
      if (map[item] > maxNum) {
        maxNum = map[item];
        max = item;
      }
    }
  });

  return max;
}
// @lc code=end
