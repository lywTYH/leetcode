/*
 * @lc app=leetcode.cn id=1309 lang=typescript
 *
 * [1309] 解码字母到整数映射
 */

// @lc code=start
function freqAlphabets(s: string): string {
  const strMap = ' abcdefghijklmnopqrstuvwxyz';

  for (let i = 26; i >= 1; i--) {
    const reg = i < 10 ? new RegExp(`${i}`, 'g') : new RegExp(`${i}#`, 'g');
    s = s.replace(reg, strMap[i]);
  }
  return s;
  // while (s.includes('#')) {
  //   const index = s.indexOf('#');
  //   const num = Number(s.slice(index - 2, index));
  //   s = s.replace(`${num}#`, strMap[num]);
  // }
}
// @lc code=end
