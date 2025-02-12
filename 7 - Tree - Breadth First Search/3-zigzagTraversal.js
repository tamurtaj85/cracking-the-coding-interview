/**
 * Zigzag Traversal (medium)
 *
 * Given a binary tree, populate an array to represent its zigzag level order traversal. You should populate the values of all nodes of the first level from left to right, then right to left for the next level and keep alternating in the same manner for the following levels.
 */
class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

function zigzagLevelOrderTraversal(root) {
  const results = [];

  if (!root) return results;

  const queue = [root];
  let ltr = true;

  while (queue.length > 0) {
    const levelSize = queue.length,
      currentLevel = [];

    for (let i = 0; i < levelSize; i++) {
      // rules for queue won't change as it state fifo,
      const currentNode = queue.shift();

      // to maintain zigzag order based on flag
      if (ltr) currentLevel.push(currentNode.val);
      else currentLevel.unshift(currentNode.val);

      // following fifo
      if (currentNode.left) queue.push(currentNode.left);
      if (currentNode.right) queue.push(currentNode.right);
    }

    // toggle flag for each subsequent level
    ltr = !ltr;
    results.push(currentLevel);
  }

  return results;
}

const root1 = new TreeNode(12);
root1.left = new TreeNode(7);
root1.right = new TreeNode(1);
root1.left.left = new TreeNode(9);
root1.right.left = new TreeNode(10);
root1.right.right = new TreeNode(5);
root1.right.left.left = new TreeNode(20);
root1.right.left.right = new TreeNode(17);

console.log(
  'zigzag level order traversal is: ',
  zigzagLevelOrderTraversal(root1)
);

const root2 = new TreeNode(1);
root2.left = new TreeNode(2);
root2.right = new TreeNode(3);
root2.left.left = new TreeNode(4);
root2.left.right = new TreeNode(5);
root2.right.left = new TreeNode(6);
root2.right.right = new TreeNode(7);

console.log(
  'zigzag level order traversal is: ',
  zigzagLevelOrderTraversal(root2)
);
