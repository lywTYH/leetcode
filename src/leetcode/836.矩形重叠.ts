/*
 * @lc app=leetcode.cn id=836 lang=typescript
 *
 * [836] 矩形重叠
 */

// @lc code=start
function isRectangleOverlap(rec1: number[], rec2: number[]): boolean {
  const [x1, y1, x2, y2] = rec1;
  const [x3, y3, x4, y4] = rec2;
  /**
        max(x1, x3) < x < min(x2, x4)
        max(y1, y3) < y < min(y2, y4)
     */
  return Math.max(x1, x3) < Math.min(x2, x4) && Math.max(y1, y3) < Math.min(y2, y4);
}
// @lc code=end
