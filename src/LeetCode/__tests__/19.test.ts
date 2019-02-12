import removeNthFromEnd from '../19.remove-nth-node-from-end-of-list';
import LinkedList from '../../LinkedList';
describe('addTwoNumbers', () => {
  let l1: LinkedList;
  beforeEach(() => {
    l1 = new LinkedList();
    l1.append(1);
    l1.append(2);
    l1.append(3);
    l1.append(4);
    l1.append(5);
  });
  it('should 12345 remove 2 1235', () => {
    expect(removeNthFromEnd(l1, 2).toString()).toBe('1,2,3,5');
  });
  it('should 12345 remove 3 1245', () => {
    expect(removeNthFromEnd(l1, 3).toString()).toBe('1,2,4,5');
  });
});
