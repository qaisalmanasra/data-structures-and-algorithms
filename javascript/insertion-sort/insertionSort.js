'use strict';

let inputArr1 = [8, 4, 23, 42, 16, 15];
let inputArr2 = [20, 18, 12, 8, 5, -2];
let inputArr3 = [5, 12, 7, 5, 5, 7];
let inputArr4 = [2, 3, 5, 7, 13, 11];

function insertionSort(inputArr) {
  for (let i = 1; i < inputArr.length; i++) {
    let key = inputArr[i];
    let j = i - 1;
    while (j >= 0 && inputArr[j] > key) {
      inputArr[j + 1] = inputArr[j];
      j = j - 1;
    }
    inputArr[j + 1] = key;
  }
  return inputArr;
}

console.log(insertionSort(inputArr1));
console.log(insertionSort(inputArr2));
console.log(insertionSort(inputArr3));
console.log(insertionSort(inputArr4));

module.exports = insertionSort;
