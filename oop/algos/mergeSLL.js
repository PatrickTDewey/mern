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
const mergeTwoLists = function (l1, l2) {
    let sorted = new ListNode;
    let runner = sorted
    if (l1.length === null && l2.length === null) {
        return l1;
    }
    if (l1.val <= l2.val) {
        sorted.val = l1.val
        l1 = l1.next;
    } else {
        sorted.val = l2.val
        l2 = l2.next;
    }
    debugger
    while (l1 != null && l2 != null) {
        
        if (l1.val <= l2.val) {
            runner.next = l1;
            l1 = l1.next;
        } else {
            runner.next = l2;
            l2 = l2.next;
        }

        runner = runner.next;
    }
    while (l1 != null){
            runner.next = l1;
            l1 = l1.next;
            runner = runner.next;
    }
    while(l2 != null){
        runner.next = l2;
        l2 = l2.next;
        runner = runner.next;
    }

};
const l1 = new ListNode(1)
l1.next = new ListNode(3)
l1.next.next = new ListNode(4)
console.log(l1);
const l2 = new ListNode(1)
l2.next = new ListNode(2)
l2.next.next = new ListNode(5)
console.log(l2);
function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}
mergeTwoLists(l1, l2)
