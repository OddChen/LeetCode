/**
 * 给定一个二叉树，返回其节点值的锯齿形层序遍历。
 * （即先从左往右，再从右往左进行下一层遍历，以此类推，层与层之间交替进行）。
 *
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var zigzagLevelOrder = function (root) {
  let q = []
  let rel = []
  let nextisodd = false
  if (!root) {
    return rel
  }
  q.push(root)
  while (q.length) {
    let cur = q.length
    rel.push([])
    for (let i = 0; i < cur; i++) {
      const node = q.shift()
      if (nextisodd) {
        rel[rel.length - 1].unshift(node.val)
      } else {
        rel[rel.length - 1].push(node.val)
      }

      if (node.left) {
        q.push(node.left)
      }
      if (node.right) {
        q.push(node.right)
      }
    }
    nextisodd = !nextisodd
  }
  return rel
}
