/*
 * @lc app=leetcode.cn id=1828 lang=typescript
 *
 * [1828] 统计一个圆中点的数目
 */

// @lc code=start
const isInside = (x: number, y: number, query: number[]) => {
  const [x1, y1, r] = query;
  return Math.pow(x - x1, 2) + Math.pow(y - y1, 2) <= Math.pow(r, 2);
};
function countPoints(points: number[][], queries: number[][]): number[] {
  return queries.map(
    (query) => points.filter((point) => isInside(point[0], point[1], query)).length
  );
}
// @lc code=end
