
function pivotHelper(arr, start = 0, end = arr.length - 1) {


    //pivot at the start of array
    let pivot = start;

    //storing current pivot in the variable 
    let currentPivotIndex = pivot;

    //loop through the array
    while (start <= end) {

        //if pivot greater than the current element increment the pivot index variable
        // and then swap the current element with the element at the pivot index
        if (arr[pivot] > arr[start]) {
            currentPivotIndex++;
            let temp = arr[start];
            arr[start] = arr[currentPivotIndex];
            arr[currentPivotIndex] = temp;
        }

        start++;
    }

    //swap the pivot element with the pivot index
    let temp = arr[pivot];
    arr[pivot] = arr[currentPivotIndex];
    arr[currentPivotIndex] = temp;


    return currentPivotIndex;

}

function quickSort(arr, left = 0, right = arr.length - 1) {

    //if left is greater than right then execute
    if (left < right) {
        //sorting and returning pivotIndex
        let pivotIndex = pivotHelper(arr, left, right);
        //sorting left side pivot
        quickSort(arr, left, pivotIndex - 1);
        //sorting right side of the pivot 
        quickSort(arr, pivotIndex + 1, right);
    }
    return arr;

}

console.log(quickSort([5, 2, 1, 8, 7, 4, 6, 10, 88, 20, 3, -20]));
