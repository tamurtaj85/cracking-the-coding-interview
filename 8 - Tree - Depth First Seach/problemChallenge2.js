/**
 * Path with Maximum Sum (hard)
 *
 * Find the path with the maximum sum in a given binary tree. Write a function that returns the maximum sum. A path can be defined as a sequence of nodes between any two nodes and doesn’t necessarily pass through the root.
 */
class TreeNode {
  constructor(value, left = null, right = null) {
    this.value = value;
    this.left = left;
    this.right = right;
  }
}

class TreeMaxSum {
  constructor() {
    this.maxSum = 0;
  }

  calculateMaxSum(root) {
    this.findTheMaxSumPath(root);
    return this.maxSum;
  }

  findTheMaxSumPath(currentNode) {
    if (currentNode === null) return 0;

    const leftSum = Math.max(this.findTheMaxSumPath(currentNode.left), 0);
    const rightSum = Math.max(this.findTheMaxSumPath(currentNode.right), 0);

    const pathSum = leftSum + rightSum + currentNode.value;

    this.maxSum = Math.max(this.maxSum, pathSum);

    return Math.max(leftSum, rightSum) + currentNode.value;
  }
}

const treeMaxSum1 = new TreeMaxSum();
const root1 = new TreeNode(
  1,
  new TreeNode(2, new TreeNode(4)),
  new TreeNode(3, new TreeNode(5), new TreeNode(6))
);

console.log(
  'for given tree the diameter of tree is: ',
  treeMaxSum1.calculateMaxSum(root1)
);

const treeMaxSum2 = new TreeMaxSum();
const root2 = new TreeNode(
  1,
  new TreeNode(2, new TreeNode(1), new TreeNode(3)),
  new TreeNode(
    3,
    new TreeNode(5, new TreeNode(7), new TreeNode(8)),
    new TreeNode(6, new TreeNode(9))
  )
);

console.log(
  'for given tree the diameter of tree is: ',
  treeMaxSum2.calculateMaxSum(root2)
);

const treeMaxSum3 = new TreeMaxSum();
const root3 = new TreeNode(-1, new TreeNode(-3));

console.log(
  'for given tree the diameter of tree is: ',
  treeMaxSum3.calculateMaxSum(root3)
);
