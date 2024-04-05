class TreeNode {
    constructor(value, left = null, right = null) {
        this.value = value;
        this.left = left;
        this.right = right;
    }

    add(value) {
        if (value < this.value) {
            if (this.left === null) {
                this.left = new TreeNode(value);
            } else {
                this.left.add(value);
            }
        } else if (value > this.value) {
            if (this.right === null) {
                this.right = new TreeNode(value);
            } else {
                this.right.add(value);
            }
        } else {
            // Si el valor es el mismo, haz algo
        }
    }
}

class Tree {
    constructor() {
        this.root = null;
    }

    add(value) {
        if (this.root === null) {
            this.root = new TreeNode(value);
        } else {
            this.root.add(value);
        }
    }

    inOrderTraversal(callback) {
        function traversal(node, index) {
            if (node === null) {
                return;
            }
            traversal(node.left, index);
            callback(node, index.count++);
            traversal(node.right, index);
        }
        traversal(this.root, { count: 0 });
    }

    bfsTraversal(callback) {
        if (!this.root) {
            return;
        }

        const queue = [this.root];
        let index = 0;

        while (queue.length > 0) {
            const currentNode = queue.shift();
            callback(currentNode, index++);

            if (currentNode.left) {
                queue.push(currentNode.left);
            }
            if (currentNode.right) {
                queue.push(currentNode.right);
            }
        }
    }

    // ... otros métodos ...
}

function deepestLeavesSum(root) {
    let deepestSum = 0;
    let depth = 0;
    let currDepth;
    let stack = [[root, 0]]; // Usamos un array para simular la pila y el par (Pair)
  
    while (stack.length > 0) {
      let pair = stack.pop();
      root = pair[0];
      currDepth = pair[1];
  
      if (root.left === null && root.right === null) {
        if (depth < currDepth) {
          deepestSum = root.val;
          depth = currDepth;
        } else if (depth === currDepth) {
          deepestSum += root.val;
        }
      } else {
        if (root.right !== null) {
          stack.push([root.right, currDepth + 1]);
        }
        if (root.left !== null) {
          stack.push([root.left, currDepth + 1]);
        }
      }
    }
    return deepestSum;
}
 
// Ejemplo de uso
let root = new TreeNode(1, new TreeNode(2), new TreeNode(3));
console.log(deepestLeavesSum(root)); // Salida: 5 (2 + 3)

function getTargetCopy(original, cloned, target) {
    let stack = [];
    let node_o = original, node_c = cloned;

    while (stack.length > 0 || node_o !== null) {
        while (node_o !== null) {
            stack.push([node_o, node_c]);
            node_o = node_o.left;
            node_c = node_c.left;
        }
        let pair = stack.pop();
        node_o = pair[0];
        node_c = pair[1];

        if (node_o === target) {
            return node_c;
        }

        node_o = node_o.right;
        node_c = node_c.right;
    }
    return null;
}

// Creando el árbol original
let original = new TreeNode(1);
original.left = new TreeNode(2);
original.right = new TreeNode(3);
original.left.left = new TreeNode(4);
original.left.right = new TreeNode(5);

// Creando una copia del árbol original
let cloned = new TreeNode(1);
cloned.left = new TreeNode(2);
cloned.right = new TreeNode(3);
cloned.left.left = new TreeNode(4);
cloned.left.right = new TreeNode(5);

// Elegir un nodo objetivo en el árbol original
let target = original; // Nodo con valor 5

// Encontrar el nodo correspondiente en el árbol clonado
let result = getTargetCopy(original, cloned, target);

console.log(result.val); // Debería imprimir 5

function averageOfSubtree1(root) {
    let ans = 0;
    const queue = [root];
    while (queue.length) {
        const subTree = queue.pop();
        const [total, quantity] = dfs(subTree);
        if (Math.floor(total / quantity) === subTree.val) ans++;
        if (subTree.left !== null) queue.push(subTree.left);
        if (subTree.right !== null) queue.push(subTree.right);
    }
    return ans;
};
 
function dfs(node, counter = 0) {
    if (node === null) return [0, counter];
    counter = counter + 1;
    const left = dfs(node.left, counter);
    const right = dfs(node.right, counter);
    return [(left[0] + node.val + right[0]), counter];

}

const root2 = new TreeNode(4);
root2.left = new TreeNode(8);
root2.right = new TreeNode(5);
//
root2.left.left = new TreeNode(0);
root2.left.right = new TreeNode(1);
//
root2.right.right = new TreeNode(6);

let result2 = averageOfSubtree1(root2);

console.log('RESULT 2 =>', result2); // Debería imprimir 5

// Test Tree
//       4
//      / \
//     8   5
//    / \   \
//   0   1   6
const root4 = new TreeNode(4, 
    new TreeNode(8, 
        new TreeNode(0), 
        new TreeNode(1)
    ), 
    new TreeNode(5, 
        null, 
        new TreeNode(6)
    )
);

function averageOfSubtree(root) {
    function dfs(node) {
        if (!node) {
            return [0, 0, 0]; // [countOfNodesMeetingCondition, sumOfSubtree, numberOfNodesInSubtree]
        }

        const [leftCount, leftSum, leftSize] = dfs(node.left);
        const [rightCount, rightSum, rightSize] = dfs(node.right);

        const sum = node.val + leftSum + rightSum;
        const size = 1 + leftSize + rightSize;
        const isAverage = Math.floor(sum / size) === node.val ? 1 : 0;

        return [leftCount + rightCount + isAverage, sum, size];
    }

    return dfs(root)[0];
}

const result4 = averageOfSubtree(root4);
console.log('RESULT 4 =>', result4);


// Ejemplo de uso
const tree = new Tree();
tree.add(5);
tree.add(3);
tree.add(7);
tree.add(2);
tree.add(4);
tree.add(6);
tree.add(8);

console.log("InOrder Traversal:");
tree.inOrderTraversal((node, index) => {
    console.log(`Node ${index} =>`, node.value);
});

console.log("BFS Traversal:");
tree.bfsTraversal((node, index) => {
    console.log(`Node ${index} =>`, node.value);
});
