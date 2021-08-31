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
console.log(selectionSort(arr))
