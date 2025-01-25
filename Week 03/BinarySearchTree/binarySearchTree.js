class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }
  isEmpty() {
    return this.root === null;
  }
  insert(value) {
    const newNode = new Node(value);

    if (this.isEmpty()) {
      this.root = newNode;
    } else {
      this.insertNode(this.root, newNode);
    }
  }

  insertNode(root, newNode) {
    if (newNode.value < root.value) {
      if (root.left === null) {
        root.left = newNode;
      } else {
        this.insertNode(root.left, newNode);
      }
    } else if (newNode.value > root.value) {
      if (root.right === null) {
        root.right = newNode;
      } else {
        this.insertNode(root.right, newNode);
      }
    } else {
      console.log("value already exists", root.value);
    }
  }

  search(root = this.root, value) {
    if (!root) {
      return false;
    }
    if (root.value === value) {
      return true;
    } else if (root.value > value) {
      return this.search(root.left, value);
    } else {
      return this.search(root.right, value);
    }
  }

  preOrder(root = this.root, result = []) {
    if (root) {
      result.push(root.value);
      this.preOrder(root.left, result);
      this.preOrder(root.right, result);
    }
    return result;
  }

  inOrder(root = this.root, result = []) {
    if (root) {
      this.inOrder(root.left, result);
      result.push(root.value);
      this.inOrder(root.right, result);
    }
    return result;
  }

  postOrder(root = this.root, result = []) {
    if (root) {
      this.postOrder(root.left, result);
      this.postOrder(root.right, result);
      result.push(root.value);
    }
    return result;
  }

  bfs() {
    const result = [];
    const queue = [this.root];

    if (this.isEmpty()) {
      return result;
    }

    while (queue.length > 0) {
      const currentNode = queue.shift();
      result.push(currentNode.value);

      if (currentNode.left) {
        queue.push(currentNode.left);
      }
      if (currentNode.right) {
        queue.push(currentNode.right);
      }
    }

    return result;
  }

  min(root) {
    if (this.isEmpty()) {
      throw new Error("The tree is empty");
    }
    if (!root.left) {
      return root.value;
    } else {
      return this.min(root.left);
    }
  }

  max(root) {
    if (this.isEmpty()) {
      throw new Error("The tree is empty");
    }
    if (!root.right) {
      return root.value;
    } else {
      return this.max(root.right);
    }
  }

  delete(value) {
    this.root = this.deleteNode(this.root, value);
  }
  // Helper method to delete the node
  deleteNode(root, value) {
    if (root === null) {
      return root; // Base case: node not found
    }
    // Search for the node to delete
    if (value < root.value) {
      root.left = this.deleteNode(root.left, value); // Go left
    } else if (value > root.value) {
      root.right = this.deleteNode(root.right, value); // Go right
    } else {
      // Node to delete found
      if (!root.left && !root.right) {
        // Case 1: No children (leaf node)
        return null;
      }
      if (!root.left) {
        // Case 2: One child (right child)
        return root.right;
      } else if (!root.right) {
        // Case 3: One child (left child)
        return root.left;
      }
      // Case 4: Two children
      // Find the in-order successor (smallest in the right subtree)
      const minNode = this.min(root.right);
      // Replace the value of the current node with the value of the in-order successor
      root.value = minNode.value;
      // Delete the in-order successor
      root.right = this.deleteNode(root.right, minNode.value);
    }

    return root;
  }
  isValidBst(root = this.root, minValue = -Infinity, maxValue = Infinity) {
    if (root === null) {
      return true;
    }

    if (root.value <= minValue || root.value >= maxValue) {
      return false;
    }
    return (
      this.isValidBst(root.left, minValue, root.value) &&
      this.isValidBst(root.right, root.value, maxValue)
    );
  }
  isValidBstManual(root) {
    if (!root) {
      return true;
    }

    const queue = [{ node: root, minValue: -Infinity, maxValue: Infinity }];

    while (queue.length > 0) {
      const { node, minValue, maxValue } = queue.shift();

      if (node.value <= minValue || node.value >= maxValue) {
        return false;
      }

      if (node.left) {
        queue.push({
          node: node.left,
          minValue: minValue,
          maxValue: node.value,
        });
      }

      if (node.right) {
        queue.push({
          node: node.right,
          minValue: node.value,
          maxValue: maxValue,
        });
      }
    }

    return true;
  }

  closestValue(root, target) {
    let closest = root.value;

    function updateClosest(node) {
      if (Math.abs(node.value - target) < Math.abs(closest - target)) {
        closest = node.value;
      }
    }

    while (root) {
      updateClosest(root);
      if (target < root.value) {
        root = root.left;
      } else {
        root = root.right;
      }
    }

    return closest;
  }

  // or maximum depth
  height(node = this.root) {
    if (node === null) {
      return -1;
    }

    const leftHeight = this.height(node.left);
    const rightHeight = this.height(node.right);

    return Math.max(leftHeight, rightHeight) + 1;
  }
  height(node) {
    if (node === null) {
      return -1;
    }
    let stack = [{ node: node, depth: 0 }];
    let maxDepth = -1;
    while (stack.length > 0) {
      let { node, depth } = stack.pop();

      if (node !== null) {
        maxDepth = Math.max(maxDepth, depth);
        if (node.right) {
          stack.push({ node: node.right, depth: depth + 1 });
        }
        if (node.left) {
          stack.push({ node: node.left, depth: depth + 1 });
        }
      }
    }
    return maxDepth;
  }

  isbothTreeIdentical(p, q) {
    if (!p && !q) return true;
    if (!p || !q) return false;
    const queue1 = [p];
    const queue2 = [q];

    while (queue1.length > 0 && queue2.length > 0) {
      const node1 = queue1.shift();
      const node2 = queue2.shift();

      if (node1.value !== node2.value) return false;

      if (node1.left && node2.left) {
        queue1.push(node1.left);
        queue2.push(node2.left);
      } else if (node1.left || node2.left) {
        return false;
      }

      if (node1.right && node2.right) {
        queue1.push(node1.right);
        queue2.push(node2.right);
      } else if (node1.right || node2.right) {
        return false;
       
      }
    }
    return true;
  }

  invertBinarySearchTree() {
    const queue = [this.root];

    while (queue.length > 0) {
      let node = queue.shift();

      let temp = node.left;
      node.left = node.right;
      node.right = temp;

      if (node.left) {
        queue.push(node.left);
      }

      if (node.right) {
        queue.push(node.right);
      }
    }
  }
  isSubTree(subRoot) {
    if (!this.root) return false;

    const queue = [this.root];

    while (queue.length > 0) {
      const node = queue.shift();

      if (this.isbothTreeIdentical(node, subRoot)) {
        return true;
      }
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
    return false;
  }
  kthSmallest(root = this.root, k, result = []) {
    if (root) {
      this.kthSmallest(root.left, k, result);
      result.push(root.value);
      this.kthSmallest(root.right, k, result);
    }
    return result[k - 1];
  }

  secLargestBFS() {
    if (this.isEmpty()) return null;

    let largest = -Infinity;
    let secondLargest = -Infinity;
    const queue = [this.root];

    while (queue.length > 0) {
      const currentNode = queue.shift();

      if (currentNode) {
        if (currentNode.value > largest) {
          secondLargest = largest;
          largest = currentNode.value;
        } else if (
          currentNode.value > secondLargest &&
          currentNode.value !== largest
        ) {
          secondLargest = currentNode.value;
        }

        if (currentNode.left) queue.push(currentNode.left);
        if (currentNode.right) queue.push(currentNode.right);
      }
    }

    return secondLargest === -Infinity ? null : secondLargest;
  }

  countLeftNodes() {
    if (this.isEmpty()) return 0;

    let count = 0;
    const queue = [this.root];

    while (queue.length > 0) {
      const currentNode = queue.shift();

      if (currentNode.left) {
        count++;
        queue.push(currentNode.left);
      }

      if (currentNode.right) {
        queue.push(currentNode.right);
      }
    }

    return count;
  }
  countLeafNodes(root = this.root) {
    if (root === null) {
      return 0;
    }
    if (root.left === null && root.right === null) {
      return 1;
    }
    return this.countLeafNodes(root.left) + this.countLeafNodes(root.right);
  }
  countLeafNodesWithOutRecursion() {
    if (this.root === null) return 0;

    let queue = [this.root];
    let leafCount = 0;

    while (queue.length > 0) {
      const node = queue.shift();

      if (node.left === null && node.right === null) {
        leafCount++;
      }
      if (node.left) {
        queue.push(node.left);
      }

      if (node.right) {
        queue.push(node.right);
      }
    }

    return leafCount;
  }

  findMaxWithOutRecursion() {
    let current = this.root;

    while (current !== null && current.right !== null) {
      current = current.right;
    }

    return current.value;
  }
  findMinWithOutRecursion() {
    let current = this.root;

    while (current !== null && current.left !== null) {
      current = current.left;
    }

    return current.value;
  }
}

const bst = new BinarySearchTree();

bst.insert(10);
bst.insert(5);
bst.insert(15);
bst.insert(15);
// console.log(bst.search(10)); // true
// console.log(bst.search(7)); // false
// console.log(bst.inOrder()); // [5, 10, 15]
// console.log(bst.height()); // 1
// console.log(bst.min(bst.root)); // 5
// console.log(bst.max(bst.root)); // 15
// console.log(bst.closestValue(bst.root, 12)); // 10
// bst.delete(10);
console.log(bst.inOrder()); // [5, 15]

// console.log(bst.secLargestBFS());
// console.log(bst.countLeafNodes());
