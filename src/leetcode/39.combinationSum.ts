/*
 * @lc app=leetcode.cn id=39 lang=typescript
 *
 * [39] 组合总和
 */

// @lc code=start
function combinationSum(candidates: number[], target: number): number[][] {
  const ans: number[][] = [];

  const backtrack = (target: number, start: number, res: number[]) => {
    if (target < 0) {
      return;
    }
    if (target === 0) {
      ans.push(res);
      return;
    }
    for (let i = start; i < candidates.length; i++) {
      backtrack(target - candidates[i], i, [...res, candidates[i]]);
    }
  };

  backtrack(target, 0, []);
  return ans;
}
// @lc code=end
combinationSum([8, 7, 4, 3], 11);
