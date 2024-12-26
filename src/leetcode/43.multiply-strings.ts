/*
 * @lc app=leetcode.cn id=43 lang=typescript
 * @lcpr version=30204
 *
 * [43] 字符串相乘
 *
 * https://leetcode.cn/problems/multiply-strings/description/
 *
 * algorithms
 * Medium (44.48%)
 * Likes:    1379
 * Dislikes: 0
 * Total Accepted:    361.9K
 * Total Submissions: 813.7K
 * Testcase Example:  '"2"\n"3"'
 *
 * 给定两个以字符串形式表示的非负整数 num1 和 num2，返回 num1 和 num2 的乘积，它们的乘积也表示为字符串形式。
 *
 * 注意：不能使用任何内置的 BigInteger 库或直接将输入转换为整数。
 *
 *
 *
 * 示例 1:
 *
 * 输入: num1 = "2", num2 = "3"
 * 输出: "6"
 *
 * 示例 2:
 *
 * 输入: num1 = "123", num2 = "456"
 * 输出: "56088"
 *
 *
 *
 * 提示：
 *
 *
 * 1 <= num1.length, num2.length <= 200
 * num1 和 num2 只能由数字组成。
 * num1 和 num2 都不包含任何前导零，除了数字0本身。
 *
 *
 */
// @lcpr-template-start
// @lcpr-template-end
// @lc code=start
function multiply(num1: string, num2: string): string {
  if (num1 === '0' || num2 === '0') return '0';
  if (num1 === '1') return num2;
  if (num2 === '1') return num1;

  const ans: Array<number> = [];
  const len = num1.length + num2.length - 2;
  for (let i = num2.length - 1; i >= 0; i--) {
    for (let j = num1.length - 1; j >= 0; j--) {
      const res = Number(num1[j]) * Number(num2[i]);
      const pos = len - i - j;
      ans[pos] = (res % 10) + (ans[pos] || 0);
      ans[pos + 1] = Math.floor(res / 10) + (ans[pos + 1] || 0);
      if (ans[pos] >= 10) {
        ans[pos + 1] += Math.floor(ans[pos] / 10);
        ans[pos] = ans[pos] % 10;
      }
      if (ans[pos + 1] >= 10) {
        ans[pos + 2] = (ans[pos + 2] || 0) + Math.floor(ans[pos + 1] / 10);
        ans[pos + 1] = ans[pos + 1] % 10;
      }
    }
  }
  if (ans[ans.length - 1] === 0) {
    ans.pop();
  }
  return ans.reverse().join('');
}
// @lc code=end

/*
// @lcpr case=start
// "2"\n"3"\n
// @lcpr case=end

// @lcpr case=start
// "123"\n"456"\n
// @lcpr case=end

 */

for (let i = 0; i < 1000; i++) {
  for (let j = 0; j < 1000; j++) {
    if (i * j !== Number(multiply(i.toString(), j.toString()))) {
      console.log(i, j);
    }
  }
}
