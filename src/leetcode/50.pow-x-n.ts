/*
 * @lc app=leetcode.cn id=50 lang=typescript
 * @lcpr version=30204
 *
 * [50] Pow(x, n)
 *
 * https://leetcode.cn/problems/powx-n/description/
 *
 * algorithms
 * Medium (38.61%)
 * Likes:    1407
 * Dislikes: 0
 * Total Accepted:    489.1K
 * Total Submissions: 1.3M
 * Testcase Example:  '2.00000\n10'
 *
 * 实现 pow(x, n) ，即计算 x 的整数 n 次幂函数（即，x^n^ ）。
 *
 *
 *
 * 示例 1：
 *
 * 输入：x = 2.00000, n = 10
 * 输出：1024.00000
 *
 *
 * 示例 2：
 *
 * 输入：x = 2.10000, n = 3
 * 输出：9.26100
 *
 *
 * 示例 3：
 *
 * 输入：x = 2.00000, n = -2
 * 输出：0.25000
 * 解释：2^-2 = 1/2^2 = 1/4 = 0.25
 *
 *
 *
 *
 * 提示：
 *
 *
 * -100.0 < x < 100.0
 * -2^31 <= n <= 2^31-1
 * n 是一个整数
 * 要么 x 不为零，要么 n > 0 。
 * -10^4 <= x^n <= 10^4
 *
 *
 */


// @lcpr-template-start
// @lc code=start
function myPow(x: number, n: number): number {
    if (n === 0) return 1;
    if (n === 1) return x;
    if (n < 0) {
        x = 1 / x;
        n = -n;
    }
    let res = 1;
    while (n) {
        if (n % 2 === 1) {
            res *= x;
        }
        x *= x;
        n = Math.floor(n / 2);
    }
    return res;
};
// @lc code=end



/*
// @lcpr case=start
// 2.00000\n10\n
// @lcpr case=end

// @lcpr case=start
// 2.10000\n3\n
// @lcpr case=end

// @lcpr case=start
// 2.00000\n-2\n
// @lcpr case=end

 */

