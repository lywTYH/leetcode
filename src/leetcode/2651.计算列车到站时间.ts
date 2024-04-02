/*
 * @lc app=leetcode.cn id=2651 lang=typescript
 *
 * [2651] 计算列车到站时间
 */

// @lc code=start
function findDelayedArrivalTime(arrivalTime: number, delayedTime: number): number {
  return (arrivalTime + delayedTime) % 24;
}
// @lc code=end
