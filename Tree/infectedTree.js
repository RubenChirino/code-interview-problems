class TreeNode {
    constructor(val = 0, left = null, right = null) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

function amountOfTime(root, start) {
    const graph = new Map();
    buildGraph(root, null, graph);
    return bfs(graph, start);
}

function buildGraph(node, parent, graph) {
    if (node === null) return;

    if (!graph.has(node.val)) graph.set(node.val, new Set());
    if (parent !== null) {
        graph.get(node.val).add(parent.val);
        graph.get(parent.val).add(node.val);
    }

    buildGraph(node.left, node, graph);
    buildGraph(node.right, node, graph);
}

function bfs(graph, start) {
    const visited = new Set([start]);
    const queue = [start];
    let minutes = 0;

    while (queue.length > 0) {
        let size = queue.length;
        for (let i = 0; i < size; i++) {
            const node = queue.shift();
            for (const neighbor of graph.get(node)) {
                if (!visited.has(neighbor)) {
                    queue.push(neighbor);
                    visited.add(neighbor);
                }
            }
        }
        if (queue.length > 0) minutes++;
    }

    return minutes;
}

// Crear el árbol binario y usar la función amountOfTime
let root = new TreeNode(1, new TreeNode(2, new TreeNode(4)), new TreeNode(3, new TreeNode(5), new TreeNode(6)));
console.log(amountOfTime(root, 3));  // Debería devolver el tiempo necesario
