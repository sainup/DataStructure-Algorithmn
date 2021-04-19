function fib(num) {
    if ( num <= 2) {
        return 1 ;
    }

    
    return fib(num -2) +  fib(num - 1);

}

function fib1(num){

    let p = (1 +  Math.sqrt(5)) / 2;
    let ps = (1- Math.sqrt(5)) / 2
    let powerOfp = Math.pow(p,num)
    let powerOfps = Math.pow(ps,num)
  
    result = Math.floor( (powerOfp - powerOfps ) / Math.sqrt(5) );
    return result;
}


// console.log(fib(10)); //O(n^2)
console.log(fib(50));
console.log(fib1(99)); // O(1);

//O(n);
//O(logn)