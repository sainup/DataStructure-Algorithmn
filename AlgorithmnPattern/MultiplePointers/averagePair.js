function averagePair(arr, target) {

    if (arr.length < 1) {
        return false;
    }

    let left = 0;
    let right = left + 1;

    while (left < arr.length) {

        let average = (arr[left] + arr[right]) / 2;
        if (average === target) {
            return true;
        }

        right++;
        if (right > arr.length - 1) {
            left++;
            right = left + 1;
        }
    }

    return false;
}

console.log(averagePair([1, 2, 3], 2.5)); //true
console.log(averagePair([1, 3, 3, 5, 6, 7, 10], 8)); //true
console.log(averagePair([-1, 0, 3, 4, 5, 6], 4.1)); //false
console.log(averagePair([], 4)); //false
