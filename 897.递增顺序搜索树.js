/**
 * 给你一棵二叉搜索树，请你 按中序遍历 将其重新排列为一棵递增顺序搜索树，
 * 使树中最左边的节点成为树的根节点，并且每个节点没有左子节点，只有一个右子节点。
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
 * @return {TreeNode}
 */
//哈希表
var increasingBST = function (root) {
  let result = []
  increasingBSTNode(root, result)
  const newTree = new TreeNode(-1)
  let curnode = newTree
  for (let values of result) {
    curnode.right = new TreeNode(values)
    curnode = curnode.right
  }
  return newTree.right
}

//遍历过程中改变结点
const increasingBSTNode = (node, arr) => {
  if (node === null) {
    return null
  }
  increasingBSTNode(node.left, arr)
  arr.push(node.val)
  increasingBSTNode(node.right, arr)
}
var increasingBST = function (root) {
  const newTree = new TreeNode(-1)
  let curnode = newTree
  const increasingBSTNode = (node) => {
    if (!node) {
      return
    }
    increasingBSTNode(node.left)
    curnode.right = node
    node.left = null
    curnode = node
    increasingBSTNode(node.right)
  }
  increasingBSTNode(root)
  return newTree.right
}
