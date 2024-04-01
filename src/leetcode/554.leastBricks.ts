/*
 * @lc app=leetcode.cn id=554 lang=typescript
 *
 * [554] 砖墙
 */

// @lc code=start
function leastBricks(wall: number[][]): number {
  const map = new Map<number, number>();
  for (const widths of wall) {
    let sum = 0;
    for (let i = 0; i < widths.length - 1; i++) {
      sum += widths[i];
      map.set(sum, (map.get(sum) || 0) + 1);
    }
  }
  let max = 0;
  for (const [_, count] of map) {
    max = Math.max(max, count);
  }
  return wall.length - max;
}
// @lc code=end
leastBricks([
  [1, 2, 2, 1],
  [3, 1, 2],
  [1, 3, 2],
  [2, 4],
  [3, 1, 2],
  [1, 3, 1, 1],
]);
