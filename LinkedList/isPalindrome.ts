class ListNode {
    val: number;
    next: ListNode | null;

    constructor(val: number, next?: ListNode | null) {
        this.val = val;
        this.next = next === undefined ? null : next;
    }
}

function isPalindrome(head: ListNode | null): boolean {
    if (head === null) return true;

    // Find the end of the first half and reverse the second half.
    const firstHalfEnd: ListNode = endOfFirstHalf(head);
    let secondHalfStart: ListNode | null = reverseList(firstHalfEnd.next);

    // Check whether or not there is a palindrome.
    let p1: ListNode | null = head;
    let p2: ListNode | null = secondHalfStart;
    let result: boolean = true;
    while (result && p2 !== null) {
        if (p1!.val !== p2.val) result = false;
        p1 = p1!.next;
        p2 = p2.next;
    }

    // Restore the list and return the result.
    firstHalfEnd.next = reverseList(secondHalfStart);
    return result;
}

function reverseList(head: ListNode | null): ListNode | null {
    let prev: ListNode | null = null;
    let curr: ListNode | null = head;
    while (curr !== null) {
        const nextTemp: ListNode | null = curr.next;
        curr.next = prev;
        prev = curr;
        curr = nextTemp;
    }
    return prev;
}

function endOfFirstHalf(head: ListNode): ListNode {
    let fast: ListNode = head;
    let slow: ListNode = head;
    while (fast.next !== null && fast.next.next !== null) {
        fast = fast.next.next;
        slow = slow.next;
    }
    return slow;
}