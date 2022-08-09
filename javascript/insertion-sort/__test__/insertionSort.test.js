'use strict';

const insertionSort = require('../insertionSort');

describe('Insertion Sort Test', () => {
  it('Reverse-sorted', () => {
    let inputArr = [20, 18, 12, 8, 5, -2];
    insertionSort(inputArr);
    expect(inputArr).toEqual([-2, 5, 8, 12, 18, 20]);
  });
  it('Few uniques', () => {
    let inputArr = [5, 12, 7, 5, 5, 7];
    insertionSort(inputArr);
    expect(inputArr).toEqual([5, 5, 5, 7, 7, 12]);
  });
  it('Nearly-sorted', () => {
    let inputArr = [2, 3, 5, 7, 13, 11];
    insertionSort(inputArr);
    expect(inputArr).toEqual([2, 3, 5, 7, 11, 13]);
  });
});
