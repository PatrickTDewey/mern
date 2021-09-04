const nums1 = [11, 8, 14, 3, 6, 2, 7];
const expected1 = [2, 3, 6, 7, 8, 11, 14];
/**
 * Recursively sorts the given array in-place by mutating the array.
 * Best: O(n log(n)) linearithmic.
 * Average: O(n log(n)) linearithmic.
 * Worst: O(n^2) quadratic.
 * @param {Array<number>} nums
 * @param {number} left The index indicating the start of the slice of the
 *    given array being processed.
 * @param {number} right The index indicating the end of the slice of the
 *    given array being processed.
 * @returns {Array<number>} The given array after being sorted.
 */
function quickSort(nums = [], left = 0, right = nums.length - 1) {
    // FIND PIVOT
    let pivot = partition(nums, left, right);
    if (left <= right) {
        quickSort(nums, left, pivot - 1)
        quickSort(nums, pivot + 1, right)
    }
    // IF left <= right
    // execute sort to left of pivot and right of pivot
}
// [0,1,2,4,6]
// partition
// function partition(nums, left, right) {
//     // const midIdx = Math.floor((left + right) / 2);
//     const pivot = Math.floor(Math.random() * (right - left) + 1) + left;
//     const pivotVal = nums[pivot];
//     let leftIdx = left;
//     let rightIdx = right;

//     while (true) {
//         while (nums[leftIdx] < pivotVal) {
//             leftIdx += 1;
//         }

//         while (nums[rightIdx] > pivotVal) {
//             rightIdx -= 1;
//         }

//         if (leftIdx >= rightIdx) {
//             return rightIdx;
//         }

//         [nums[leftIdx], nums[rightIdx]] = [nums[rightIdx], nums[leftIdx]];
//         leftIdx += 1;
//         rightIdx -= 1;
//     }
// }
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

quickSort(nums1)
console.log(nums1);