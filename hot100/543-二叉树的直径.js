/**
 * 543. 二叉树的直径
 * https://leetcode.cn/problems/diameter-of-binary-tree/
 */

let maxDiameter = 0;

const diameterOfBinaryTree = function(root) {
  maxDiameter = 0;
  const depth = (node) => {
    if (!node) return 0;
    const left = depth(node.left);
    const right = depth(node.right);
    maxDiameter = Math.max(maxDiameter, left + right);
    return 1 + Math.max(left, right);
  };
  depth(root);
  return maxDiameter;
};
