/*
 * @lc app=leetcode.cn id=1701 lang=typescript
 *
 * [1701] 平均等待时间
 */

// @lc code=start
function averageWaitingTime(customers: number[][]): number {
  let waitingTime = 0;
  let currentTime = 0;
  for (const [arrival, time] of customers) {
    if (currentTime < arrival) {
      currentTime = arrival;
    }
    currentTime += time;
    waitingTime += currentTime - arrival;
  }
  return waitingTime / customers.length;
}
// @lc code=end
