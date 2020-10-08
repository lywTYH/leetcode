import twoSum from '../1.two-sum';
import tNumbers, { ListNode } from '../2.add-two-numbers';
import longestStr from '../3.longest-substring-without-repeating-characters';
describe('leetCode 1-50', () => {
  it('1.towSum', () => {
    const result = twoSum([2, 7, 11, 15], 9);
    expect(result[0]).toEqual(0);
    expect(result[1]).toEqual(1);
  });
  it('2.towNumbers', () => {
    const nodeL1 = new ListNode(2, new ListNode(4));
    const nodeL2 = new ListNode(5, new ListNode(6));
    const result = tNumbers(nodeL1, nodeL2);
    expect(result!.val).toEqual(7);
  });
  it('3.longestStr', () => {
    expect(longestStr('abcabcbb')).toEqual(3);
    expect(longestStr('aab')).toEqual(2);
    expect(longestStr('abcabcbb')).toEqual(3);
    expect(longestStr('bbbbb')).toEqual(1);
    expect(longestStr('pwwkew')).toEqual(3);
    expect(longestStr('')).toEqual(0);
  });
});
