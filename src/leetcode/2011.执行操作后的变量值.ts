/*
 * @lc app=leetcode.cn id=2011 lang=typescript
 *
 * [2011] 执行操作后的变量值
 */

// @lc code=start
function finalValueAfterOperations(operations: string[]): number {
  let x = 0;
  operations.forEach((op) => {
    if (op.includes('++')) {
      x++;
    } else {
      x--;
    }
  });
  return x;
}
// @lc code=end
