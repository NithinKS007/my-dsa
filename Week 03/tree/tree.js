class Node {
  constructor(value) {
    this.value = value;
    this.children = [];
  }

  addChild(childNode) {
    this.children.push(childNode);
  }

  remove(value) {
    this.children = this.children.filter((node) => node.value !== value);
  }
}

class Tree {
  constructor() {
    this.root = null;
  }

  // Pre-order traversal
  preOrder(node) {
    if (node) {
      console.log(node.value);
      node.children.forEach((child) => this.preOrder(child));
    }
  }

  // Count all nodes in the tree
  countNodes(node = this.root) {
    if (!node) return 0;
    let count = 1; // count this node
    for (let child of node.children) {
      count += this.countNodes(child); // add the count of child nodes
    }
    return count;
  }

  // Level-order traversal (BFS)
  levelOrder() {
    const result = [];
    if (!this.root) return result;
    const queue = [this.root];

    while (queue.length) {
      const current = queue.shift();
      result.push(current.value);
      queue.push(...current.children); // Add all children of the current node
    }
    return result;
  }

  // Find a node by value
  find(value, node = this.root) {
    if (node) {
      if (node.value === value) return node;
      for (let child of node.children) {
        const foundNode = this.find(value, child);
        if (foundNode) return foundNode;
      }
    }
    return null;
  }

  // Get all leaf nodes
  getLeafNodes(node = this.root) {
    const leaves = [];
    if (!node) return leaves;

    // If a node has no children, it's a leaf
    if (node.children.length === 0) {
      leaves.push(node);
    }

    // Recursively get leaf nodes for each child
    for (let child of node.children) {
      leaves.push(...this.getLeafNodes(child));
    }

    return leaves;
  }
}

const tree = new Tree();
tree.root = new Node(1);

const child2 = new Node(2);
const child3 = new Node(3);
tree.root.addChild(child2);
tree.root.addChild(child3);

child2.addChild(new Node(4));
child2.addChild(new Node(5));

child3.addChild(new Node(6));

// Counting leaf nodes
function countLeafNodes(tree) {
  const leafNodes = tree.getLeafNodes();
  return leafNodes.length;
}

const totalLeafCount = countLeafNodes(tree);
console.log("Total leaf nodes:", totalLeafCount);

// Find and print children of a specific node
function findAndPrintChildren(tree, nodeValue) {
  const foundNode = tree.find(nodeValue);
  if (foundNode) {
    console.log(
      `Children of node ${nodeValue}:`,
      foundNode.children.map((child) => child.value)
    );
  } else {
    console.log(`Node ${nodeValue} not found.`);
  }
}

findAndPrintChildren(tree, 2);

// Perform pre-order traversal
function performPreOrderTraversal(tree) {
  console.log("Pre-order traversal:");
  tree.preOrder(tree.root);
}

performPreOrderTraversal(tree);

// Output:
// Total leaf nodes: 3
// Children of node 2: [4, 5]
// Pre-order traversal:
// 1
// 2
// 4
// 5
// 3
// 6
