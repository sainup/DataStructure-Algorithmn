


function reverse(str) {

    let tempString = '';

    function helper(input) {

        if (input.length < 1) {
            return;
        }

        tempString += input[input.length - 1];

        helper(input.slice(0, input.length - 1));
    }
    helper(str);
    return tempString;
}

console.log(reverse('anup'));
console.log(reverse('awesome'));
console.log(reverse('rithmschool'));