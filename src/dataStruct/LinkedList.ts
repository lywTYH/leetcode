import { ToString, Compare } from 'types';
import Comparator from '../utils/comparator';

class Node<T = string | number> {
  public value: T;
  public next?: Node<T>;
  constructor(val: T, next?: Node<T>) {
    this.value = val;
    this.next = next;
  }
  public toString(callback?: ToString<T>) {
    return callback ? callback(this.value) : `${this.value}`;
  }
}

export default class LinkedList<T = string | number> {
  public head?: Node<T>;
  public tail?: Node<T>;
  public compare: Comparator<T>;
  constructor(compare?: Compare<T>) {
    this.compare = new Comparator<T>(compare);
  }
  public append(value: T) {
    const node = new Node(value);
    if (!this.head || !this.tail) {
      this.head = this.tail = node;
    } else {
      this.tail.next = node;
      this.tail = node;
    }
    return this;
  }

  public prepend(value: T) {
    const node = new Node(value, this.head);
    this.head = node;
    if (!this.tail) {
      this.tail = node;
    }
    return this;
  }

  public delete(value: T) {
    if (!this.head || !this.tail) {
      return;
    }
    let deleteNode: Node<T> | undefined = undefined;
    while (this.head && this.compare.equal(this.head.value, value)) {
      deleteNode = this.head;
      this.head = this.head.next;
    }
    let currentNode = this.head;
    while (currentNode && currentNode.next) {
      if (this.compare.equal(currentNode.next.value, value)) {
        deleteNode = currentNode.next;
        currentNode.next = currentNode.next.next;
      } else {
        currentNode = currentNode.next;
      }
    }
    if (this.compare.equal(this.tail.value, value)) {
      this.tail = currentNode;
    }
    return deleteNode;
  }

  public deleteTail() {
    if (!this.tail) {
      return;
    }
    const deleteTailNode = this.tail;
    if (this.head === this.tail) {
      this.head = this.tail = undefined;
      return deleteTailNode;
    }
    let nextTailNode = this.head;
    while (nextTailNode && nextTailNode.next) {
      if (!nextTailNode.next.next) {
        nextTailNode.next = undefined;
      } else {
        nextTailNode = nextTailNode.next;
      }
    }
    this.tail = nextTailNode;
    return deleteTailNode;
  }

  public deleteHead() {
    if (!this.head) {
      return;
    }
    const deleteHeadNode = this.head;
    if (this.head.next) {
      this.head = this.head.next;
    } else {
      this.head = this.tail = undefined;
    }
    return deleteHeadNode;
  }

  public find(val: T) {
    const callback = (nodeValue: T) => {
      return this.compare.equal(nodeValue, val);
    };
    return this.findByCallback(callback);
  }

  public findByCallback(callback: (_v: T) => boolean) {
    let currentNode = this.head;
    while (currentNode) {
      if (callback(currentNode.value)) {
        return currentNode;
      }
      currentNode = currentNode.next;
    }
    return;
  }

  public toArray() {
    const nodeArray = [];
    let currentNode = this.head;
    while (currentNode) {
      nodeArray.push(currentNode);
      currentNode = currentNode.next;
    }
    return nodeArray;
  }

  public toString(callback?: ToString<T>) {
    return this.toArray()
      .map((node) => node.toString(callback))
      .toString();
  }
}
