/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    const numOfDigit = x.toString();
    const numArray = x.toString().split('');
    const arrayLength = numArray.length;
    let isPalindrome = false;
    
    for(let i=0;i<Math.ceil(arrayLength/2);i++){
        if(numArray[i]===numArray[arrayLength-1-i]){
            isPalindrome = true;
            continue;
            
        }else{
            isPalindrome=false;
            break;
        }
    }
    return isPalindrome;
};