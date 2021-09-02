const arr = [38, 27, 43, 3, 9, 82, 10];
const oneToTen = [10, 6, 5, 3, 8, 9, 1, 4, 2, 7]

function bubbleSort(array) {
  const arr = [...array];
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 0; j < arr.length - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]
      }
    }
  }
  return arr
}

/**
 *
 * @param { Array<number> } array
 * @returns { Array<number>}
 */
function selectionSort(array) {
  const arr = [...array];
  for (let i = 0; i < arr.length - 1; i++) {
    let min = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[min]) {
        min = j;
      }
    }
    [arr[i], arr[min]] = [arr[min], arr[i]];
  }
  return arr
}

function insertionSort(array) {
  for (let i = 1; i < array.length; i++) {
    for (let j = i; j > 0; j--) {
      if (array[j] < array[j - 1]) {
        [array[j - 1], array[j]] = [array[j], array[j - 1]]
      }
      else {
        break;
      }
    }
  }
  return array;
}

const merge = (arr, left, right) => {
  let i = 0
  let l = 0
  let r = 0
  while (l < left.length && r < right.length) {
    if (left[l] <= right[r]) {
      arr[i] = left[l]
      l++
    } else {
      arr[i] = right[r]
      r++
    }
    i++
  }
  while (l < left.length) {
    arr[i] = left[l]
    l++
    i++
  }
  while (r < right.length) {
    arr[i] = right[r]
    r++
    i++
  }
  return arr
}

/**
 * Sorts the given nums in-place by dividing the array in half recursively until only one element exists then begins merging
 * and sorting both halves then merging them.
 * Best: O(n*log*n)
 * Average: O(n*log*n)
 * Worst: O(n*log*n)
 * @param {Array<number>} nums
 * @returns {Array<number>} The given nums after being sorted.
 */
const mergeSort = (arr) => {
  if (arr.length < 2) {
    return arr;
  }
  let mid = Math.floor(arr.length / 2)
  let left = arr.slice(0, mid)
  let right = arr.slice(mid, arr.length)
  mergeSort(left);
  mergeSort(right);
  merge(arr, left, right)
  return arr;
}
console.log(mergeSort(oneToTen))

const factorial = (n) => n == 1 || n == 0 ? 1 : n * factorial(n - 1);

let myArray = [1, 2, 9, 600, 5, 8, 9000, -2, 6, 4, 3, 10, 70, 300];

const partition = (array, left, right) => {
  let pivot = array[Math.floor(Math.random() * (right - left) + 1) + left]; // random number between left & arr.length - 1
  while (left < right) {
    while (array[left] < pivot) {
      left++;
    }
    while (array[right] > pivot) {
      right--;
    }
    [array[left], array[right]] = [array[right], array[left]]
  }
  return right;
}

const quickSort = (array, left = 0, right = array.length - 1) => {
  let pivot = partition(array, left, right);
  if (left <= right) {
    quickSort(array, left, pivot - 1);
    quickSort(array, pivot + 1, right);
  }

}
console.log(quickSort(myArray));
console.log(myArray);
