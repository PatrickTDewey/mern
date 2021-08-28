let myArray = [1, 2, 9, 600, 5, 8, 9000, -2, 6, 4, 3, 10, 70, 300];

const partition = (array, left, right) => {
    let pivot = array[Math.floor(Math.random() * (right - left) + 1) + left]; // random number between 0 - arr.length
    console.log(pivot);
    while (left < right) {
        while (array[left] < pivot) {
            left++;
        }
        while (array[right] > pivot) {
            right--;
        }
        let temp = array[left];
        array[left] = array[right]
        array[right] = temp;
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