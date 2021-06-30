/**
 * 请实现两个函数，分别用来序列化和反序列化二叉树。
 * 你需要设计一个算法来实现二叉树的序列化与反序列化。
 * 这里不限定你的序列 / 反序列化算法执行逻辑，
 * 你只需要保证一个二叉树可以被序列化为一个字符串并且将这个字符串反序列化为原始的树结构。
 * 提示：输入输出格式与 LeetCode 目前使用的方式一致，
 * 详情请参阅 LeetCode 序列化二叉树的格式。
 * 你并非必须采取这种方式，你也可以采用其他的方法解决这个问题。
 *
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
var serialize = function (root) {
  let q = []
  let rel = []
  if (!root) {
    return rel
  }
  q.push(root)
  while (q.length) {
    for (let i = 0; i < q.length; i++) {
      const node = q.shift()
      if (node) {
        rel.push(node.val)
        q.push(node.left)
        q.push(node.right)
      } else {
        rel.push(null)
      }
    }
  }
  return rel.join(',')
}

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function (data) {
  let len = data.length
  if (!len) {
    return null
  }
  data = data.split(',')
  let root = new TreeNode(data[0])
  let q = [root]
  for (let i = 1; i < len; i = i + 2) {
    const node = q.shift()
    if (data[i]) {
      const newNode = new TreeNode(data[i])
      node.left = newNode
      q.push(newNode)
    }
    if (data[i + 1]) {
      const newNode = new TreeNode(data[i + 1])
      node.right = newNode
      q.push(newNode)
    }
  }
  return root
}

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */
