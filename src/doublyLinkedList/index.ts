import Comparator, { Compare } from 'Util/Comparator';
import DoublyLinkedListNode from './doublyLinkedListNode';

export default class DoublyLinkedList<T> {
  public head?: DoublyLinkedListNode<T>;
  public tail?: DoublyLinkedListNode<T>;
  public compare: Comparator<T>;
  constructor(compare?: Compare<T>) {
    this.compare = new Comparator(compare);
  }

  public append(value: T) {
    const newNode = new DoublyLinkedListNode(value);
    if (!this.head || !this.tail) {
      this.head = newNode;
      this.tail = newNode;
      return this;
    } else {
      this.tail.next = newNode;
      newNode.previous = this.tail;
      this.tail = newNode;
      return this;
    }
  }

  public prepend(value: T) {
    const newNode = new DoublyLinkedListNode(value, this.head);
    if (this.head) {
      this.head.previous = newNode;
    }
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
    let deleteNode: DoublyLinkedListNode<T> | undefined;
    let currentNode: DoublyLinkedListNode<T> | undefined = this.head;
    while (currentNode) {
      if (this.compare.equal(currentNode.value, value)) {
        deleteNode = currentNode;
        if (deleteNode === this.head) {
          this.head = deleteNode.next;
          if (this.head) {
            this.head.previous = undefined;
          }
          if (deleteNode === this.tail) {
            this.tail = undefined;
          }
        } else if (deleteNode === this.tail) {
          this.tail = deleteNode.previous!;
          this.tail.next = undefined;
        } else {
          const preNode = currentNode.previous!;
          const nextNode = currentNode.next!;
          preNode.next = nextNode;
          nextNode.previous = preNode;
        }
      }
      currentNode = currentNode.next;
    }
    return deleteNode;
  }

  public find(value: T) {
    if (!this.head) {
      return;
    }
    let currentNode: DoublyLinkedListNode<T> | undefined = this.head;
    while (currentNode) {
      if (this.compare.equal(currentNode.value, value)) {
        return currentNode;
      }
      currentNode = currentNode.next;
    }
    return;
  }

  public deleteTail() {
    if (!this.tail) {
      return;
    }
    const deleteTail = this.tail;
    if (this.head === this.tail) {
      this.head = this.tail = undefined;
    } else {
      this.tail = this.tail.previous!;
      this.tail.next = undefined;
    }
    return deleteTail;
  }

  public deleteHead() {
    if (!this.head) {
      return;
    }
    const deleteHead = this.head;
    if (this.head.next) {
      this.head = this.head.next;
      this.head.previous = undefined;
    } else {
      this.head = this.tail = undefined;
    }
    return deleteHead;
  }

  public toArray() {
    const nodes: Array<DoublyLinkedListNode<T>> = [];
    let currentNode = this.head;
    while (currentNode) {
      nodes.push(currentNode);
      currentNode = currentNode.next;
    }
    return nodes;
  }

  public toString(callback: (v: T) => string) {
    return this.toArray()
      .map(node => node.toString(callback))
      .toString();
  }

  public reverse() {
    let currentNode = this.head;
    let preNode: DoublyLinkedListNode<T> | undefined;
    let nextNode: DoublyLinkedListNode<T> | undefined;
    while (currentNode) {
      nextNode = currentNode.next;
      preNode = currentNode.previous;
      currentNode.next = preNode;
      currentNode.previous = nextNode;
      preNode = currentNode;
      currentNode = nextNode;
    }
    this.tail = this.head;
    this.head = preNode;
    return this;
  }
}
