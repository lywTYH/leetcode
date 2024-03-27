/*
 * @lc app=leetcode.cn id=19 lang=typescript
 *
 * [19] 删除链表的倒数第 N 个结点
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

function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
  const tmp = new ListNode(0);
  tmp.next = head;
  //定义一个快指针,指向伪节点，用于遍历链表
  let fast: ListNode | null = tmp;
  //定一个慢指针，
  let low: ListNode | null = tmp;
  //让快指针先移动 n 步
  while (n >= 0) {
    if (!fast) {
      return head;
    }
    fast = fast.next;
    n--;
  }
  while (fast) {
    fast = fast.next;
    low = low!.next;
  }
  low!.next = low!.next!.next;
  return tmp.next;
}
// @lc code=end
