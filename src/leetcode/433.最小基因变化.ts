/*
 * @lc app=leetcode.cn id=433 lang=typescript
 *
 * [433] 最小基因变化
 */

// @lc code=start

function minMutation(startGene: string, endGene: string, bank: string[]): number {
  let ans = Number.MAX_VALUE;
  function backtrack(start: string, end: string, bank: string[], visited: boolean[], step: number) {
    if (step >= ans) return;
    if (start === end) {
      ans = Math.min(ans, step);
      return;
    }
    for (let i = 0, diff = 0; i < bank.length; i++, diff = 0) {
      if (visited[i]) continue;
      for (let j = 0; j < start.length; j++) {
        diff += start[j] !== bank[i][j] ? 1 : 0;
      }
      if (diff === 1) {
        visited[i] = true;
        backtrack(bank[i], end, bank, visited, step + 1);
        visited[i] = false;
      }
    }
  }
  backtrack(startGene, endGene, bank, [], 0);
  return ans == Number.MAX_VALUE ? -1 : ans;
}
// @lc code=end
