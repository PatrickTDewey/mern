/* eslint-disable no-unused-vars */
// function bubbleSort(array) {
//   const arr = [...array];
//   for (let i = 0; i < arr.length - 1; i++) {
//     for (let j = 0; j < arr.length - 1 - i; j++) {
//       if (arr[j] > arr[j + 1]) {
//         [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]
//       }
//     }
//   }
//   return arr
// }
// const arr = [500, 250, 2, 340, 420, 10, 11, 2, 1]
// console.log(bubbleSort(arr))
// console.log(arr)


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
const arr = [1, 400, 200, 300, 3, 0, 5, 4];
// console.log(selectionSort(arr))

/**
 *
 */
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

function insertionSortSwap(nums) {
  // first sorted
  for (let i = 1; i < nums.length; i++) {
    for (let j = i; j > 0; j--) {
      if (nums[j] < nums[j-1]) {
        let temp = nums[j];
        nums[j] = nums[j-1];
        nums[j-1] = temp;
      }
    }
  }
  return nums;
}

console.log(insertionSortSwap(arr));

function insertionSortShift(nums) {
  //consider the first item is already sorted
  for (var indexCompared = 0; indexCompared < nums.length; indexCompared++) {
    // take whatever the current value of the index at i (one) and store it as a variable
    var currentValueBeingCompared = nums[indexCompared];
    var leftIndex = indexCompared - 1;
    // continue to compare it to the prior index, while it is smaller than the prior value, swap it
    while (nums[leftIndex] > currentValueBeingCompared) {
      if (leftIndex > 0) {
        nums[leftIndex + 1] = currentValueBeingCompared;
        leftIndex--;
      }
    }
    //swap with the current value
    nums[leftIndex + 1] = currentValueBeingCompared;
  }
  //return the array nums
  return nums;
}

// mergeSort, partition, quickSort, radixSort
