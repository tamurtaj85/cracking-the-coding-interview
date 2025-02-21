/**
 * Binary Tree Path Sum (easy)
 *
 * Given a binary tree and a number ‘S’, find if the tree has a path from root-to-leaf such that the sum of all the node values of that path equals ‘S’.
 */
class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

function treeSumPath(root, sum) {
  if (!root) return false;

  if (root.val === sum && !root.left && !root.right) return true;

  return (
    treeSumPath(root.left, sum - root.val) ||
    treeSumPath(root.right, sum - root.val)
  );
}

const root1 = new TreeNode(1);
root1.left = new TreeNode(2);
root1.right = new TreeNode(3);
root1.left.left = new TreeNode(4);
root1.left.right = new TreeNode(5);
root1.right.left = new TreeNode(6);
root1.right.right = new TreeNode(7);

const sum1 = 10;

console.log(
  'for given sum: ',
  sum1,
  ' the tree has path: ',
  treeSumPath(root1, sum1)
);

const root2 = new TreeNode(12);
root2.left = new TreeNode(7);
root2.right = new TreeNode(1);
root2.left.left = new TreeNode(9);
root2.right.left = new TreeNode(10);
root2.right.right = new TreeNode(5);

const sum2 = 23;
const sum3 = 16;

console.log(
  'for given sum: ',
  sum2,
  ' the tree has path: ',
  treeSumPath(root2, sum2)
);

console.log(
  'for given sum: ',
  sum3,
  ' the tree has path: ',
  treeSumPath(root2, sum3)
);
