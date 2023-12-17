class LinkedList {
    head: LinkedListNode | null;
    tail: LinkedListNode | null;

    constructor() {
        this.head = null;
        this.tail = null;
    }

    prepend(value: any) {
       const newHead = new LinkedListNode(value);
       newHead.next = this.head;
       this.head = newHead;

       // It's first node set the tail as well
       if (this.tail === null) {
        this.tail = newHead;
       }
    }

    append(value: any) {
        const newNode = new LinkedListNode(value);
        if (this.head === null) {
            this.head = newNode;
            this.tail = newNode;
            return;
        }

        if (this.tail) {
            this.tail.next = newNode;
            this.tail = newNode;
        }
    }


    deleteWithValue(value: any) {
        if (this.head === null) return false;

        if (this.head.value === value) {
            this.head = this.head.next;
            if (this.head === null) {
                this.tail = null;
            }
            return true;
        }

        let current = this.head;
        while(current.next !== null) {
            if (current.next.value === value) {

                // If we're deleting the tail, update it
                if (current.next === this.tail) {
                    this.tail = current;
                }

                current.next = current.next.next;
                return true;
            }
            current = current.next;
        }

        return false;
    }

    // Only for String & Number types
    deleteDuplicatedNodes() {
        // Check
        if (this.isEmpty()) return false;
        let currNode = this.head;
        const valuesFrequency = new Set();
        // Add head
        valuesFrequency.add(this.head?.value);
        // Through the List
        let someDuplicated = false;
        while (currNode !== null && currNode.next !== null) {
            if (valuesFrequency.has(currNode.next.value)) {
                currNode.next = currNode.next.next;
                someDuplicated = true;

                // If we deleted the tail node
                if (currNode.next === null) {
                    this.tail = currNode;
                }
            } else {
                valuesFrequency.add(currNode.next.value);
                currNode = currNode.next;
            }
        }
        // If after all the deletions, the current node is not the tail, update it
        if (currNode !== this.tail) {
            this.tail = currNode;
        }
        return someDuplicated;
    }

    reverse() {
        if (this.isEmpty() || this.head === this.tail) {
            return false;
        }

        let prev: LinkedListNode | null = null;
        let curr = this.head;
        let next: LinkedListNode | null = null;

        while (curr !== null) {
            next = curr.next;
            curr.next = prev;
            prev = curr;
            curr = next;
        } 

        this.tail = this.head;
        this.head = prev;
        
        return true;
    }

    isEmpty() {
        return this.head === null;
    }
} 

class LinkedListNode {
    value: any;
    next: LinkedListNode | null;

    constructor(value: any) {
        this.value = value;
        this.next = null;
    }
}

