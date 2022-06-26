/**
 * @param {number[]} cardPoints
 * @param {number} k
 * @return {number}
 */
var maxScore = function(cardPoints, k) {
    let left = 0; 
    let right = 0; 
    
    for(let i = 0; i < k; i++){
        left = left + cardPoints[i];
    }
    let maxScore = left
    for(let i = k - 1; i >= 0; i--){
        left = left - cardPoints[i]
        right = right + cardPoints[cardPoints.length-(k-i)]
        maxScore = Math.max(maxScore,right+left);
    }
    return maxScore
};