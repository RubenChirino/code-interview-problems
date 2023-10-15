// Question
// Palindrome: Implement a function to check if a linked list is a Palindrome.

function ListNode(val) {
    this.val = val;
    this.next = null;
}

function isPalindrome(head) {
    if (head === null) return true;

    let fast = head;
    let slow = head;

    while (fast !== null && fast.next !== null) {
        slow = slow.next;
        fast = fast.next.next;
    }

    fast = head;
    slow = reverse(slow);

    while (slow !== null) {
        if (fast.val !== slow.val) return false;
        fast = fast.next;
        slow = slow.next;
    }

    return true;
}

function reverse(node) {
    let prev = null;
    while (node !== null) {
        const nextTemp = node.next;
        node.next = prev;
        prev = node;
        node = nextTemp;
    }
    return prev;
}

// Test 1
const node1 = new ListNode(1);
const node2 = new ListNode(2);
const node3 = new ListNode(2);
const node4 = new ListNode(1);

node1.next = node2;
node2.next = node3;
node3.next = node4;

const result = isPalindrome(node1);
console.log(result);  // true

// Solution Explanation link: 
// https://leetcode.com/problems/palindrome-linked-list/solutions/4116630/java-solution-4ms-beats-80-bcr
