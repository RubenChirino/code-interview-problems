class TreeNode {
    constructor(value) {
        this.val = value;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null;
    }

    search(val) {
        let curr = this.root;
        while (curr !== null) {
            if (val === curr.val) {
                return true;
            }
            curr = val < curr.val ? curr.left : curr.right;
        }
        return false;
    }

    insert(root, val) {
        if (root === null) {
            return new TreeNode(val);
        }
        if (val < root.val) {
            root.left = this.insert(root.left, val);
        } else if (val > root.val) {
            root.right = this.insert(root.right, val);
        }
        return root;
    }

    deleteNode(root, val) {
        if (root === null) return null;

        if (val < root.val) {
            root.left = this.deleteNode(root.left, val);
        } else if (val > root.val) {
            root.right = this.deleteNode(root.right, val);
        } else {
            if (root.left === null) return root.right;
            if (root.right === null) return root.left;

            root.val = this.successor(root);
            root.right = this.deleteNode(root.right, root.val);
        }
        return root;
    }

    successor(root) {
        root = root.right;
        while (root.left !== null) root = root.left;
        return root.val;
    }

    predecessor(root) {
        root = root.left;
        while (root.right !== null) root = root.right;
        return root.val;
    }
}

class Bucket {
    constructor() {
        this.tree = new BinarySearchTree();
    }

    insert(key) {
        this.tree.root = this.tree.insert(this.tree.root, key);
    }

    delete(key) {
        this.tree.root = this.tree.deleteNode(this.tree.root, key);
    }

    exists(key) {
        return this.tree.search(key);
    }
}

class MyHashSet {
    constructor() {
        this.keyRange = 769;
        this.bucketArray = Array.from({ length: this.keyRange }, () => new Bucket());
    }

    _hash(key) {
        return key % this.keyRange;
    }

    add(key) {
        const bucketIndex = this._hash(key);
        this.bucketArray[bucketIndex].insert(key);
    }

    remove(key) {
        const bucketIndex = this._hash(key);
        this.bucketArray[bucketIndex].delete(key);
    }

    contains(key) {
        const bucketIndex = this._hash(key);
        return this.bucketArray[bucketIndex].exists(key);
    }
}

// ==== USAGE CASE ====

// Create an instance of MyHashSet
const myHashSet = new MyHashSet();

// Inputs and Actions
const actions = ["MyHashSet", "add", "add", "contains", "contains", "add", "contains", "remove", "contains"];
const values = [[], [1], [2], [1], [3], [2], [2], [2], [2]];

// Execute the actions
actions.forEach((action, index) => {
    switch (action) {
        case "add":
            myHashSet.add(values[index][0]);
            break;
        case "remove":
            myHashSet.remove(values[index][0]);
            break;
        case "contains":
            console.log(`Contains ${values[index][0]}: ${myHashSet.contains(values[index][0])}`);
            break;
    }
});
