import Comparator, { DefineCompare } from '../utils/comparator';
import LinkedListNode, { LinkNode } from './ListNode';

/**
 * @description
 *    1. LinkedList 以链表的形式存储数据、对增删元素有很高的效率、查询效率较低
 *    2. 内部存储元素有序(输出顺序与输入顺序一致)
 * @class LinkedList
 */
export default class LinkedList {
  public compare: Comparator;
  public head?: LinkedListNode;
  public tail?: LinkedListNode;

  constructor(comparator?: DefineCompare) {
    this.compare = new Comparator(comparator);
  }

  public prepend(value: LinkNode) {
    const newNode = new LinkedListNode(value, this.head);
    this.head = newNode;
    if (!this.tail) {
      this.tail = newNode;
    }
    return this;
  }

  public append(value: LinkNode) {
    const newNode = new LinkedListNode(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
      return this;
    }
    this.tail!.next = newNode;
    this.tail = newNode;
    return this;
  }

  public delete(value: object | number | string) {
    if (!this.head) {
      return undefined;
    }
    let deletedNode;
    while (this.head && this.compare.equal(this.head.value, value)) {
      deletedNode = this.head;
      this.head = this.head.next;
    }
    let currentNode = this.head;
    if (currentNode !== undefined) {
      while (currentNode!.next) {
        if (this.compare.equal(currentNode!.next!.value, value)) {
          deletedNode = currentNode!.next;
          currentNode!.next = currentNode!.next!.next;
        } else {
          currentNode = currentNode!.next;
        }
      }
    }
    if (this.compare.equal(this.tail!.value, value)) {
      this.tail = currentNode;
    }
    return deletedNode;
  }

  public deleteTail() {
    if (this.head === this.tail) {
      const tmp = this.tail;
      this.head = undefined;
      this.tail = undefined;
      return tmp;
    }
    const deletedTail = this.tail;
    let currentNode = this.head;
    while (currentNode!.next) {
      if (!currentNode!.next!.next) {
        currentNode!.next = undefined;
      } else {
        currentNode = currentNode!.next;
      }
    }
    this.tail = currentNode;
    return deletedTail;
  }

  public deleteHead() {
    if (!this.head) {
      return undefined;
    }
    const deletedHead = this.head;
    if (this.head.next) {
      this.head = this.head.next;
    } else {
      this.tail = undefined;
      this.head = undefined;
    }
    return deletedHead;
  }

  public find(value: LinkNode) {
    if (!this.head) {
      return undefined;
    }
    let currentNode: LinkedListNode | undefined = this.head;
    while (currentNode) {
      if (value && this.compare.equal(currentNode.value, value)) {
        return currentNode;
      }
      currentNode = currentNode.next;
    }
    return undefined;
  }

  public toArray() {
    const nodes = [];
    let currentNode = this.head;
    while (currentNode) {
      nodes.push(currentNode);
      currentNode = currentNode.next;
    }
    return nodes;
  }

  public toString(callback?: (val: LinkNode) => string) {
    return this.toArray()
      .map(node => node.toString(callback))
      .toString();
  }
}
