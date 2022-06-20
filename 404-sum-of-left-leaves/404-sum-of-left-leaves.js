/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var sumOfLeftLeaves = function(node) {
    if(node===null) return 0;
	
    let data = 0, leftSum = 0 , rightSum = 0;
    
    if(node.left){
        if(!node.left.left && !node.left.right) data = node.left.val;
        leftSum = sumOfLeftLeaves(node.left);
    }
    
    if(node.right) rightSum = sumOfLeftLeaves(node.right);
                   
    return data+leftSum+rightSum;           
                 		
};