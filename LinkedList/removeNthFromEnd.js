function ListNode(val, next = null) {
    this.val = val;
    this.next = next;
}

function removeNthFromEnd(head, n) {
    if (head === null) {
        return head;
    }
    
    let currNode = head;
    let index;
    for (index = 0; index < n && currNode !== null; index++) {
        currNode = currNode.next;
    }

    if (currNode === null) {
        return head.next;
    }

    let nodeBeforeRemoved = head;
    while (currNode.next !== null) {
        currNode = currNode.next;
        nodeBeforeRemoved = nodeBeforeRemoved.next;
    }

    nodeBeforeRemoved.next = nodeBeforeRemoved.next.next;

    return head;
}

// Function to print linked list
function printLinkedList(head) {
    let curr = head;
    let str = '';
    while (curr !== null) {
        str += curr.val + ' -> ';
        curr = curr.next;
    }
    console.log(str + 'null');
}

// Create the linked list 1 -> 2 -> 3 -> 4 -> 5
/* let head1 = new ListNode(1);
head1.next = new ListNode(2);
head1.next.next = new ListNode(3);
head1.next.next.next = new ListNode(4);
head1.next.next.next.next = new ListNode(5);

console.log("Original Linked List:");
printLinkedList(head1);

// Remove the 2nd node from the end
head1 = removeNthFromEnd(head1, 2);

console.log("Linked List After Removal:");
printLinkedList(head1); */

// Example: Input: head = [1,2], n = 1
let head = new ListNode(1, new ListNode(2));

console.log("Original Linked List:");
printLinkedList(head);

// Remove the 1st node from the end
head = removeNthFromEnd(head, 1);

console.log("Linked List After Removal:");
printLinkedList(head);