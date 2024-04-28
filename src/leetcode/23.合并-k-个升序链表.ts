/*
 * @lc app=leetcode.cn id=23 lang=typescript
 *
 * [23] 合并 K 个升序链表
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
const mergeTwoList = (list1: ListNode | null, list2: ListNode | null): ListNode | null => {
  const dummy = new ListNode(-1);
  let p = dummy;
  while (list1 && list2) {
    if (list1.val < list2.val) {
      p.next = list1;
      list1 = list1.next;
    } else {
      p.next = list2;
      list2 = list2.next;
    }
    p = p.next;
  }
  if (list1) {
    p.next = list1;
  } else if (list2) {
    p.next = list2;
  }
  return dummy.next;
};

function mergeKLists(lists: Array<ListNode | null>): ListNode | null {
  if (!lists || lists.length === 0) return null;
  if (lists.length === 1) return lists[0];
  const middle = lists.length >> 1;
  return mergeTwoList(mergeKLists(lists.slice(0, middle)), mergeKLists(lists.slice(middle)));
}
// @lc code=end
// function mergeKLists(lists: Array<ListNode | null>): ListNode | null {
//   let _ansLink = new ListNode(undefined);
//   const ansLink = _ansLink;
//   let stopFlag = false;
//   while (!stopFlag) {
//     let minNode = lists[0];
//     let minIndex = 0;
//     for (let i = 1; i < lists.length; i++) {
//       const curr = lists[i];
//       if (curr === null) {
//         continue;
//       }
//       if (minNode === null || minNode.val > curr.val) {
//         minNode = curr;
//         minIndex = i;
//       }
//     }
//     if (minNode) {
//       lists[minIndex] = minNode.next;
//       _ansLink.next = minNode;
//       _ansLink = _ansLink.next;
//     } else {
//       stopFlag = true;
//     }
//   }
//   return ansLink.next;
// }
