class TreeNode {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

function printInorder(node) {
    if (node === null) return;
    printInorder(node.left);
    console.log(node.data + " ");
    printInorder(node.right);
}

function buildCartesianTreeUtil(root, arr, parent, leftChild, rightChild) {
    if (root === -1) return null;

    let temp = new TreeNode(arr[root]);
    temp.left = buildCartesianTreeUtil(leftChild[root], arr, parent, leftChild, rightChild);
    temp.right = buildCartesianTreeUtil(rightChild[root], arr, parent, leftChild, rightChild);

    return temp;
}

function buildCartesianTree(arr, n) {
    let parent = new Array(n).fill(-1);
    let leftChild = new Array(n).fill(-1);
    let rightChild = new Array(n).fill(-1);

    let root = 0, last;

    for (let i = 1; i < n; i++) {
        last = i - 1;
        rightChild[i] = -1;

        while (arr[last] <= arr[i] && last !== root)
            last = parent[last];

        if (arr[last] <= arr[i]) {
            parent[root] = i;
            leftChild[i] = root;
            root = i;
        } else if (rightChild[last] === -1) {
            rightChild[last] = i;
            parent[i] = last;
            leftChild[i] = -1;
        } else {
            parent[rightChild[last]] = i;
            leftChild[i] = rightChild[last];
            rightChild[last] = i;
            parent[i] = last;
        }
    }

    parent[root] = -1;

    return buildCartesianTreeUtil(root, arr, parent, leftChild, rightChild);
}

// Example usage
let arr = [5, 10, 40, 30, 28];
let n = arr.length;

let root = buildCartesianTree(arr, n);

console.log("Inorder traversal of the constructed tree: ");
printInorder(root);
