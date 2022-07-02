/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
// var addTwoNumbers = function(l1, l2) {
//     const num1 = []
//     const num2 = []
    
//     let temp1 = l1;
//     let temp2 = l2;
    
//     while(temp1 || temp2){
//         if (temp1) {
//             num1.unshift(temp1.val);
//              temp1=temp1.next;
//         }
        
//         if(temp2) {
//             num2.unshift(temp2.val);
//             temp2=temp2.next;
//         }
       
        
//     }
//     const result = +num1.join('') + (+num2.join(''));
//     const resultArr = (`${result}`).split('');
    
//     let node = undefined;
    
//     for(let i=0; i<resultArr.length;i++){
//         if(node===undefined){
//           node = new ListNode(resultArr[i]);
//       }else{

//           const newNode = new ListNode(resultArr[i]);
//           newNode.next = node;
//           node = newNode;
//       }
//     }
     
//     return node;

// };

var addTwoNumbers = function(l1, l2) {
    let str1 ="";
    let str2 ="";
    while (l1) {
    str1 = str1+l1.val;
    l1 = l1.next; 
    }
    while (l2) {
    str2 = str2+l2.val;
    l2 = l2.next; 
    }
    let sum = BigInt(str1.split("").reverse().join(""))+BigInt(str2.split("").reverse().join(""));
    let ans = sum.toString().split("").map((n)=>n=parseInt(n));
    let node = undefined;
    ans.forEach(item => {
        if (node === undefined) {
            node = new ListNode(item);
        } else {
            const newNode = new ListNode(item);
            newNode.next = node;
            node = newNode;
        }
    });
    return node;
};

            
            

