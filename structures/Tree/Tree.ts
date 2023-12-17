export default class Tree {
    private root: TreeNode | null = null;

    add(value: any) {
        if (this.root === null) {
            this.root = new TreeNode(value);
        } else {
            this.root.add(value);
        }
    }

    // == Using Stack ==
    /* inOrderTraversal(root: TreeNode | null): number[] {
        let res: number[] = [];
        let stack: TreeNode[] = [];
        let curr: TreeNode | null = root;
    
        while (curr !== null || stack.length !== 0) {
            while (curr !== null) {
                stack.push(curr);
                curr = curr.left;
            }
            curr = stack.pop()!;
            res.push(curr.val);
            curr = curr.right;
        }
    
        return res;
    } */

    // == Using the Morris Traversal ==
    /* inOrderTraversal(root: TreeNode | null): number[] {
        let res: number[] = [];
        let curr: TreeNode | null = root;
        let pre: TreeNode | null;
    
        while (curr !== null) {
            if (curr.left === null) {
                res.push(curr.val);
                curr = curr.right; // move to next right node
            } else { // has a left subtree
                pre = curr.left;
                while (pre.right !== null && pre.right !== curr) { // find rightmost
                    pre = pre.right;
                }
                if (pre.right === null) {
                    pre.right = curr; // put curr after the pre node
                    curr = curr.left; // move curr to the top of the new tree
                } else {
                    pre.right = null; // restore the tree
                    res.push(curr.val);
                    curr = curr.right; // move to next right node
                }
            }
        }
    
        return res;
    }  */   

    // == Depth-First Search (DFS) Traversal ==
    inOrderTraversal(callback: (node: TreeNode, index: number) => void) {
        let index = { count: 0 };
        function traversal(node: TreeNode | null, index: { count: number }) {
            if (node === null) {
                return;
            }
            traversal(node.left, index);
            callback(node, index.count++);
            traversal(node.right, index);
        }
        traversal(this.root, index);
    }

    inOrderTraversalDesc(callback: (node: TreeNode, index: number) => void) {
        let index = { count: 0 };
        function traversal(node: TreeNode | null, index: { count: number }) {
            if (node === null) {
                return;
            }
            traversal(node.right, index);
            callback(node, index.count++);
            traversal(node.left, index);
        }
        traversal(this.root, index);
    }

    preOrderTraversal(callback: (node: TreeNode, index: number) => void) {
        let index = { count: 0 };
        function traversal(node: TreeNode | null, index: { count: number }) {
            if (node === null) {
                return;
            }
            callback(node, index.count++);
            traversal(node.left, index);
            traversal(node.right, index);
        }
        traversal(this.root, index);
    }

    postOrderTraversal(callback: (node: TreeNode, index: number) => void) {
        let index = { count: 0 };
        function traversal(node: TreeNode | null, index: { count: number }) {
            if (node === null) {
                return;
            }
            traversal(node.left, index);
            traversal(node.right, index);
            callback(node, index.count);
        }
        traversal(this.root, index);
    }

    // == Breadth-First Search (BFS) ==
    bfsTraversal(callback: (node: TreeNode, index: number) => void) {
        if (!this.root) {
            return;
        }

        const queue: TreeNode[] = [this.root];
        let index = 0;

        while (queue.length > 0) {
            const currentNode = queue.shift()!;
            callback(currentNode, index++);

            if (currentNode.left) {
                queue.push(currentNode.left);
            }
            if (currentNode.right) {
                queue.push(currentNode.right);
            }
        }
    }

    getHeight(node: TreeNode | null) {
        if (node === null) return 0;
        return 1 + Math.max(this.getHeight(node.left), this.getHeight(node.right));
    }

    getRoot() {
        return this.root;
    }

    contains(value: number, node = this.root) {
        if (node === null) return false;

        if (value === node?.value) {
            return true;
        } else if (value < node.value) {
            return this.contains(value, node.left);;
        } else if (value > node.value) {
            return this.contains(value, node.right);;
        }
    }
}

class TreeNode {
    public left: TreeNode | null = null;
    public value: any;
    public right: TreeNode | null = null;

    constructor(value: any) {
        this.value = value;
    }

    add(value: any) {
        if (value < this.value) {
            if (this.left === null) {
                this.left = new TreeNode(value);
                return;
            }
            this.left.add(value);
        } else if (value > this.value) {
            if (this.right === null) {
                this.right = new TreeNode(value);
                return;
            }
            this.right.add(value);
        } else {
            // If the value is the same do something
        }
    }
}

const tree = new Tree();
tree.add(5);
tree.add(3);
tree.add(7);
tree.add(2);
tree.add(4);
tree.add(6);
tree.add(8);

tree.inOrderTraversal((node, index) => {
    console.log(`Node ${index} =>`, node.value, `contains: ${tree.contains(node.value)}`);
});

