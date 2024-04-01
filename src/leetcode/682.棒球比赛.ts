/*
 * @lc app=leetcode.cn id=682 lang=typescript
 *
 * [682] 棒球比赛
 */

// @lc code=start
function calPoints(operations: string[]): number {
  const ans: number[] = [];
  let sum = 0;
  for (let i = 0; i < operations.length; i++) {
    let nextNumber = 0;
    switch (operations[i]) {
      case 'C':
        nextNumber = -(ans.pop() || 0);
        break;
      case 'D':
        nextNumber = ans[ans.length - 1] * 2;
        ans.push(nextNumber);
        break;
      case '+':
        nextNumber = ans[ans.length - 1] + ans[ans.length - 2];
        ans.push(nextNumber);
        break;
      default:
        nextNumber = parseInt(operations[i]);
        ans.push(nextNumber);
    }
    sum = sum + nextNumber;
  }
  return sum;
}
// @lc code=end
calPoints(['5', '2', 'C', 'D', '+']);
