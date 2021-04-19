function productOfArray(arr){
    let result = 1;

    function helper(input){
        if(input.length < 1){
            return 1;
        }
        result *= input[0];
        helper(input.slice(1));  
    }
    helper(arr);  
    return result;
}

console.log(productOfArray([1,2,3]));
console.log(productOfArray([1,2,3,10]));
console.log(productOfArray([1,2,3,4,5,6,7,8,9,10]));