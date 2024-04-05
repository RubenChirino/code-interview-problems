function ListNode(val) {
    this.val = val;
    this.next = null;
}

function hasCycle(head) {
    if (head === null || head.next === null) {
        return false;
    }
    
    let hare = head.next;
    let tortoise = head;

    while (hare !== null && hare.next !== null) {
        hare = hare.next.next;
        tortoise = tortoise.next;

        if (hare === tortoise) {
            return true;
        }
    }

    return false;
}

// Create the linked list
let head = new ListNode(1);
head.next = new ListNode(2);

// Create a cycle for the test case: pos = 0 indicates the cycle starts at the head
head.next.next = head; // This creates the cycle by connecting the tail to the head

// Test the hasCycle function
console.log(hasCycle(head)); // Expected output: true
