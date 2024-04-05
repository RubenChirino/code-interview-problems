// Node class definition in JavaScript.
function Node(val, next = null) {
    this.val = val;
    this.next = next;
}

insert = function(head, insertVal) {
    if (head === null) {
        return null;
    }

    // Step 1: Know cycle node
    var cycleNode = this.getCycleNode(head);

    return cycleNode;
};

getCycleNode = function(head) {
    var tortoise = head;
    var hare = head;

    while (hare !== null && hare.next !== null) {
        tortoise = tortoise.next;
        hare = hare.next.next;

        if (tortoise === hare) break;
    }

    // Reset hare pointer
    hare = head;

    while (hare.next !== tortoise.next) {
        hare = hare.next;
        tortoise = tortoise.next;
    }

    return hare;
};





// ===========

// Function to create a circular linked list from an array of values
function createCircularLinkedList(values) {
    let dummy = new Node(0);
    let current = dummy;
    let headNode;

    for (let i = 0; i < values.length; i++) {
        current.next = new Node(values[i]);
        current = current.next;
        if (i === 0) headNode = current;  // Mark the head of the list
    }

    // Making the list circular by connecting the last node to the head node
    current.next = headNode;

    return headNode;  // Return the reference to the head node
}

// Function to convert a circular linked list to an array starting from the head
function circularLinkedListToArray(head) {
    let array = [];
    let current = head;

    do {
        array.push(current.val);
        current = current.next;
    } while (current !== head);  // Continue until we've circled back to the head

    return array;
}

// Function to insert a new value into the sorted circular linked list
Solution.prototype.insertIntoSortedCircularList = function(head, insertVal) {
    // Your insert logic will be here.
    // The actual implementation depends on how you want to insert the value.
    // This is a placeholder for where you would call the appropriate method.
};

// Example usage:
let head = createCircularLinkedList([3, 4, 1]);
let insertVal = 2;

// We will now insert 'insertVal' into the circular linked list
let modifiedListHead = solution.insertIntoSortedCircularList(head, insertVal);

// Convert the circular linked list back to an array for the output
let output = circularLinkedListToArray(modifiedListHead);
console.log(output);  // Should log [3, 4, 1, 2] to the console

// ==========


var node = new Node(1);
var insertedNode = insert(node, 2);
console.log(insertedNode);
