

function validAnagram(firstStr, secondStr) {
    let firstSum = 0;
    let secondSum = 0;
    for (const char of firstStr) {
        firstSum = firstSum + char.charCodeAt(0);
    }
    
    for (const char of secondStr) {
        secondSum = secondSum + char.charCodeAt(0);
      
    }
    
    if (firstSum === secondSum) {
        return true;
    }
    return false;
}
console.log(validAnagram('anagr  am ', 'naga r  am'));
