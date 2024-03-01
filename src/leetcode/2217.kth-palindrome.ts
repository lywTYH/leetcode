/*
 * @lc app=leetcode.cn id=2217 lang=typescript
 *
 * [2217] 找到指定长度的回文数
 */

// @lc code=start
function kthPalindrome(queries: number[], intLength: number): number[] {
  const n = (intLength - 1) >> 1;
  const base = 10 ** n; //减1 是为了 当第一位的加1；
  const res = new Array(queries.length).fill(-1);

  for (let i = 0; i < queries.length; i++) {
    const index = queries[i]; //排第几位；
    const pre = (base + index - 1).toString(); // 回文串前半部分
    let next = '';
    if (intLength % 2 === 1) {
      //如果回文串长度为单数, 不取最后一个字符，
      next = pre.slice(0, -1).split('').reverse().join('');
    } else {
      //如果回文串长度为偶数, 前半部分全部反转，
      next = pre.slice().split('').reverse().join('');
    }
    const ans = pre + next; //前半部分和后半部分拼接；
    if (ans.length === intLength) {
      res[i] = parseInt(ans);
    }
  }
  return res;
}
// @lc code=end
