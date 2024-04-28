/*
 * @lc app=leetcode.cn id=24 lang=typescript
 *
 * [24] 两两交换链表中的节点
 */
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

function swapPairs(head: ListNode | null): ListNode | null {
  if (head === null || head.next === null) {
    return head;
  }
  const pre = new ListNode(0);
  pre.next = head;
  let tmp = pre;
  while (tmp.next && tmp.next.next) {
    const start = tmp.next;
    const end = tmp.next.next;
    tmp.next = end;
    start.next = end.next;
    end.next = start;
    tmp = start;
  }
  return pre.next;
}
// @lc code=end
