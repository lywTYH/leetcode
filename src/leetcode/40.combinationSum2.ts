/*
 * @lc app=leetcode.cn id=40 lang=typescript
 *
 * [40] 组合总和 II
 */

// @lc code=start
function combinationSum2(candidates: number[], target: number): number[][] {
  const ans: number[][] = [];

  candidates = candidates.sort((a, b) => a - b);
  const backtrack = (target: number, start: number, states: number[]) => {
    if (target < 0) {
      return;
    }
    if (target === 0) {
      ans.push(states);
      return;
    }
    for (let i = start; i < candidates.length; i++) {
      if (target - candidates[i] >= 0) {
        backtrack(target - candidates[i], i + 1, [...states, candidates[i]]);
      }
      while (candidates[i] === candidates[i + 1]) {
        i++;
      }
    }
  };
  backtrack(target, 0, []);
  return ans;
}
// @lc code=end
const as = combinationSum2([2, 5, 2, 1, 2], 5);
console.log(as);
//  0  1  2  3
// [1, 1, 2, 5, 6, 7, 10];
//  1 1 6
//  1 2 5
//  1 5
