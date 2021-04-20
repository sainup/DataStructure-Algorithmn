function merge(arr1, arr2) {
    let tempArr = [];
    let i = 0;
    let j = 0;
    while (i < arr1.length && j < arr2.length) {
        if (arr1[i] < arr2[j]) {
            tempArr.push(arr1[i]);
            i++;
        } else {
            tempArr.push(arr2[j]);
            j++;
        }
    }
    while (i < arr1.length) {
        tempArr.push(arr1[i]);
        i++;
    }
    while (j < arr2.length) {
        tempArr.push(arr2[j]);
        j++;
    }
    return tempArr;
}

function mergeSort(arr) {

    if (arr.length <= 1) return arr;
    let mid = Math.floor(arr.length / 2);
    let left = mergeSort(arr.slice(0, mid));
    let right = mergeSort(arr.slice(mid));

    return merge(left, right);
}

console.log(mergeSort([10, 24, 76, 73, 20, 55, 99, 23, 1, 5]));