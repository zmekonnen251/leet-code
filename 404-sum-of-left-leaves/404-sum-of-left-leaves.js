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
var sumOfLeftLeaves = function(root) {
		if(root===null){
			return 0;
		}else{
			const sumHelper=(node)=>{
				if(node===null){
					return 0;
				}
                
                let data = 0;
                let leftSum = 0;
                let rightSum = 0;
                
                if(node.left){
                   if(!node.left.left && !node.left.right) data = node.left.val;
                   leftSum = sumHelper(node.left);
                }
                
				
				if(node.right) rightSum = sumHelper(node.right);
                
				
				return data+leftSum+rightSum;
			}
			return sumHelper(root);
    
        }
		
};