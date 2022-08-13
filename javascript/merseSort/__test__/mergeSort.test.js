'use strict';

const mergeSort = require('../mergeSort');

describe('Merge Sort Test', () => {
  it('Sample Array', () => {
    expect(mergeSort([8, 4, 23, 42, 16, 15])).toEqual([4, 8, 15, 16, 23, 42]);
  });
  it('Reverse-sorted', () => {
    expect(mergeSort([20, 18, 12, 8, 5, -2])).toEqual([-2, 5, 8, 12, 18, 20]);
  });
  it('Few uniques', () => {
    expect(mergeSort([5, 12, 7, 5, 5, 7])).toEqual([5, 5, 5, 7, 7, 12]);
  });
  it('Nearly-sorted', () => {
    expect(mergeSort([2, 3, 5, 7, 13, 11])).toEqual([2, 3, 5, 7, 11, 13]);
  });
});
