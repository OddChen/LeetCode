/**
 * 给定一个二叉树，返回其节点值自底向上的层序遍历。
 * （即按从叶子节点所在层到根节点所在的层，逐层从左向右遍历）
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
 * @return {number[][]}
 */
var levelOrderBottom = function (root) {
  let q = []
  let rel = []

  if (!root) {
    return rel
  }

  q.push(root)
  while (q.length) {
    let curlen = q.length
    let temp = []
    for (let i = 0; i < curlen; i++) {
      const node = q.shift()
      temp.push(node.val)
      if (node.left) {
        q.push(node.left)
      }
      if (node.right) {
        q.push(node.right)
      }
    }
    rel.unshift(temp)
  }
  return rel
}
