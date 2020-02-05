import Comparator, { Compare } from '../Util/Comparator';
import LinkedListNode from './listNode';

/**
 * @description
 *    1. LinkedList 以链表的形式存储数据、对增删元素有很高的效率、查询效率较低
 *    2. 内部存储元素有序(输出顺序与输入顺序一致)
 * @class LinkedList
 */
export default class LinkedList<T> {
  public head?: LinkedListNode<T>;
  public tail?: LinkedListNode<T>;
  public compare: Comparator<T>;

  constructor(comparator?: Compare<T>) {
    this.compare = new Comparator<T>(comparator);
  }

  public append(value: T) {
    const newNode = new LinkedListNode(value);
    if (!this.head || !this.tail) {
      this.head = this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    return this;
  }

  public prepend(value: T) {
    const newNode = new LinkedListNode(value, this.head);
    this.head = newNode;
    if (!this.tail) {
      this.tail = newNode;
    }
    return this;
  }

  public delete(value: T) {
    if (!this.head) {
      return;
    }
    let deletedNode: LinkedListNode<T> | undefined;
    while (this.head && this.compare.equal(this.head.value, value)) {
      deletedNode = this.head;
      this.head = this.head.next;
    }
    let currentNode = this.head;
    if (currentNode) {
      while (currentNode.next) {
        if (this.compare.equal(currentNode.next.value, value)) {
          deletedNode = currentNode.next;
          currentNode.next = currentNode.next.next;
        } else {
          currentNode = currentNode.next;
        }
      }
    }
    if (this.tail && this.compare.equal(this.tail.value, value)) {
      this.tail = currentNode;
    }
    return deletedNode;
  }

  public deleteTail() {
    if (this.head === this.tail) {
      const tmp = this.tail;
      this.head = this.tail = undefined;
      return tmp;
    }
    const deleteTail = this.tail;
    let currentNode = this.head;
    while (currentNode && currentNode.next) {
      if (!currentNode.next.next) {
        currentNode.next = undefined;
      } else {
        currentNode = currentNode.next;
      }
    }
    this.tail = currentNode;
    return deleteTail;
  }

  public deleteHead() {
    if (!this.head) {
      return;
    }
    const deletedHead = this.head;
    if (this.head.next) {
      this.head = this.head.next;
    } else {
      this.tail = this.head = undefined;
    }
    return deletedHead;
  }

  public find(value?: T, callback?: (v: T) => boolean) {
    let currentNode = this.head;
    while (currentNode) {
      if (callback && callback(currentNode.value)) {
        return currentNode;
      }
      if (typeof value !== 'undefined' && this.compare.equal(currentNode.value, value)) {
        return currentNode;
      }
      currentNode = currentNode.next;
    }
    return;
  }

  public toArray() {
    const nodes: Array<LinkedListNode<T>> = [];
    let currentNode = this.head;
    while (currentNode) {
      nodes.push(currentNode);
      currentNode = currentNode.next;
    }
    return nodes;
  }

  public toString(callback?: (val: T) => string) {
    return this.toArray()
      .map(node => node.toString(callback))
      .toString();
  }
}
