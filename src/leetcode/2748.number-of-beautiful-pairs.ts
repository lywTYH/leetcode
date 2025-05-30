/*
 * @lc app=leetcode.cn id=2748 lang=typescript
 * @lcpr version=30204
 *
 * [2748] 美丽下标对的数目
 *
 * https://leetcode.cn/problems/number-of-beautiful-pairs/description/
 *
 * algorithms
 * Easy (57.99%)
 * Likes:    24
 * Dislikes: 0
 * Total Accepted:    11.6K
 * Total Submissions: 18.4K
 * Testcase Example:  '[2,5,1,4]'
 *
 * 给你一个下标从 0 开始的整数数组 nums 。如果下标对 i、j 满足 0 ≤ i < j < nums.length ，如果 nums[i] 的
 * 第一个数字 和 nums[j] 的 最后一个数字 互质 ，则认为 nums[i] 和 nums[j] 是一组 美丽下标对 。
 *
 * 返回 nums 中 美丽下标对 的总数目。
 *
 * 对于两个整数 x 和 y ，如果不存在大于 1 的整数可以整除它们，则认为 x 和 y 互质 。换而言之，如果 gcd(x, y) == 1 ，则认为
 * x 和 y 互质，其中 gcd(x, y) 是 x 和 y 的 最大公因数 。
 *
 *
 *
 * 示例 1：
 *
 * 输入：nums = [2,5,1,4]
 * 输出：5
 * 解释：nums 中共有 5 组美丽下标对：
 * i = 0 和 j = 1 ：nums[0] 的第一个数字是 2 ，nums[1] 的最后一个数字是 5 。2 和 5 互质，因此 gcd(2,5)
 * == 1 。
 * i = 0 和 j = 2 ：nums[0] 的第一个数字是 2 ，nums[2] 的最后一个数字是 1 。2 和 5 互质，因此 gcd(2,1)
 * == 1 。
 * i = 1 和 j = 2 ：nums[1] 的第一个数字是 5 ，nums[2] 的最后一个数字是 1 。2 和 5 互质，因此 gcd(5,1)
 * == 1 。
 * i = 1 和 j = 3 ：nums[1] 的第一个数字是 5 ，nums[3] 的最后一个数字是 4 。2 和 5 互质，因此 gcd(5,4)
 * == 1 。
 * i = 2 和 j = 3 ：nums[2] 的第一个数字是 1 ，nums[3] 的最后一个数字是 4 。2 和 5 互质，因此 gcd(1,4)
 * == 1 。
 * 因此，返回 5 。
 *
 *
 * 示例 2：
 *
 * 输入：nums = [11,21,12]
 * 输出：2
 * 解释：共有 2 组美丽下标对：
 * i = 0 和 j = 1 ：nums[0] 的第一个数字是 1 ，nums[1] 的最后一个数字是 1 。gcd(1,1) == 1 。
 * i = 0 和 j = 2 ：nums[0] 的第一个数字是 1 ，nums[2] 的最后一个数字是 2 。gcd(1,2) == 1 。
 * 因此，返回 2 。
 *
 *
 *
 * 提示：
 *
 *
 * 2 <= nums.length <= 100
 * 1 <= nums[i] <= 9999
 * nums[i] % 10 != 0
 *
 *
 */

// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
function countBeautifulPairs(nums: number[]): number {
  const gcd = (a: number, b: number): number => {
    return b === 0 ? a : gcd(b, a % b);
  };
  let ans = 0;
  const cnt = Array(10).fill(0);
  for (let i = 0; i < nums.length; i++) {
    let tmp = nums[i];
    for (let j = 1; j < 10; j++) {
      if (cnt[j] > 0 && gcd(j, tmp) == 1) {
        ans += cnt[j];
      }
    }
    while (tmp >= 10) {
      tmp = Math.floor(tmp / 10);
    }
    cnt[tmp]++;
  }

  return ans;
}
// @lc code=end
countBeautifulPairs([31, 25, 72, 79, 74]);
