function countUniqueValues(value) {

    let count = 1;
    let left = 0;
    let right = left + 1;
   
    
    if (value.length < 1) {
        return 0;
    }
 
    while (right < value.length) {

        if (value[left] == value[right]) {
            right++;
        } else {
            count++;
            left = right;
           
        }
    }
    return count;
}

console.log(countUniqueValues([1, 1, 1, 1, 1, 2]));
console.log(countUniqueValues([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13]));
console.log(countUniqueValues([]));
console.log(countUniqueValues([-2, -1, -1, 0, 1]));
console.log(countUniqueValues([0,0,0,0,0,9999,5,15,5]));
