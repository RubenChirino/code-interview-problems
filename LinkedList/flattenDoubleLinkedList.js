// Node class definition
class Node {
    constructor(val, prev = null, next = null, child = null) {
        this.val = val;
        this.prev = prev;
        this.next = next;
        this.child = child;
    }
}

// Solution class including the flatten method
class Solution {
    flatten(head) {
        if (!head) {
            return null;
        }
        let pseudoHead = new Node(0);
        this.flattenDFS(pseudoHead, head);
        pseudoHead.next.prev = null; // Detach pseudo head
        return pseudoHead.next;
    }

    flattenDFS(prev, curr) {
        if (!curr) return prev;
        curr.prev = prev;
        prev.next = curr;
        let tempNext = curr.next;
        let tail = this.flattenDFS(curr, curr.child);
        curr.child = null;
        return this.flattenDFS(tail, tempNext);
    }
}

// Helper function to print the list
function printList(head) {
    let current = head;
    while (current !== null) {
        console.log(current.val);
        current = current.next;
    }
}

// Example list creation
let head = new Node(1);
head.next = new Node(2, head);
head.next.next = new Node(3, head.next);
head.next.next.next = new Node(4, head.next.next);

head.next.child = new Node(5);
head.next.child.next = new Node(6, head.next.child);

head.next.child.child = new Node(7);

/*
Level 1: 1 - 2 - 3 - 4
Level 2: 5 - 6 (child of 2)
Level 3: 7 (child of 5)
*/

// Flatten the list
let solution = new Solution();
let flattenedHead = solution.flatten(head);

// Print the flattened list
printList(flattenedHead);  // 1 - 2 - 5 - 7 - 6 - 3 - 4
