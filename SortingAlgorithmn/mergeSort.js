function merge(arr1, arr2) {
    let tempArr = [];
    let i = 0; //index for arr1
    let j = 0; //index for arr2

    //loop until i and j are less than the lenght of thier array
    while (i < arr1.length && j < arr2.length) {
        //if arr1[i] less than arr2[j], push that element in the tempArr and increment i 
        if (arr1[i] < arr2[j]) {
            tempArr.push(arr1[i]);
            i++;
        } else {  //else push arr2[j] and increment j
            tempArr.push(arr2[j]);
            j++;
        }
    }

    //loops and pushes remaining elements of arr1 to the tempArr
    while (i < arr1.length) {
        tempArr.push(arr1[i]);
        i++;
    }
    //loops and pushes remaining elements of arr2 to the tempArr
    while (j < arr2.length) {
        tempArr.push(arr2[j]);
        j++;
    }
    return tempArr;
}

function mergeSort(arr) {

    if (arr.length <= 1) return arr; //base condition returns arr when arr.length hits 1 or lower
    let mid = Math.floor(arr.length / 2); //mid point of the array
    let left = mergeSort(arr.slice(0, mid)); // divides the array to the left
    let right = mergeSort(arr.slice(mid)); //divides the array to the right 

    return merge(left, right); //merges both left and right array and returns it
}

console.log(mergeSort([10, 24, 76, 73, 20, 55, 99, 23, 1, 5]));