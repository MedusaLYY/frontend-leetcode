/**
 * 226. 翻转二叉树
 * https://leetcode.cn/problems/invert-binary-tree/
 */

const invertTree = function(root) {
  if (!root) return null;
  [root.left, root.right] = [root.right, root.left];
  invertTree(root.left);
  invertTree(root.right);
  return root;
};
