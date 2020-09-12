import LinkedList from '../LinkedList';

type Node = {
  value: string | number;
  key: string;
};

describe('LinkedList', () => {
  it('should create empty linked list', () => {
    const linkedList = new LinkedList();
    expect(linkedList.toString()).toBe('');
  });

  it('should append node to linked list', () => {
    const linkedList = new LinkedList<number>();
    expect(linkedList.head).toBeUndefined();
    expect(linkedList.tail).toBeUndefined();
    linkedList.append(1);
    linkedList.append(2);
    expect(linkedList.toString()).toBe('1,2');
  });

  it('should prepend node to linked list', () => {
    const linkedList = new LinkedList<number>();
    linkedList.prepend(2);
    expect(linkedList.head!.toString()).toBe('2');
    expect(linkedList.tail!.toString()).toBe('2');
    linkedList.append(1);
    linkedList.prepend(3);
    expect(linkedList.toString()).toBe('3,2,1');
  });

  it('should delete node by value from linked list', () => {
    const linkedList = new LinkedList<number>();
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

    expect(linkedList.delete(3)?.value).toBe(3);
    expect(linkedList.toString()).toBe('1,1,2,4,5');

    expect(linkedList.delete(1)?.value).toBe(1);
    expect(linkedList.head!.toString()).toBe('2');
    expect(linkedList.tail!.toString()).toBe('5');

    expect(linkedList.delete(5)?.value).toBe(5);
    expect(linkedList.head!.toString()).toBe('2');
    expect(linkedList.tail!.toString()).toBe('4');

    expect(linkedList.delete(4)?.value).toBe(4);
    expect(linkedList.head!.toString()).toBe('2');
    expect(linkedList.tail!.toString()).toBe('2');

    expect(linkedList.delete(2)!.value).toBe(2);
  });

  it('should delete linked list tail', () => {
    const linkedList = new LinkedList<number>();

    linkedList.append(1);
    linkedList.append(2);
    linkedList.append(3);

    expect(linkedList.head!.toString()).toBe('1');
    expect(linkedList.tail!.toString()).toBe('3');

    expect(linkedList.deleteTail()?.value).toBe(3);
    expect(linkedList.head!.toString()).toBe('1');
    expect(linkedList.tail!.toString()).toBe('2');

    expect(linkedList.deleteTail()?.value).toBe(2);
    expect(linkedList.head!.toString()).toBe('1');
    expect(linkedList.tail!.toString()).toBe('1');

    expect(linkedList.deleteTail()!.value).toBe(1);
    expect(linkedList.head).toBeUndefined();
    expect(linkedList.tail).toBeUndefined();
  });

  it('should delete linked list head', () => {
    const linkedList = new LinkedList<number>();
    linkedList.append(1);
    linkedList.append(2);
    expect(linkedList.head!.toString()).toBe('1');
    expect(linkedList.tail!.toString()).toBe('2');

    expect(linkedList.deleteHead()?.value).toBe(1);
    expect(linkedList.head!.toString()).toBe('2');
    expect(linkedList.tail!.toString()).toBe('2');

    expect(linkedList.deleteHead()?.value).toBe(2);
    expect(linkedList.head).toBeUndefined();
    expect(linkedList.tail).toBeUndefined();
  });

  it('should be possible to store objects in the list and to print them out', () => {
    const linkedList = new LinkedList<Node>();
    const nodeValue1 = { value: 1, key: 'key1' };
    const nodeValue2 = { value: 2, key: 'key2' };
    linkedList.append(nodeValue1).prepend(nodeValue2);
    expect(linkedList.toString((value) => `${value.key}:${value.value}`)).toBe('key2:2,key1:1');
  });

  it('should find node by value', () => {
    const linkedList = new LinkedList<number>();
    expect(linkedList.find(5)).toBeUndefined();
    linkedList.append(1);
    expect(linkedList.find(1)).toBeDefined();

    linkedList.append(2).append(3);
    const node = linkedList.find(2);
    expect(node!.value).toBe(2);
    expect(linkedList.find(5)).toBeUndefined();
  });
});
