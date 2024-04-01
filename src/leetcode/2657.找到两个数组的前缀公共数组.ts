/*
 * @lc app=leetcode.cn id=2657 lang=typescript
 *
 * [2657] 找到两个数组的前缀公共数组
 */
// @lc code=start
function findThePrefixCommonArray(A: number[], B: number[]): number[] {
  const ans = new Array<number>(A.length).fill(0);
  const map_A = new Map<number, number>();
  const map_B = new Map<number, number>();
  map_A.set(A[0], 1);
  map_B.set(B[0], 1);
  if (map_A.get(B[0])) ans[0] = 1;

  for (let i = 1; i < A.length - 1; ++i) {
    map_A.set(A[i], 1);
    map_B.set(B[i], 1);
    if (map_A.get(B[i]) && map_B.get(A[i])) {
      ans[i] = ans[i - 1] + (A[i] === B[i] ? 1 : 2);
      continue;
    }
    if (A[i] !== B[i] && (map_A.get(B[i]) || map_B.get(A[i]))) {
      ans[i] = ans[i - 1] + 1;
      continue;
    }
    ans[i] = ans[i - 1];
  }
  ans[A.length - 1] = A.length;
  return ans;
}
// @lc code=end
