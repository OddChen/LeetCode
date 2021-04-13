/**
 * 给你一个二叉搜索树的根节点 root ，返回 树中任意两不同节点值之间的最小差值 。
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
 * @return {number}
 */
var minDiffInBST = function (root) {
  let arr = []
  BinaryTreeTraversal(root, arr)
  //console.log(arr)
  let min = arr[arr.length - 1]
  for (let i = arr.length - 1; i > 0; i--) {
    let cur = arr[i] - arr[i - 1]
    min = Math.min(min, cur)
  }
  return min
}

function BinaryTreeTraversal(node, result) {
  while (!node) {
    return result
  }
  BinaryTreeTraversal(node.left, result)
  result.push(node.val)
  BinaryTreeTraversal(node.right, result)
}
