/**
 * Reverse Level Order Traversal (easy)
 *
 * Given a binary tree, populate an array to represent its level-by-level traversal in reverse order, i.e., the lowest level comes first. You should populate the values of all nodes in each level from left to right in separate sub-arrays.
 *
 */

class TreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

function reverseLevelOrderTraversal(root) {
  const results = [];

  if (!root) return results;

  const queue = [root];

  while (queue.length > 0) {
    const levelSize = queue.length,
      currentLevel = [];

    for (let i = 0; i < levelSize; i++) {
      const currentNode = queue.shift();

      currentLevel.push(currentNode.value);

      if (currentNode.left) queue.push(currentNode.left);
      if (currentNode.right) queue.push(currentNode.right);
    }

    results.unshift(currentLevel);
  }

  return results;
}

const root1 = new TreeNode(12);
root1.left = new TreeNode(7);
root1.right = new TreeNode(1);
root1.left.left = new TreeNode(9);
root1.right.left = new TreeNode(10);
root1.right.right = new TreeNode(5);

console.log(
  'reverse level order traversal is: ',
  reverseLevelOrderTraversal(root1)
);

const root2 = new TreeNode(1);
root2.left = new TreeNode(2);
root2.right = new TreeNode(3);
root2.left.left = new TreeNode(4);
root2.left.right = new TreeNode(5);
root2.right.left = new TreeNode(6);
root2.right.right = new TreeNode(7);

console.log(
  'reverse level order traversal is: ',
  reverseLevelOrderTraversal(root2)
);
