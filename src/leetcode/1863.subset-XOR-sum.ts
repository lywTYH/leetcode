/*
 * @lc app=leetcode.cn id=1863 lang=typescript
 *
 * [1863] 找出所有子集的异或总和再求和
 */
// @lc code=start
function subsetXORSum(numbers: number[]): number {
  let result = 0;
  let dp: number[] = [0];
  for (let i = 0; i < numbers.length; i++) {
    let size = dp.length;
    for (let d = 0; d < size; d++) {
      dp.push(dp[d] ^ numbers[i]);
      result += dp[dp.length - 1];
    }
  }
  return result;
}
// @lc code=end
