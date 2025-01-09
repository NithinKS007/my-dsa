class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinaryTree {
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
    if (root.left === null) {
      root.left = newNode;
    } else if (root.right === null) {
      root.right = newNode;
    } else {
      this.insertNode(root.left, newNode);
    }
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

  inOrder(node = this.root, result = []) {
    if (node) {
      this.inOrder(node.left, result);
      result.push(node.value);
      this.inOrder(node.right, result);
    }
    return result;
  }
  preOrder(node = this.root, result = []) {
    if (node) {
      result.push(node.value);
      this.preOrder(node.left, result);
      this.preOrder(node.right, result);
    }
    return result;
  }
  postOrder(node = this.root, result = []) {
    if (node) {
      this.postOrder(node.left, result);
      this.postOrder(node.right, result);
      result.push(node.value);
    }
    return result;
  }
  height(node = this.root) {
    if (node === null) {
      return -1;
    }

    const leftHeight = this.height(node.left);
    const rightHeight = this.height(node.right);

    return Math.max(leftHeight, rightHeight) + 1;
  }

  search(value, node = this.root) {
    if (node === null) {
      return false;
    }
    if (node.value === value) {
      return true;
    }

    return this.search(value, node.left) || this.search(value, node.right);
  }

  countNodes(node = this.root) {
    if (node === null) {
      return 0; 
    } else {
      const leftCount = this.countNodes(node.left);
      const rightCount = this.countNodes(node.right);
      return 1 + leftCount + rightCount; 
    }
  }
  
}
