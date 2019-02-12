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
import LinkedList from '../LinkedList';
export default function addTwoNumbers(linkedListA: LinkedList, linkedListB: LinkedList) {
  let newList = new LinkedList(),
    l1 = linkedListA.head,
    l2 = linkedListB.head,
    sum = 0,
    tenOrNot = 0;

  while (l1 || l2 || tenOrNot != 0) {
    sum =
      tenOrNot +
      (l1 && typeof l1.value === 'number' ? l1.value : 0) +
      (l2 && typeof l2.value === 'number' ? l2.value : 0);
    if (l1) {
      l1 = l1.next;
    }
    if (l2) {
      l2 = l2.next;
    }
    tenOrNot = sum >= 10 ? 1 : 0;
    newList.append(sum % 10);
  }
  return newList;
}
