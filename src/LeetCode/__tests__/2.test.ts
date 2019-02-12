import addTwoNumbers from '../2.add-two-numbers';
import LinkedList from '../../LinkedList';
describe('addTwoNumbers', () => {
  it('should 243+564 = 708', () => {
    const l1 = new LinkedList();
    l1.append(2);
    l1.append(4);
    l1.append(3);
    const l2 = new LinkedList();
    l2.append(5);
    l2.append(6);
    l2.append(4);
    expect(addTwoNumbers(l1, l2).toString()).toBe('7,0,8');
  });

  it('should 5+5 = 01', () => {
    const l1 = new LinkedList();
    l1.append(5);
    const l2 = new LinkedList();
    l2.append(5);
    expect(addTwoNumbers(l1, l2).toString()).toBe('0,1');
  });

  it('should 5+0 = 5', () => {
    const l1 = new LinkedList();
    l1.append(5);
    const l2 = new LinkedList();
    expect(addTwoNumbers(l1, l2).toString()).toBe('5');
  });
});
