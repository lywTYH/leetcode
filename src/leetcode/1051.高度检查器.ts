/*
 * @lc app=leetcode.cn id=1051 lang=typescript
 *
 * [1051] 高度检查器
 */

// @lc code=start
function heightChecker(heights: number[]): number {
  const bucket: number[] = new Array(101).fill(0);
  for (const i of heights) {
    bucket[i]++;
  }
  let ans = 0;
  for (let i = 1, j = 0; i < bucket.length; i++) {
    while (bucket[i]-- > 0) {
      if (heights[j++] !== i) ans++;
    }
  }
  return ans;
}
// @lc code=end
