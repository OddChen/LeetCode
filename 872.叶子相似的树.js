/**
 * 请考虑一棵二叉树上所有的叶子，这些叶子的值按从左到右的顺序排列形成一个叶值序列。
 * 举个例子，如上图所示，给定一棵叶值序列为 (6, 7, 4, 9, 8) 的树。
 * 如果有两棵二叉树的叶值序列是相同，那么我们就认为它们是叶相似的。
 * 如果给定的两个根结点分别为 root1 和 root2 的树是叶相似的，则返回true；否则返回false。
 *
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {boolean}
 */
var leafSimilar = function (root1, root2) {
  const dfs = (root, leafarr) => {
    if (root === null) {
      return
    }
    if (root.left === null && root.right === null) {
      leafarr.push(root.val)
      return
    }
    dfs(root.left, leafarr)
    dfs(root.right, leafarr)
  }
  let arr1 = []
  let arr2 = []
  dfs(root1, arr1)
  dfs(root2, arr2)
  // console.log(arr1, arr2)
  return arr1.toString() === arr2.toString()
}
