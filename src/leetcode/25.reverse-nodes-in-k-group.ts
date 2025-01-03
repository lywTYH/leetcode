/*
 * @lc app=leetcode.cn id=25 lang=typescript
 * @lcpr version=30204
 *
 * [25] K 个一组翻转链表
 *
 * https://leetcode.cn/problems/reverse-nodes-in-k-group/description/
 *
 * algorithms
 * Hard (68.11%)
 * Likes:    2415
 * Dislikes: 0
 * Total Accepted:    680.1K
 * Total Submissions: 990.9K
 * Testcase Example:  '[1,2,3,4,5]\n2'
 *
 * 给你链表的头节点 head ，每 k 个节点一组进行翻转，请你返回修改后的链表。
 *
 * k 是一个正整数，它的值小于或等于链表的长度。如果节点总数不是 k 的整数倍，那么请将最后剩余的节点保持原有顺序。
 *
 * 你不能只是单纯的改变节点内部的值，而是需要实际进行节点交换。
 *
 *
 *
 * 示例 1：
 *
 * 输入：head = [1,2,3,4,5], k = 2
 * 输出：[2,1,4,3,5]
 *
 *
 * 示例 2：
 *
 *
 *
 * 输入：head = [1,2,3,4,5], k = 3
 * 输出：[3,2,1,4,5]
 *
 *
 *
 * 提示：
 *
 *
 * 链表中的节点数目为 n
 * 1 <= k <= n <= 5000
 * 0 <= Node.val <= 1000
 *
 *
 *
 *
 * 进阶：你可以设计一个只用 O(1) 额外内存空间的算法解决此问题吗？
 *
 *
 *
 *
 */

// @lcpr-template-start
// @lc code=start
/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */
function reverseKGroup(head: ListNode | null, k: number): ListNode | null {
  if (!head || !head.next) return head;

  let _head: ListNode | null = head;
  for (let i = 0; i < k; i++) {
    if (!_head) return head;
    _head = _head.next;
  }

  let pre: ListNode | null  = null;
  let curr: ListNode | null  = head;
  let next: ListNode | null  = null;
  // 1 2 3
  for (let i = 0; i < k; i++) {
    next = curr!.next;
    curr!.next = pre;
    pre = curr;
    curr = next;
  }
  head.next = reverseKGroup(curr, k);
  return pre;
}
// @lc code=end
/*
// @lcpr case=start
// [1,2,3,4,5]\n2\n
// 2 1 4 3 5
// @lcpr case=end

// @lcpr case=start
// [1,2,3,4,5]\n3\n
// @lcpr case=end

 */


