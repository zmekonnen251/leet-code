/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    let isNegetive = false;
    if(x<0){
        x=-1*x;
        isNegetive=true;
    }
    
    let outPut = 0;
    
    if(-Math.pow(2,31) <= x <= (Math.pow(2,31)-1)){
         let xArr = x.toString().split('');
    const resultArr = [];
    for(let i=xArr.length-1;i>=0;i--){
        resultArr.push(xArr[i]);
    }
    const result = +(resultArr.join(''));
   
    if(isNegetive) outPut=-1*result;
    else outPut=result;
    }
    
    if(outPut>=-1*Math.pow(2,31) && outPut <= (Math.pow(2,31)-1)){
        return outPut;
    }else{
        return 0;
    }
   
}