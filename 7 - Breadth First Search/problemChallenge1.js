/**
 * Connect All Level Order Siblings (medium)
 *
 * Given a binary tree, connect each node with its level order successor. The last node of each level should point to the first node of the next level.
 */

class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
    this.next = null; // Connects to the next node in the level order traversal.
  }

  printLevelOrder() {
    let current = this,
      results = [];

    while (current) {
      results.push(current.val);

      current = current.next;
    }

    console.log(results.join(' -> '));
    console.log();
  }
}

function connectAllLevelOrderSiblings(root) {
  if (!root) return null;

  const queue = [root];
  let previous = null;

  while (queue.length > 0) {
    const currentNode = queue.shift();

    if (previous) previous.next = currentNode;
    previous = currentNode;

    if (currentNode.left) queue.push(currentNode.left);
    if (currentNode.right) queue.push(currentNode.right);
  }

  return root;
}

const root1 = new TreeNode(12);
root1.left = new TreeNode(7);
root1.right = new TreeNode(1);
root1.left.left = new TreeNode(9);
root1.right.left = new TreeNode(10);
root1.right.right = new TreeNode(5);

console.log('tree after all order level siblings connected: ');
connectAllLevelOrderSiblings(root1).printLevelOrder();

const root2 = new TreeNode(1);
root2.left = new TreeNode(2);
root2.right = new TreeNode(3);
root2.left.left = new TreeNode(4);
root2.left.right = new TreeNode(5);
root2.right.left = new TreeNode(6);
root2.right.right = new TreeNode(7);

console.log('tree after all order level siblings connected: ');
connectAllLevelOrderSiblings(root2).printLevelOrder();
