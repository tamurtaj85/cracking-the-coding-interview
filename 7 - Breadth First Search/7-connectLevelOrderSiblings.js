/**
 * Connect Level Order Siblings (medium)
 *
 * Given a binary tree, connect each node with its level order successor. The last node of each level should point to a null node.
 */

class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
    this.next = null; // Connects to the next node in the level order traversal.
  }

  printLevelOrder() {
    let nextLevelRoot = this,
      levelOrder = [];

    while (nextLevelRoot) {
      let current = nextLevelRoot;

      nextLevelRoot = null;
      levelOrder = [];

      while (current) {
        levelOrder.push(current.val);

        if (!nextLevelRoot) {
          if (current.left) nextLevelRoot = current.left;
          else if (current.right) nextLevelRoot = current.right;
        }

        current = current.next;
      }

      console.log(levelOrder.join(' -> '));
    }

    console.log();
  }
}

function connectLevelOrderSiblings(root) {
  if (!root) return null;

  const queue = [root];

  while (queue.length > 0) {
    const levelSize = queue.length;
    let previous = null;

    for (let i = 0; i < levelSize; i++) {
      const currentNode = queue.shift();

      if (previous) {
        previous.next = currentNode;
      }

      previous = currentNode;

      if (currentNode.left) queue.push(currentNode.left);
      if (currentNode.right) queue.push(currentNode.right);
    }
  }

  return root;
}

const root1 = new TreeNode(12);
root1.left = new TreeNode(7);
root1.right = new TreeNode(1);
root1.left.left = new TreeNode(9);
root1.right.left = new TreeNode(10);
root1.right.right = new TreeNode(5);

console.log('tree after siblings connected order level: ');
connectLevelOrderSiblings(root1).printLevelOrder();

const root2 = new TreeNode(1);
root2.left = new TreeNode(2);
root2.right = new TreeNode(3);
root2.left.left = new TreeNode(4);
root2.left.right = new TreeNode(5);
root2.right.left = new TreeNode(6);
root2.right.right = new TreeNode(7);

console.log('tree after siblings connected order level: ');
connectLevelOrderSiblings(root2).printLevelOrder();
