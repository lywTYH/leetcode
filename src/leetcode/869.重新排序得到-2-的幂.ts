/*
 * @lc app=leetcode.cn id=869 lang=typescript
 *
 * [869] 重新排序得到 2 的幂
 */

// @lc code=start
function reorderedPowerOf2(n: number): boolean {
  const str = n.toString(); //数字转字符串
  let now = 1; //循环用数

  for (let i = 0; now.toString().length <= str.length; i++) {
    //循环结果数组
    const nowStr = now.toString();
    if (nowStr.length === str.length) {
      //长度相等
      if (nowStr.split('').sort().join('') === str.split('').sort().join('')) {
        return true;
      }
    }
    now = now * 2;
  }
  return false;
}
// @lc code=end

/**
 * 2
 * 4
 * 8
 * 16
 * 32
 * 64
 * 128
 * 256
 * 512
 * 1024
 * 2048
 * 4096
 * 8192
 * 16384
 * 32768
 * 65536
 * 131072
 * 262144
 * 524288
 *
 *
 */
