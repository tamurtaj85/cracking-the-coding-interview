/**
 * Tree Diameter (medium) #
 *
 * Given a binary tree, find the length of its diameter. The diameter of a tree is the number of nodes on the longest path between any two leaf nodes. The diameter of a tree may or may not pass through the root.

Note: You can always assume that there are at least two leaf nodes in the given tree.
 */
class TreeNode {
  constructor(value, left = null, right = null) {
    this.value = value;
    this.left = left;
    this.right = right;
  }
}

class TreeDiameter {
  constructor() {
    this.treeDiameter = 0;
  }

  calculateTreeDiameter(root) {
    this.findTheHeightOfTree(root);
    return this.treeDiameter;
  }

  findTheHeightOfTree(currentNode) {
    if (currentNode === null) return 0;

    // console.log({currentNode});
    const leftHeight = this.findTheHeightOfTree(currentNode.left);
    const rightHeight = this.findTheHeightOfTree(currentNode.right);

    const diameter = leftHeight + rightHeight + 1;

    this.treeDiameter = Math.max(this.treeDiameter, diameter);

    // console.log({diameter, leftHeight, rightHeight, td: this.treeDiameter});

    return Math.max(leftHeight, rightHeight) + 1;
  }
}

const treeDiameter1 = new TreeDiameter();
const root1 = new TreeNode(
  1,
  new TreeNode(2, new TreeNode(4)),
  new TreeNode(3, new TreeNode(5), new TreeNode(6))
);

console.log(
  'for given tree the diameter of tree is: ',
  treeDiameter1.calculateTreeDiameter(root1)
);

const treeDiameter2 = new TreeDiameter();
const root2 = new TreeNode(
  1,
  new TreeNode(2),
  new TreeNode(
    3,
    new TreeNode(5, new TreeNode(7), new TreeNode(8, new TreeNode(10))),
    new TreeNode(6, new TreeNode(9, new TreeNode(11)))
  )
);

console.log(
  'for given tree the diameter of tree is: ',
  treeDiameter2.calculateTreeDiameter(root2)
);
