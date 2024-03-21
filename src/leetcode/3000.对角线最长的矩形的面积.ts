/*
 * @lc app=leetcode.cn id=3000 lang=typescript
 *
 * [3000] 对角线最长的矩形的面积
 */

// @lc code=start
function areaOfMaxDiagonal(dimensions: number[][]): number {
  let ans = 0,
    maxL = 0;
  for (let i = 0; i < dimensions.length; i++) {
    const x = dimensions[i][0];
    const y = dimensions[i][1];
    const tempL = x * x + y * y;
    if (maxL < tempL) {
      maxL = tempL;
      ans = x * y;
    }
    if (maxL === tempL) {
      ans = Math.max(ans, x * y);
    }
  }
  return ans;
}
// @lc code=end
