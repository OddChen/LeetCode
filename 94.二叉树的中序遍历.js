/**
 * 给定一个二叉树的根节点root，返回它的中序遍历。
 *
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var inorderTraversal = function (root) {
  let result = []
  inorderTraversalNode(root, result)
  return result
}

const inorderTraversalNode = (node, arr) => {
  if (node === null) {
    return null
  }
  inorderTraversalNode(node.left, arr)
  arr.push(node.val)
  inorderTraversalNode(node.right, arr)
}
