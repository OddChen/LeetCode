/**
 * 在二叉树中，根节点位于深度 0 处，每个深度为 k 的节点的子节点位于深度 k+1 处。
 * 如果二叉树的两个节点深度相同，但 父节点不同 ，则它们是一对堂兄弟节点。
 * 我们给出了具有唯一值的二叉树的根节点 root ，以及树中两个不同节点的值 x 和 y 。
 * 只有与值 x 和 y 对应的节点是堂兄弟节点时，才返回 true 。否则，返回 false。
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
 * @param {number} x
 * @param {number} y
 * @return {boolean}
 */
var isCousins = function (root, x, y) {
  // x 的信息
  let x_parent = null,
    x_depth = null,
    x_found = false
  // y 的信息
  let y_parent = null,
    y_depth = null,
    y_found = false
  //树、要查找的节点、深度、父节点
  const dfs = (node, depth, parent) => {
    if (node === null) {
      return
    }
    if (node.val === x) {
      [x_parent, x_depth, x_found] = [parent, depth, true]
    } else if (node.val === y) {
      [y_parent, y_depth, y_found] = [parent, depth, true]
    }

    if (x_found && y_found) {
      return
    }

    dfs(node.left, depth + 1, node)

    if (x_found && y_found) {
      return
    }

    dfs(node.right, depth + 1, node)
  }
  dfs(root, 0, null)
  return x_depth === y_depth && x_parent !== y_parent
}
