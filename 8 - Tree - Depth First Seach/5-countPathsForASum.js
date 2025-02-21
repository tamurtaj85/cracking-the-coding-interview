/**
 * Count Paths for a Sum (medium)
 *
 * Given a binary tree and a number ‘S’, find all paths in the tree such that the sum of all the node values of each path equals ‘S’. Please note that the paths can start or end at any node but all paths must follow direction from parent to child (top to bottom).
 */
class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

function countPathForSum(root, sum) {
  const allPaths = [];

  const pathsCount = findPathForSum(root, sum, new Array(), allPaths);

  return {pathsCount, allPaths};
}

function findPathForSum(currentNode, sum, currentPath, allPaths) {
  if (!currentNode) return 0;

  currentPath.push(currentNode.val);

  let pathCount = 0,
    pathSum = 0;

  // we are doing this because our tree could be of any length,
  for (let i = currentPath.length - 1; i >= 0; i--) {
    pathSum += currentPath[i];

    if (pathSum === sum) {
      pathCount++;
      allPaths.push(currentPath.slice(i));
    }
  }

  pathCount += findPathForSum(currentNode.left, sum, currentPath, allPaths);
  pathCount += findPathForSum(currentNode.right, sum, currentPath, allPaths);

  currentPath.pop();
  return pathCount;
}

const root1 = new TreeNode(1);
root1.left = new TreeNode(7);
root1.right = new TreeNode(9);
root1.left.left = new TreeNode(6);
root1.left.right = new TreeNode(5);
root1.right.left = new TreeNode(2);
root1.right.right = new TreeNode(3);

const sum1 = 12;

console.log(
  'given the sum: ',
  sum1,
  'the number of paths in tree exists: ',
  countPathForSum(root1, sum1)
);

const root2 = new TreeNode(12);
root2.left = new TreeNode(7);
root2.right = new TreeNode(1);
root2.left.left = new TreeNode(4);
root2.right.left = new TreeNode(10);
root2.right.right = new TreeNode(5);

const sum2 = 11;

console.log(
  'given the sum: ',
  sum2,
  'the number of paths in tree exists: ',
  countPathForSum(root2, sum2)
);
