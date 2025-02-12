/**
 * Level Order Successor (easy)
 *
 * Given a binary tree and a node, find the level order successor of the given node in the tree. The level order successor is the node that appears right after the given node in the level order traversal.
 */

class TreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

function getSuccessor(root, nodeValue) {
  if (!root) return null;

  const queue = [root];

  while (queue.length > 0) {
    const currentNode = queue.shift();

    if (currentNode.left) queue.push(currentNode.left);
    if (currentNode.right) queue.push(currentNode.right);

    if (currentNode.value === nodeValue) break;
  }

  if (queue.length > 0) return queue.shift().value;

  return null;
}

const root1 = new TreeNode(12);
root1.left = new TreeNode(7);
root1.right = new TreeNode(1);
root1.left.left = new TreeNode(9);
root1.right.left = new TreeNode(10);
root1.right.right = new TreeNode(5);

const givenNode1 = 9;

console.log(
  'successor of the given node: ',
  givenNode1,
  ' is ',
  getSuccessor(root1, givenNode1)
);

const root2 = new TreeNode(1);
root2.left = new TreeNode(2);
root2.right = new TreeNode(3);
root2.left.left = new TreeNode(4);
root2.left.right = new TreeNode(5);

const givenNode2 = 3;

console.log(
  'successor of the given node: ',
  givenNode2,
  ' is ',
  getSuccessor(root2, givenNode2)
);

const root3 = new TreeNode(12);
root3.left = new TreeNode(7);
root3.right = new TreeNode(1);
root3.right.left = new TreeNode(10);
root3.right.right = new TreeNode(5);

const givenNode3 = 12;

console.log(
  'successor of the given node: ',
  givenNode3,
  ' is ',
  getSuccessor(root3, givenNode3)
);
