/**
 * Sum of Path Numbers (medium)
 *
 * Given a binary tree where each node can only have a digit (0-9) value, each root-to-leaf path will represent a number. Find the total sum of all the numbers represented by all paths.
 */

class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

function sumOfPathNumbers(root) {
  return findRootToLeafPathSum(root, 0);
}

function findRootToLeafPathSum(root, pathSum) {
  if (!root) return 0;

  pathSum = pathSum * 10 + root.val;

  if (!root.left && !root.right) return pathSum;

  return (
    findRootToLeafPathSum(root.left, pathSum) +
    findRootToLeafPathSum(root.right, pathSum)
  );
}

const root1 = new TreeNode(1);
root1.left = new TreeNode(7);
root1.right = new TreeNode(9);
root1.right.left = new TreeNode(2);
root1.right.right = new TreeNode(9);

console.log('the total sum of all paths in tree is: ', sumOfPathNumbers(root1));

const root2 = new TreeNode(1);
root2.left = new TreeNode(0);
root2.right = new TreeNode(1);
root2.left.left = new TreeNode(1);
root2.right.left = new TreeNode(6);
root2.right.right = new TreeNode(5);

console.log('the total sum of all paths in tree is: ', sumOfPathNumbers(root2));
