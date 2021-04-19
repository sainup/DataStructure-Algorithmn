function minSubArrayLen(arr,value){
    if(!arr.length){
        return 0;
    }

    let sum = 0;
    let count =0;
    let temCount = 0;
    for(let i=0;i<arr.length;i++){
        if(arr[i] >= value){
            return 1;
        }
        if(sum >= value){
            break;
        }
        sum += arr[i];
        count++; 
    }

    

}
console.log(minSubArrayLen([2,3,1,2,4,3],7));
console.log(minSubArrayLen([2,1,6,5,4],9));
console.log(minSubArrayLen([3,1,7,11,2,9,8,21,62,33,19],59));
console.log(minSubArrayLen([1,4,16,22,5,7,8,9,10],39));
console.log(minSubArrayLen([1,4,16,22,5,7,8,9,10],55));
console.log(minSubArrayLen([4,3,3,8,1,2,3],11));
console.log(minSubArrayLen([1,4,16,22,5,7,8,9,10],95));

