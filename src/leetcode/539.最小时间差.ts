/*
 * @lc app=leetcode.cn id=539 lang=typescript
 *
 * [539] 最小时间差
 */

// @lc code=start
function findMinDifference(timePoints: string[]): number {
  const len = timePoints.length;
  if (len > 1440) return 0;
  const bucket = new Array(1440 * 2).fill(0);
  timePoints.forEach((time) => {
    const [hour, minute] = time.split(':').map(Number);
    bucket[hour * 60 + minute]++;
    bucket[hour * 60 + minute + 1440]++;
  });

  let ans = 1440,
    last = -1;

  for (let i = 0; i < 1440 * 2 && ans != 0; i++) {
    if (bucket[i] == 0) continue;
    if (bucket[i] > 1) ans = 0;
    if (last !== -1) {
      ans = Math.min(ans, i - last);
    }
    last = i;
  }
  return ans;
}
// @lc code=end
