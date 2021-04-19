function isSubsequence(str1, str2) {

    if (str1.length < 1 || str2 < 1) {
        return false;
    }
    let left = 0;
    let right = 0;

    while (left < str1.length) {

        if (right > str2.length - 1) {
            return false;
        }

        if (str1.charAt(left) === str2.charAt(right)) {
            right++;
            left++;
        } else {
            right++;
        }
    }
    return true;
}
console.log(isSubsequence('hello', 'hello world')); // true
console.log(isSubsequence('sing', 'sting')); // true
console.log(isSubsequence('abc', 'abracadabra')); // true
console.log(isSubsequence('abc', 'acb')); // false
console.log(isSubsequence('abc', 'aekoijwqiebkoppokoqweeo'));