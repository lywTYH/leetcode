/*
 * @lc app=leetcode.cn id=77 lang=typescript
 *
 * [77] 组合
 */

// @lc code=start
function combine(n: number, k: number): number[][] {
  const ans: number[][] = [];
  const backtrack = (start: number, states: number[]) => {
    if (states.length === k) {
      ans.push(states);
      return;
    }
    for (let i = start; i <= n; i++) {
      backtrack(i + 1, [...states, i]);
    }
  };
  backtrack(1, []);
  return ans;
}
// @lc code=end
combine(1, 1);
