/**
 * Level Averages in a Binary Tree (easy)
 *
 * Given a binary tree, populate an array to represent the averages of all of its levels.
 */

class TreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

function levelAverages(root) {
  const results = [];

  if (!root) return results;

  const queue = [root];

  while (queue.length > 0) {
    const levelSize = queue.length;
    let levelSum = 0;

    for (let i = 0; i < levelSize; i++) {
      const currentNode = queue.shift();

      levelSum += currentNode.value;

      if (currentNode.left) queue.push(currentNode.left);
      if (currentNode.right) queue.push(currentNode.right);
    }

    results.push(levelSum / levelSize);
  }

  return results;
}

const root1 = new TreeNode(12);
root1.left = new TreeNode(7);
root1.right = new TreeNode(1);
root1.left.left = new TreeNode(9);
root1.left.right = new TreeNode(2);
root1.right.left = new TreeNode(10);
root1.right.right = new TreeNode(5);

console.log('averages of level order traversal is: ', levelAverages(root1));

const root2 = new TreeNode(1);
root2.left = new TreeNode(2);
root2.right = new TreeNode(3);
root2.left.left = new TreeNode(4);
root2.left.right = new TreeNode(5);
root2.right.left = new TreeNode(6);
root2.right.right = new TreeNode(7);

console.log('averages of level order traversal is: ', levelAverages(root2));
