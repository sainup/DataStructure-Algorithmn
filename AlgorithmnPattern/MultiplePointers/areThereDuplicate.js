function areThereDuplicates() {
    let left = 0;
    let right = left + 1;

    while (left < arguments.length) {
        if (arguments[left] == arguments[right]) {
            return true;
        }

        right++;
        if (right > arguments.length - 1) {
            left++;
            right = left + 1;
        }
    }
    return false;
}

console.log(areThereDuplicates(1, 2, 3,4,5,6,7,8,9,9));
console.log(areThereDuplicates(1, 2, 2));
console.log(areThereDuplicates('a', 'b', 'b'));
console.log(areThereDuplicates('a', 'b', 'b', 'b'));