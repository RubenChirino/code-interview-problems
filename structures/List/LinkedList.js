class ListNode {
    constructor(val = 0, next = null) {
        this.val = val;
        this.next = next;
    }
}

function deleteNodes(head, m, n) {
    let currentNode = head;
    let lastMNode = head;
    while (currentNode) {
        // initialize mCount to m and nCount to n
        let mCount = m, nCount = n;
        // traverse m nodes
        while (currentNode && mCount !== 0) {
            lastMNode = currentNode;
            currentNode = currentNode.next;
            mCount--;
        }
        // traverse n nodes
        while (currentNode && nCount !== 0) {
            currentNode = currentNode.next;
            nCount--;
        }
        // delete n nodes
        lastMNode.next = currentNode;
    }
    return head;
}


// Crear una lista enlazada: 1 -> 2 -> 3 -> 4 -> 5 -> 6 -> 7 -> 8
let head = new ListNode(1);
let node = head;
for (let i = 2; i <= 8; i++) {
    node.next = new ListNode(i);
    node = node.next;
}

// Llamar a deleteNodes con m = 2 y n = 3
head = deleteNodes(head, 2, 3);

// Imprimir la lista resultante
node = head;
while (node) {
    console.log(node.val);
    node = node.next;
}
