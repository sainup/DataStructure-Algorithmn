function maxSubarraySum(arr, value) {

    if (arr.length < 1 || value > arr.length - 1) {
        return null;
    }

    if (value < 1) {
        return 0;
    }

    let sum = 0;

    for (let i = 0; i < value; i++) {
        sum += arr[i];
    }
    let tempSum = sum;

    for (let i = value; i < arr.length; i++) {
        tempSum = tempSum - arr[i - value] + arr[i]
        if (tempSum > sum) {
            sum = tempSum
        }
    }
    return sum;
}

console.log(maxSubarraySum([100, 200, 300, 400], 2));
console.log(maxSubarraySum([1, 4, 2, 10, 23, 3, 1, 0, 20], 4));
console.log(maxSubarraySum([-3, 4, 0, -2, 6, -1], 2));
console.log(maxSubarraySum([3, -2, 7, -4, 1, -1, 4, -2, 1], 2));
console.log(maxSubarraySum([2, 3], 3));