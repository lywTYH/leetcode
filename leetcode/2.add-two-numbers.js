/*
 * @lc app=leetcode id=2 lang=javascript
 *
 * [2] Add Two Numbers
 *
 * https://leetcode.com/problems/add-two-numbers/description/
 *
 * algorithms
 * Medium (30.42%)
 * Total Accepted:    746K
 * Total Submissions: 2.5M
 * Testcase Example:  '[2,4,3]\n[5,6,4]'
 *
 * You are given two non-empty linked lists representing two non-negative
 * integers. The digits are stored in reverse order and each of their nodes
 * contain a single digit. Add the two numbers and return it as a linked list.
 *
 * You may assume the two numbers do not contain any leading zero, except the
 * number 0 itself.
 *
 * Example:
 *
 *
 * Input: (2 -> 4 -> 3) + (5 -> 6 -> 4)
 * Output: 7 -> 0 -> 8
 * Explanation: 342 + 465 = 807.
 *
 *
 */
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
  var newList = new ListNode(0),
    arrayList = newList,
    sum = 0,
    tenOrNot = 0;

  newList.next = arrayList;

  while (l1 || l2 || tenOrNot != 0) {
    sum = tenOrNot + (l1 === null ? 0 : l1.val) + (l2 === null ? 0 : l2.val);
    l1 = l1 !== null ? l1.next : null;
    l2 = l2 !== null ? l2.next : null;
    tenOrNot = sum >= 10 ? 1 : 0;
    arrayList.next = new ListNode(sum % 10);
    arrayList = arrayList.next;
  }
  return newList.next;
};
