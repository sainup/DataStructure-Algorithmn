function sameFrequency(num1, num2){

    let obj1 = {};
    let obj2 = {};
    let count1 = 0;
    let count2 = 0;
    if(num1 === num2){
        return true;
    }
    while(num1 > 0){ 
        obj1[num1 % 10] = (obj1[num1 % 10] || 0 ) + 1;
        num1 = Math.floor(num1 / 10);
        count1++;
    }
    while(num2 > 0){ 
        obj2[num2 % 10] = (obj2[num2 % 10] || 0 ) + 1;
        num2 = Math.floor(num2 / 10);
        count2++;
    }

    if(count1 !== count2){
        return false
    }

    console.log(obj1, obj2);
    

    for(let key in obj1){
        if(!obj2.hasOwnProperty(key)){
            return false;
        }


    }

    return true;
    

}
      

console.log(sameFrequency(2232,2223));
console.log(sameFrequency(34,14));
console.log(sameFrequency(3589578,5879385));
console.log(sameFrequency(22,222));
console.log(sameFrequency(987654321,987654321));