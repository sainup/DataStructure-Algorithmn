
//gets the digit place of a number
function getDigit(num, place) {
    return (Math.floor(Math.abs(num) / Math.pow(10, place))) % 10;
}

//gets the count of digits in a number
function digitCount(num = 0) {
    if (num === 0) return 1;
    return Math.floor(Math.log10(Math.abs(num))) + 1;
}

//gets the max number of digit in a number 
function mostDigits(nums) {
    let max = 0;
    for (let num of nums) {
        let count = digitCount(num);
        if (max < count) {
            max = count;
        }
    }
    return max;
}

function radixSort(nums) {

    //finding the max digit of the largets number
    let max = mostDigits(nums);

    //looping from k = 0 to max
    for (let k = 0; k < max; k++) {
        //creating bucket for each digit(0 to 9)
        let digitBuckets = Array.from({ length: 10 }, () => []);
        //looping through nums and placing each number in the corresponding bucket based on its kth digit
        for (let i = 0; i < nums.length; i++) {
            let digit = getDigit(nums[i], k); //getting the kth digit
            digitBuckets[digit].push(nums[i]); //pushing into the bucket based on kth digit
        }

        nums = [].concat(...digitBuckets); //replacing existing array with values from our bucket 
    }

    return nums;
}

console.log(radixSort([23,1,5,897,4654,2,0,1.23,5989,5.26899]));

