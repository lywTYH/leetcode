/*
 * @lc app=leetcode.cn id=303 lang=typescript
 *
 * [303] 区域和检索 - 数组不可变
 */

// @lc code=start
class NumArray {
  sums: number[];
  constructor(nums: number[]) {
    this.sums = new Array(nums.length + 1).fill(0);
    nums.forEach((num, index) => {
      this.sums[index + 1] = this.sums[index] + num;
    });
  }

  sumRange(left: number, right: number): number {
    return this.sums[right + 1] - this.sums[left];
  }
}

/**
 * Your NumArray object will be instantiated and called as such:
 * var obj = new NumArray(nums)
 * var param_1 = obj.sumRange(left,right)
 */
// @lc code=end
