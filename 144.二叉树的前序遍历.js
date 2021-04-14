/**
 * 给你二叉树的根节点 root ，返回它节点值的 前序 遍历。
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
//递归
var preorderTraversal = function (root) {
  let result = []
  const preTraversal = (node, arr) => {
    if (node === null) {
      return result
    }
    arr.push(node.val)
    preTraversal(node.left, arr)
    preTraversal(node.right, arr)
  }
  preTraversal(root, result)
  return result
}
//迭代
var preorderTraversal = function (root) {
  const list = []
  const stack = []

  if (root) stack.push(root)
  while (stack.length > 0) {
    const curNode = stack.pop()
    list.push(curNode.val)
    if (curNode.right !== null) {
      stack.push(curNode.right)
    }
    if (curNode.left !== null) {
      stack.push(curNode.left)
    }
  }
  return list
}
