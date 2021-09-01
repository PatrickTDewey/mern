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
