/*
 * @lc app=leetcode id=2 lang=typescript
 *
 * [2] Add Two Numbers
 */

export class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}
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

function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
  if (l1 === null && l2 === null) {
    return null;
  }
  const result = new ListNode();
  let tmpL1 = l1;
  let tmpL2 = l2;
  let tmpResult = result;
  let carry = 0;
  while (tmpL1 !== null || tmpL2 !== null) {
    const tmpL1Value = tmpL1 === null ? 0 : tmpL1.val;
    const tmpL2Value = tmpL2 === null ? 0 : tmpL2.val;
    const sum = tmpL1Value + tmpL2Value + carry;
    if (sum > 9) {
      carry = 1;
      tmpResult.next = new ListNode(sum % 10);
    } else {
      carry = 0;
      tmpResult.next = new ListNode(sum);
    }
    tmpResult = tmpResult.next;
    if (tmpL1 !== null) {
      tmpL1 = tmpL1.next;
    }
    if (tmpL2 !== null) {
      tmpL2 = tmpL2.next;
    }
  }
  if (carry > 0) {
    tmpResult.next = new ListNode(carry);
  }
  return result.next;
}
// @lc code=end

export default addTwoNumbers;
