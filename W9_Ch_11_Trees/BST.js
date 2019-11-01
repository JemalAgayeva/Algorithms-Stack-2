class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

class BST {
  constructor(root = null) {
    this.root = root;
  }

  min() {
    if (!this.root) return null;

    let current = this.root;

    while (current.left) {
      current = current.left;
    }
    return current.val;
  }

  add(val) {

    const node = new Node(val);

    if (!this.root) {
      this.root = node;
    }
    else {
      let current = this.root;

      while (true) {

        if (val <= current.val) {
          if (!current.left) {
            current.left = node;
            return;
          }
          else {
            current = current.left;
          }
        }
        else {
          if (!current.right) {
            current.right = node;
            return;
          }
          else {
            current = current.right;
          }
        }
      }
    }
  }

  contains(val) {
    let current = this.root;

    while (current) {

      if (current.val === val) return true;

      if (val < current.val) current = current.left;
      else current = current.right;
    }

    return false;
  }

  size(node) {
    if (!node) return 0;
    return 1 + this.size(node.left) + this.size(node.right);
  }

  height(node) {
    if (!node) return 0;
    let leftHeight = this.height(node.left);
    let rightHeight = this.height(node.right);

    // base case returns 0 but then the + 1 starts incrementing for each recursive call
    return Math.max(leftHeight, rightHeight) + 1;
  }

  isBalanced(node = this.root) {
    if (!node) return true;

    if (Math.abs(this.height(node.left) - this.height(node.right)) > 1) return false;

    return this.isBalanced(node.left) && this.isBalanced(node.right);
  }
  isFull(node = this.root) {
    // If empty tree
    if (!node) return false;

    // if leaf node, leaf node is the end which means it has no left or right
    if (!node.left && !node.right) return true;

    // if both left and right subtrees are not null and
    // both left and right subtrees are full
    if (node.left && node.right) {
      return this.isFull(node.left) && this.isFull(root.right);
    }

    return false;
  }

  // https://www.geeksforgeeks.org/binary-search-tree-set-2-delete/
  remove() {
  }
}

const bst = new BST(new Node(5));

bst.add(6);
bst.add(5);
bst.add(4);
bst.add(8);
bst.add(1);

console.log(bst.height(bst.root));
console.log(bst.size(bst.root));