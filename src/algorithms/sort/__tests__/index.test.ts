import { insertionSort, reverseInsertionSort } from '../InsertionSort';

const source = [5, 2, 4, 6, 1, 3];
const sorted = [1, 2, 3, 4, 5, 6];
const reverseSorted = [...sorted].reverse();

describe('insertionSort', () => {
  it('insertionSort', () => {
    expect(insertionSort(source)).toEqual(sorted);
  });
  it('reverse insertionSort', () => {
    expect(reverseInsertionSort(source)).toEqual(reverseSorted);
  });
});
