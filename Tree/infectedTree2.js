class TreeNode {
    constructor(val = 0, left = null, right = null) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

/*
       1
      / \
     2   3
    /   / \
   4   5   6
      / \
     7   8
*/
class Solution {
    constructor() {
        this.maxDistance = 0;
    }

    amountOfTime(root, start) {
        this.traverse(root, start);
        return this.maxDistance;
    }

    traverse(root, start) {
        if (root === null) {
            return 0;
        }

        let leftDepth = this.traverse(root.left, start);
        let rightDepth = this.traverse(root.right, start);

        let depth;
        if (root.val === start) {
            this.maxDistance = Math.max(leftDepth, rightDepth);
            depth = -1;
        } else if (leftDepth >= 0 && rightDepth >= 0) {
            depth = Math.max(leftDepth, rightDepth) + 1;
        } else {
            let distance = Math.abs(leftDepth) + Math.abs(rightDepth);
            this.maxDistance = Math.max(this.maxDistance, distance);
            depth = Math.min(leftDepth, rightDepth) - 1;
        }

        return depth;
    }
}

// Crear el árbol binario más complejo
let root = new TreeNode(
    1,
    new TreeNode(
        2,
        new TreeNode(4)
    ),
    new TreeNode(
        3,
        new TreeNode(
            5,
            new TreeNode(7),
            new TreeNode(8)
        ),
        new TreeNode(6)
    )
);

// Crear una instancia de Solution y calcular el tiempo
let solution = new Solution();
let time = solution.amountOfTime(root, 5);

console.log("Tiempo necesario:", time);  // Salida esperada dependerá de la estructura del árbol y el nodo de inicio
