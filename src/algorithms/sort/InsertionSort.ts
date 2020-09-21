/**
 * 插入排序
 * best n
 * worst n^2
 * average n^2
 * @param source
 */

function insertionSort(source: number[]) {
  for (let index = 0; index < source.length; index++) {
    let currentIndex = index;
    while (source[currentIndex - 1] && source[currentIndex] < source[currentIndex - 1]) {
      [source[currentIndex - 1], source[currentIndex]] = [
        source[currentIndex],
        source[currentIndex - 1],
      ];
      currentIndex -= 1;
    }
  }
  return source;
}

function reverseInsertionSort(source: number[]) {
  for (let index = 0; index < source.length; index++) {
    let currentIndex = index;
    while (source[currentIndex - 1] && source[currentIndex] > source[currentIndex - 1]) {
      [source[currentIndex - 1], source[currentIndex]] = [
        source[currentIndex],
        source[currentIndex - 1],
      ];
      currentIndex -= 1;
    }
  }
  return source;
}

export { insertionSort, reverseInsertionSort };
