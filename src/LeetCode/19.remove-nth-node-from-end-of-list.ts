/*
 * @lc app=leetcode id=19 lang=javascript
 *
 * [19] Remove Nth Node From End of List
 *
 * https://leetcode.com/problems/remove-nth-node-from-end-of-list/description/
 *
 * algorithms
 * Medium (33.92%)
 * Total Accepted:    346.2K
 * Total Submissions: 1M
 * Testcase Example:  '[1,2,3,4,5]\n2'
 *
 * Given a linked list, remove the n-th node from the end of list and return
 * its head.
 *
 * Example:
 *
 *
 * Given linked list: 1->2->3->4->5, and n = 2.
 *
 * After removing the second node from the end, the linked list becomes
 * 1->2->3->5.
 *
 *
 * Note:
 *
 * Given n will always be valid.
 *
 * Follow up:
 *
 * Could you do this in one pass?
 *
 */
import LinkedList from '../LinkedList';
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
export default function removeNthFromEnd(list: LinkedList, n: number) {
  let p1 = list.head;
  let p2 = list.head;
  while (p1 && n >= 0) {
    p1 = p1.next;
    n--;
  }
  while (p1) {
    p2 = p2!.next;
    p1 = p1.next;
  }
  p2!.next = p2!.next!.next;
  return list;
}
// var removeNthFromEnd = function(head, n) {
//   let ans = new ListNode(null);
//   ans.next = head;
//   let p1 = ans;
//   let p2 = ans;
//   while (p1 && n >= 0) {
//     p1 = p1.next;
//     n--;
//   }
//   while (p1) {
//     p2 = p2.next;
//     p1 = p1.next;
//   }
//   p2.next = p2.next.next;
//   return ans.next;
// };
