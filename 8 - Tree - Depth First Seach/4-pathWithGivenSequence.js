/**
 * Path With Given Sequence (medium)
 *
 * Given a binary tree and a number sequence, find if the sequence is present as a root-to-leaf path in the given tree.
 */

class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

function hasPathSequence(root, pathSequence) {
  return findSequencePath(root, pathSequence, 0);
}

function findSequencePath(root, pathSequence, seqIndex) {
  if (!root || !pathSequence.length) return false;

  const n = pathSequence.length;

  // if index exceeds the length of path sequence or we don't have a match
  if (seqIndex >= n || root.val !== pathSequence[seqIndex]) return false;

  if (seqIndex === n - 1 && !root.left && !root.right) return true;

  return (
    findSequencePath(root.left, pathSequence, seqIndex + 1) ||
    findSequencePath(root.right, pathSequence, seqIndex + 1)
  );
}

const root1 = new TreeNode(1);
root1.left = new TreeNode(7);
root1.right = new TreeNode(9);
root1.right.left = new TreeNode(2);
root1.right.right = new TreeNode(9);

const seq1 = [1, 9, 9];

console.log(
  'against given sequence: ',
  seq1,
  'the path in tree exists: ',
  hasPathSequence(root1, seq1)
);

const root2 = new TreeNode(1);
root2.left = new TreeNode(0);
root2.right = new TreeNode(1);
root2.left.left = new TreeNode(1);
root2.right.left = new TreeNode(6);
root2.right.right = new TreeNode(5);

const seq2 = [1, 0, 7];
const seq3 = [1, 1, 6];

console.log(
  'against given sequence: ',
  seq2,
  'the path in tree exists: ',
  hasPathSequence(root2, seq2)
);

console.log(
  'against given sequence: ',
  seq3,
  'the path in tree exists: ',
  hasPathSequence(root2, seq3)
);
