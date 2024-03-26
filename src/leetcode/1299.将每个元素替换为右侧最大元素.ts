/*
 * @lc app=leetcode.cn id=1299 lang=typescript
 *
 * [1299] 将每个元素替换为右侧最大元素
 */

// @lc code=start
function replaceElements(arr: number[]): number[] {
  if (arr.length === 1) {
    return [-1];
  }
  // const ans = new Array(arr.length).fill(-1);
  // for (let i = arr.length - 2; i >= 0; i--) {
  //   ans[i] = Math.max(ans[i + 1], arr[i + 1]);
  // }
  // return ans;
  arr.reduceRight((acc, cur, index, _arr) => {
    _arr[index] = acc;
    return Math.max(acc, cur);
  }, -1);
  return arr;
}
// @lc code=end
