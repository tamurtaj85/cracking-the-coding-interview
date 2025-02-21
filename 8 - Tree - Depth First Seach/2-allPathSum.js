/**
 * All Paths for a Sum (medium)
 *
 * Given a binary tree and a number ‘S’, find all paths from root-to-leaf such that the sum of all the node values of each path equals ‘S’.
 */

class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

function allPathSum(root, sum) {
  if (!root) return 0;

  const allPaths = [];

  findPathRecursively(root, sum, new Array(), allPaths);

  return allPaths;
}

function findPathRecursively(currentNode, sum, currentPath, allPaths) {
  if (!currentNode) return;

  currentPath.push(currentNode.val);

  if (currentNode.val === sum && !currentNode.left && !currentNode.right) {
    allPaths.push(currentPath.toArray());
  } else {
    // recursively traverse left sub-tree
    findPathRecursively(
      currentNode.left,
      sum - currentNode.val,
      currentPath,
      allPaths
    );
    // recursively traverse right sub-tree
    findPathRecursively(
      currentNode.right,
      sum - currentNode.val,
      currentPath,
      allPaths
    );
  }

  // remove the current node from the path to backtrack,
  // we need to remove the current node from the stack while going up in recursive call stack
  currentPath.pop();
}

const root1 = new TreeNode(1);
root1.left = new TreeNode(7);
root1.right = new TreeNode(9);
root1.left.left = new TreeNode(4);
root1.left.right = new TreeNode(5);
root1.right.left = new TreeNode(2);
root1.right.right = new TreeNode(7);

const sum1 = 12;

console.log(
  'for given sum: ',
  sum1,
  ' the number of paths tree has: ',
  allPathSum(root1, sum1)
);

const root2 = new TreeNode(12);
root2.left = new TreeNode(7);
root2.right = new TreeNode(1);
root2.left.left = new TreeNode(4);
root2.right.left = new TreeNode(10);
root2.right.right = new TreeNode(5);

const sum2 = 23;

console.log(
  'for given sum: ',
  sum2,
  ' the number of paths tree has: ',
  allPathSum(root2, sum2)
);
