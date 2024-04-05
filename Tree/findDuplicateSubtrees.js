class TreeNode {
    constructor(val, left = null, right = null) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

class Solution {
    constructor() {
        this.map = {};
        this.tripletToID = {};
        this.ans = [];
        this.idCounter = 1; // To simulate the unique ID generation
    }

    findDuplicateSubtrees(root) {
        this.traverse(root);
        return this.ans;
    }

    traverse(node) {
        if (node === null) {
            return 0;
        }

        let leftSubtree = this.traverse(node.left);
        let rightSubtree = this.traverse(node.right);
        let triplet = `${leftSubtree},${node.val},${rightSubtree}`;

        
        if (!this.tripletToID.hasOwnProperty(triplet)) {
            this.tripletToID[triplet] = this.idCounter++;
        }

        let id = this.tripletToID[triplet];
        let newValue = (this.map[id] || 0) + 1;
        this.map[id] = newValue;
        if (newValue === 2) {
            this.ans.push(node);
        }

        return id;
    }
}

// Usage case:
function buildTreeFromArray(arr) {
    if (!arr.length) return null;
    let root = new TreeNode(arr.shift());
    let queue = [root];
    while (arr.length) {
        let node = queue.shift();
        let leftVal = arr.shift();
        if (leftVal != null) {
            node.left = new TreeNode(leftVal);
            queue.push(node.left);
        }
        let rightVal = arr.shift();
        if (rightVal != null) {
            node.right = new TreeNode(rightVal);
            queue.push(node.right);
        }
    }
    return root;
}

function serialize(root) {
    if (!root) return "null";
    return `[${root.val},${serialize(root.left)},${serialize(root.right)}]`;
}

// Input
const root = buildTreeFromArray([1,2,3,4,null,2,4,null,null,4]);
const solution = new Solution();
const duplicates = solution.findDuplicateSubtrees(root); // [[2,4],[4]]
// Output
const output = duplicates.map(node => JSON.parse(serialize(node)));
console.log(output);
