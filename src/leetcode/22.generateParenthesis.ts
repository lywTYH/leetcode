/*
 * @lc app=leetcode.cn id=22 lang=typescript
 *
 * [22] 括号生成
 */

// @lc code=start
function generateParenthesis(n: number): string[] {
  const res: string[] = [];
  const dfs = (left: number, right: number, str: string) => {
    if (left < 0 || right < 0 || left > right) return;
    if (left === 0 && right === 0) {
      res.push(str);
      return;
    }
    dfs(left - 1, right, str + '(');
    dfs(left, right - 1, str + ')');
  };
  dfs(n, n, '');
  return res;
}
// @lc code=end
generateParenthesis(4);
// n =1  （）
// n =2  （（））  （）（）
// n = 3  （（（）））  （（）（））  （（））（）  （）（（））  （）（）（）

// n= 4  （（（（））））  （（（）（）））  （（（））（））  （（）（（）））  （（）（）（））  （（（））（））  （（）（（）））  （（）（）（））  （（））（（））  （）（（（）））  （）（（）（））  （）（（））（）  （）（）（（））  （）（）（）（）
