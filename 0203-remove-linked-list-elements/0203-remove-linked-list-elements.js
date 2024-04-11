/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function(head, val) {
    let temp = new ListNode(0); // create a dummy node
    let curr = temp;
    temp.next = head // attach dummy node before head

    while(curr.next !== null){
        const nextNode = curr.next;
        if(nextNode.val === val) {
            curr.next = nextNode.next;
        }else{
            curr = nextNode;
        }
    }
    return temp.next;
};