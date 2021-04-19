/**
 * 给定一个二叉树，返回它的后序遍历。
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
var postorderTraversal = function (root) {
  let result = []
  postorderTraversalNode(root, result)
  return result
}

const postorderTraversalNode = (node, arr) => {
  if (node === null) {
    return null
  }
  postorderTraversalNode(node.left, arr)
  postorderTraversalNode(node.right, arr)
  arr.push(node.val)
}
