function insertionSort(arr) {
    for (let i = 1; i < arr.length; i++) {
        let currentValue = arr[i];
        let j;
        for (j = i - 1; j >= 0 && arr[j] > currentValue; j--) {
            arr[j + 1] = arr[j];
        }

        arr[j+1] = currentValue;
    }
    return arr;
}

console.log(insertionSort([2, 1, 9, 76, 4]));
console.log(insertionSort([12, 4, 9, 2, 0, -9, 5, 99, 87]));
console.log(insertionSort([6, 9, 5, 7, 3, 2, 4, 0]));