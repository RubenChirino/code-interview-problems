function ListNode(val) {
    this.val = val;
    this.next = null;
}

// Helper function to create a list from an array
function createList(arr) {
    let head = new ListNode(arr[0]);
    let current = head;
    for (let i = 1; i < arr.length; i++) {
        current.next = new ListNode(arr[i]);
        current = current.next;
    }
    return head;
}

// Helper function to set the intersection
function setIntersection(headA, headB, intersectVal) {
    let tempA = headA;
    let tempB = headB;
    // Move to the end of listA
    while (tempA.next !== null) {
        tempA = tempA.next;
    }
    // Find the intersection node in listB
    while (tempB.val !== intersectVal) {
        tempB = tempB.next;
    }
    // Link the end of listA to the intersection node in listB
    tempA.next = tempB;
}

// Creating lists without intersection initially
let listA = createList([4,1]);
let listB = createList([1,2,3,5,6,1,8,4,5]);

// Setting up the intersection
setIntersection(listA, listB, 8);

function getIntersectionNode(headA, headB) {
    let pA = headA;
    let pB = headB;
    while (pA !== pB) {
        pA = pA === null ? headB : pA.next;
        pB = pB === null ? headA : pB.next;
    }
    return pA;
}

// Finding the intersection node
let intersectionNode = getIntersectionNode(listA, listB);
console.log(intersectionNode ? intersectionNode.val : 'No intersection');
