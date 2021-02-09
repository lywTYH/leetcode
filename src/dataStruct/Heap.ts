import { Compare } from 'types';
import Comparator from '../utils/comparator';

/**
 * 堆主要用来访问堆顶 速度 0（1）
 */
class Heap<T> {
  compare: Comparator<T>;
  heapContainer: T[];
  constructor(comparatorFunction?: Compare<T>) {
    if (new.target === Heap) {
      throw new TypeError('Cannot construct Heap instance directly');
    }
    this.heapContainer = [];
    this.compare = new Comparator(comparatorFunction);
  }

  getLeftChildIndex(parentIndex: number) {
    return 2 * parentIndex + 1;
  }

  getRightChildIndex(parentIndex: number) {
    return 2 * parentIndex + 2;
  }

  getParentIndex(childIndex: number) {
    return Math.floor((childIndex - 1) / 2);
  }

  hasParentIndex(childIndex: number) {
    return this.getParentIndex(childIndex) >= 0;
  }

  hasLeftChildIndex(parentIndex: number) {
    return this.getLeftChildIndex(parentIndex) < this.heapContainer.length;
  }

  hasRightChildIndex(parentIndex: number) {
    return this.getRightChildIndex(parentIndex) < this.heapContainer.length;
  }

  leftChild(parentIndex: number) {
    return this.heapContainer[this.getLeftChildIndex(parentIndex)];
  }

  rightChild(parentIndex: number) {
    return this.heapContainer[this.getRightChildIndex(parentIndex)];
  }

  parent(childIndex: number) {
    return this.heapContainer[this.getParentIndex(childIndex)];
  }

  swap(indexOne: number, indexTwo: number) {
    const tmp = this.heapContainer[indexOne];
    this.heapContainer[indexOne] = this.heapContainer[indexTwo];
    this.heapContainer[indexTwo] = tmp;
  }

  peek() {
    if (this.heapContainer.length === 0) {
      return null;
    }
    return this.heapContainer[0];
  }

  poll() {
    if (this.heapContainer.length === 0) {
      return null;
    }
    if (this.heapContainer.length === 1) {
      return this.heapContainer.pop();
    }
    const item = this.heapContainer[0];
    this.heapContainer[0] = this.heapContainer.pop() as T;
    this.heapifyDown();
    return item;
  }

  add(item: T) {
    this.heapContainer.push(item);
    this.heapifyUp();
  }

  remove(item: T, comparator = this.compare) {
    const numberOfItemsToRemove = this.find(item, comparator).length;
    for (let iteration = 0; iteration < numberOfItemsToRemove; iteration += 1) {
      const indexToRemove = this.find(item, comparator).pop();
      if (indexToRemove === undefined) {
        continue;
      }
      if (indexToRemove === this.heapContainer.length - 1) {
        this.heapContainer.pop();
      } else {
        this.heapContainer[indexToRemove] = this.heapContainer.pop() as T;
        const parentItem = this.parent(indexToRemove);
        if (
          this.hasLeftChildIndex(indexToRemove) &&
          (!parentItem || this.pairIsInCorrectOrder(parentItem, this.heapContainer[indexToRemove]))
        ) {
          this.heapifyDown(indexToRemove);
        } else {
          this.heapifyUp(indexToRemove);
        }
      }
    }
    return this;
  }

  find(item: T, comparator = this.compare) {
    const foundItemIndices: number[] = [];
    for (let index = 0; index < this.heapContainer.length; index++) {
      if (comparator.equal(item, this.heapContainer[index])) {
        foundItemIndices.push(index);
      }
    }
    return foundItemIndices;
  }

  isEmpty() {
    return this.heapContainer.length === 0;
  }

  toString() {
    return this.heapContainer.toString();
  }

  heapifyUp(customStartIndex?: number) {
    let currentIndex = customStartIndex || this.heapContainer.length - 1;
    while (
      this.hasParentIndex(currentIndex) &&
      !this.pairIsInCorrectOrder(this.parent(currentIndex), this.heapContainer[currentIndex])
    ) {
      const parentIndex = this.getParentIndex(currentIndex);
      this.swap(currentIndex, parentIndex);
      currentIndex = parentIndex;
    }
  }
  // todo test
  heapifyDown(customStartIndex = 0) {
    let currentIndex = customStartIndex;
    let nextIndex: number;
    while (this.hasLeftChildIndex(currentIndex)) {
      if (
        this.hasRightChildIndex(currentIndex) &&
        this.pairIsInCorrectOrder(this.rightChild(currentIndex), this.leftChild(currentIndex))
      ) {
        nextIndex = this.getRightChildIndex(currentIndex);
      } else {
        nextIndex = this.getLeftChildIndex(currentIndex);
      }
      if (
        this.pairIsInCorrectOrder(this.heapContainer[currentIndex], this.heapContainer[nextIndex])
      ) {
        break;
      }
      this.swap(currentIndex, nextIndex);
      currentIndex = nextIndex;
    }
  }

  /**
   * Checks if pair of heap elements is in correct order.
   * For MinHeap the first element must be always smaller or equal.
   * For MaxHeap the first element must be always bigger or equal.
   */
  pairIsInCorrectOrder(firstElement: T, secondElement: T): boolean {
    throw new Error(`
      You have to implement heap pair comparision method
      for ${firstElement} and ${secondElement} values.
    `);
  }
}

export class MinHeap<T> extends Heap<T> {
  pairIsInCorrectOrder(firstElement: T, secondElement: T): boolean {
    return this.compare.lessThanOrEqual(firstElement, secondElement);
  }
}

export class MaxHeap<T> extends Heap<T> {
  pairIsInCorrectOrder(firstElement: T, secondElement: T) {
    return this.compare.greaterThanOrEqual(firstElement, secondElement);
  }
}
