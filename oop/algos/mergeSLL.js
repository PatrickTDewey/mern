/**
  Definition for singly-linked list.
  function ListNode(val, next) {
      this.val = (val===undefined ? 0 : val)
      this.next = (next===undefined ? null : next)
  }
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
 var mergeTwoLists = function(l1, l2) {
    const sorted = new ListNode;
    listOneRunner = l1;
    listTwoRunner = l2;
    while(l1.next != null && l2.next != null){
        if(l1.val < l2.val){
            if (sorted.val == 0 ) {
                sorted.val = l1.val
            }
            sorted.val = l1.val;
            sorted.next = null;
            l1 = l1.next;
            sorted = sorted.next;
        } else {
            sorted.val = l2.val;
            sorted.next = null
        }
    }
};

function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}

