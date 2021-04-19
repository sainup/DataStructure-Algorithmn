function bubbleSort(arr) {

    for (let i = arr.length - 1; i > 0; i--) {
        let noSwaps = true;
        for (let j = 0; j < i -1; j++) {
            if (arr[j] > arr[j + 1]) {
                temp = arr[j + 1];
                arr[j + 1] = arr[j];
                arr[j] = temp;
                noSwaps = false
            }
        }
        if(noSwaps) break;
    }

    return arr;

}

console.log(bubbleSort([2, 1, 9, 76, 4]));
console.log(bubbleSort([9,45,87,2,3,98]));