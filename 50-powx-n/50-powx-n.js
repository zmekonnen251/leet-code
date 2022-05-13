/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function(x, n) {
    
    if(n==0) return 1
    else if(n==1) return x
    else if(n==-1) return 1/x
    else if(n%2==0){
        let temp = myPow(x,n/2);
        return temp*temp;
    }
    else if(n%2!==0){
        return x*myPow(x,n-1);
    }
   
}


