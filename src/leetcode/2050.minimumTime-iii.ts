/*
 * @lc app=leetcode.cn id=2050 lang=typescript
 *
 * [2050] 并行课程 III
 */

// @lc code=start
function minimumTime(n: number, relations: number[][], time: number[]): number {
  const preList: number[][] = Array(n)
    .fill(null)
    .map(() => []);
  const deg: number[] = Array(n).fill(0);
  for (let i = 0; i < relations.length; i++) {
    const [cur, next] = relations[i];
    preList[cur - 1].push(next - 1);
    deg[next - 1]++;
  }
  const dp: Array<number> = Array(n).fill(0);
  const queue: Array<number> = [];
  deg.forEach((v, i) => v === 0 && queue.push(i));
  while (queue.length > 0) {
    const popEle = queue.pop();
    if (popEle === undefined) {
      continue;
    }
    dp[popEle] += time[popEle];
    preList[popEle].forEach((next) => {
      dp[next] = Math.max(dp[next], dp[popEle]);
      deg[next]--;
      if (deg[next] === 0) {
        queue.push(next);
      }
    });
  }
  return Math.max(...dp);
}
// @lc code=end

minimumTime(
  3,
  [
    [1, 3],
    [2, 3],
  ],
  [3, 2, 5]
);
