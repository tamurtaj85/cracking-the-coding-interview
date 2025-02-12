/**
 * Minimum Depth of a Binary Tree (easy)
 *
 * Find the minimum depth of a binary tree. The minimum depth is the number of nodes along the shortest path from the root node to the nearest leaf node.
 */

class TreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

function minDepthOfTree(root) {
  let depth = 0;

  if (!root) return depth;

  const queue = [root];

  while (queue.length > 0) {
    const levelSize = queue.length;
    depth++;

    for (let i = 0; i < levelSize; i++) {
      const currentNode = queue.shift();

      if (!currentNode.left && !currentNode.right) return depth;

      if (currentNode.left) queue.push(currentNode.left);
      if (currentNode.right) queue.push(currentNode.right);
    }
  }

  return depth;
}

const root1 = new TreeNode(12);
root1.left = new TreeNode(7);
root1.right = new TreeNode(1);
root1.left.left = new TreeNode(9);
root1.right.left = new TreeNode(10);
root1.right.right = new TreeNode(5);
root1.right.left.left = new TreeNode(11);

console.log('min depth of tree is: ', minDepthOfTree(root1));

const root2 = new TreeNode(1);
root2.left = new TreeNode(2);
root2.right = new TreeNode(3);
root2.left.left = new TreeNode(4);
root2.left.right = new TreeNode(5);

console.log('min depth of tree is: ', minDepthOfTree(root2));

const root3 = new TreeNode(12);
root3.left = new TreeNode(7);
root3.right = new TreeNode(1);
root3.right.left = new TreeNode(10);
root3.right.right = new TreeNode(5);

console.log('min depth of tree is: ', minDepthOfTree(root3));
