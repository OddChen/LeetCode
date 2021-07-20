/**
 * 给你二叉搜索树的根节点 root ，该树中的两个节点被错误地交换。
 * 请在不改变其结构的情况下，恢复这棵树。
 *
 * 进阶：使用 O(n) 空间复杂度的解法很容易实现。
 * 你能想出一个只使用常数空间的解决方案吗？
 * (没实现)
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
 * @return {void} Do not return anything, modify root in-place instead.
 */
var recoverTree = function (root) {
  const inorder = (node, arr) => {
    if (!node) {
      return
    }
    inorder(node.left, arr)
    arr.push(node.val)
    inorder(node.right, arr)
  }

  const findTwoNodeValue = (arr) => {
    let x, y
    for (let i = arr.length - 1; i > 0; i--) {
      if (arr[i] < arr[i - 1]) {
        x = arr[i - 1]
        if (!y) {
          y = arr[i]
        } else break
      }
    }
    return [x, y]
  }

  const exchange = (node, count, x, y) => {
    if (node) {
      if (node.val === x || node.val === y) {
        node.val = node.val === x ? y : x
        count--
      }
      if (count === 0) {
        return
      }
      exchange(node.left, count, x, y)
      exchange(node.right, count, x, y)
    }
  }

  let arr = []
  inorder(root, arr)
  const [x, y] = findTwoNodeValue(arr)
  exchange(root, 2, x, y)
}
