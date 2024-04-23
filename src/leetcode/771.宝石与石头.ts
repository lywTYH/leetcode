/*
 * @lc app=leetcode.cn id=771 lang=typescript
 *
 * [771] 宝石与石头
 */

// @lc code=start
function numJewelsInStones(jewels: string, stones: string): number {
  const jewelsSet = new Set(jewels);
  let ans = 0;
  for (let i = 0; i < stones.length; i++) {
    if (jewelsSet.has(stones.charAt(i))) {
      ans++;
    }
  }
  return ans;
}
// @lc code=end
