// Define the ListNode class
class ListNode {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

// Function to swap pairs of nodes
function swapPairsIterative(head) {
    const dummy = new ListNode(-1);
    dummy.next = head;

    let prevNode = dummy;

    while (head !== null && head.next !== null) {
        // Nodes to swap
        const node1 = head;
        const node2 = head.next;

        // Swapping
        prevNode.next = node2;
        node1.next = node2.next; // Next node to go 
        node2.next = node1;

        prevNode = node1;
        head = node1.next; // jump
    }

    return dummy.next;
}

// Example usage:
const head = new ListNode(1);
head.next = new ListNode(2);
head.next.next = new ListNode(3);
head.next.next.next = new ListNode(4);

const swappedHead = swapPairsIterative(head);

// Print the swapped list
let currentNode = swappedHead;
while (currentNode !== null) {
    console.log(currentNode.val);
    currentNode = currentNode.next;
}

function swapPairsRecursive(head) {
    // If the list has no node or has only one node left.
    if (head === null || head.next === null) {
        return head;
    }

    // Nodes to be swapped
    let firstNode = head;
    let secondNode = head.next;

    // Swapping
    firstNode.next = swapPairsRecursive(secondNode.next);
    secondNode.next = firstNode;

    // Now the head is the second node
    return secondNode;
}

// Example Usage
const head2 = new ListNode(1);
head2.next = new ListNode(2);
head2.next.next = new ListNode(3);
head2.next.next.next = new ListNode(4);

let swappedList = swapPairsRecursive(head2);

// Function to print the list
function printList(node) {
    let result = [];
    while (node) {
        result.push(node.val);
        node = node.next;
    }
    return result.join(' -> ');
}

console.log('Original List: 1 -> 2 -> 3 -> 4');
console.log('Swapped List:', printList(swappedList));
