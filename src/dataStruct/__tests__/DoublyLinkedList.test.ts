import DoublyLinkedList from '../DoublyLinkedList';

describe('DoublyLinkedList', () => {
  it('should create empty linked list', () => {
    const linkedList = new DoublyLinkedList<string>();
    expect(linkedList.toString()).toBe('');
  });
  it('should append node to linked list', () => {
    const linkedList = new DoublyLinkedList<number>();
    expect(linkedList.head).toBeUndefined();
    expect(linkedList.tail).toBeUndefined();
    linkedList.append(1).append(2);
    expect(linkedList.head!.next!.value).toBe(2);
    expect(linkedList.tail!.previous!.value).toBe(1);
    expect(linkedList.toString()).toBe('1,2');
  });

  it('should prepend node to linked list', () => {
    const linkedList = new DoublyLinkedList<number>();
    linkedList.prepend(2);
    expect(linkedList.head!.toString()).toBe('2');
    expect(linkedList.tail!.toString()).toBe('2');
    linkedList.append(1);
    linkedList.prepend(3);
    expect(linkedList.tail!.previous!.next).toBe(linkedList.tail!);
    expect(linkedList.tail!.previous!.value).toBe(2);
    expect(linkedList.toString()).toBe('3,2,1');
  });

  it('should create linked list from array', () => {
    const linkedList = new DoublyLinkedList<number>();
    linkedList.fromArray([1, 1, 2, 3, 3, 3, 4, 5]);
    expect(linkedList.toString()).toBe('1,1,2,3,3,3,4,5');
  });

  it('should delete node by value from linked list', () => {
    const linkedList = new DoublyLinkedList<number>();

    expect(linkedList.delete(5)).toBeUndefined();

    linkedList.append(1);
    linkedList.append(1);
    linkedList.append(2);
    linkedList.append(3);
    linkedList.append(3);
    linkedList.append(3);
    linkedList.append(4);
    linkedList.append(5);

    expect(linkedList.head!.toString()).toBe('1');
    expect(linkedList.tail!.toString()).toBe('5');

    const deletedNode = linkedList.delete(3);
    expect(deletedNode!.value).toBe(3);
    expect(linkedList.tail!.previous!.previous!.value).toBe(2);
    expect(linkedList.toString()).toBe('1,1,2,4,5');

    linkedList.delete(3);
    expect(linkedList.toString()).toBe('1,1,2,4,5');

    linkedList.delete(1);
    expect(linkedList.toString()).toBe('2,4,5');

    expect(linkedList.head!.toString()).toBe('2');
    expect(linkedList.head!.next!.next).toBe(linkedList.tail!);
    expect(linkedList.tail!.previous!.previous).toBe(linkedList.head!);
    expect(linkedList.tail!.toString()).toBe('5');

    linkedList.delete(5);
    expect(linkedList.toString()).toBe('2,4');

    expect(linkedList.head!.toString()).toBe('2');
    expect(linkedList.tail!.toString()).toBe('4');

    linkedList.delete(4);
    expect(linkedList.toString()).toBe('2');

    expect(linkedList.head!.toString()).toBe('2');
    expect(linkedList.tail!.toString()).toBe('2');
    expect(linkedList.head!).toBe(linkedList.tail!);

    linkedList.delete(2);
    expect(linkedList.toString()).toBe('');
  });

  it('should delete linked list tail!', () => {
    const linkedList = new DoublyLinkedList();

    expect(linkedList.deleteTail()).toBeUndefined();

    linkedList.append(1);
    linkedList.append(2);
    linkedList.append(3);

    expect(linkedList.head!.toString()).toBe('1');
    expect(linkedList.tail!.toString()).toBe('3');

    const deletedNode1 = linkedList.deleteTail!();

    expect(deletedNode1!.value).toBe(3);
    expect(linkedList.toString()).toBe('1,2');
    expect(linkedList.head!.toString()).toBe('1');
    expect(linkedList.tail!.toString()).toBe('2');

    const deletedNode2 = linkedList.deleteTail!();

    expect(deletedNode2!.value).toBe(2);
    expect(linkedList.toString()).toBe('1');
    expect(linkedList.head!.toString()).toBe('1');
    expect(linkedList.tail!.toString()).toBe('1');

    const deletedNode3 = linkedList.deleteTail!();

    expect(deletedNode3!.value).toBe(1);
    expect(linkedList.toString()).toBe('');
    expect(linkedList.head!).toBeUndefined();
    expect(linkedList.tail!).toBeUndefined();
  });

  it('should delete linked list head', () => {
    const linkedList = new DoublyLinkedList();
    expect(linkedList.deleteHead()).toBeUndefined();
    linkedList.append(1);
    linkedList.append(2);

    expect(linkedList.head!.toString()).toBe('1');
    expect(linkedList.tail!.toString()).toBe('2');

    const deletedNode1 = linkedList.deleteHead();

    expect(deletedNode1!.value).toBe(1);
    expect(linkedList.head!.previous).toBeUndefined();
    expect(linkedList.toString()).toBe('2');
    expect(linkedList.head!.toString()).toBe('2');
    expect(linkedList.tail!.toString()).toBe('2');

    const deletedNode2 = linkedList.deleteHead();

    expect(deletedNode2!.value).toBe(2);
    expect(linkedList.toString()).toBe('');
    expect(linkedList.head!).toBeUndefined();
    expect(linkedList.tail!).toBeUndefined();
  });

  it('should be possible to store objects in the list and to print them out', () => {
    const linkedList = new DoublyLinkedList<{
      value: number;
      key: string;
    }>();

    const nodeValue1 = { value: 1, key: 'key1' };
    const nodeValue2 = { value: 2, key: 'key2' };

    linkedList.append(nodeValue1).prepend(nodeValue2);

    const nodeStringifier = (value: { value: number; key: string }) =>
      `${value.key}:${value.value}`;

    expect(linkedList.toString(nodeStringifier)).toBe('key2:2,key1:1');
  });

  it('should find node by value', () => {
    const linkedList = new DoublyLinkedList();

    expect(linkedList.find(5)).toBeUndefined();

    linkedList.append(1);
    expect(linkedList.find(1)).toBeDefined();

    linkedList.append(2).append(3);

    const node = linkedList.find(2);
    expect(node!.value).toBe(2);
    expect(linkedList.find(5)).toBeUndefined();
  });
});
