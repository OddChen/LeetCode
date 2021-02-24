class Node {
  constructor(key) {
    this.key = key
    this.left = null
    this.right = null
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null
  }
  //操作
  //1.插入
  insert = (key) => {
    //创建节点
    let newNode = new Node(key)
    //判断根节点是否有值
    if (this.root === null) {
      this.root = newNode
    } else {
      this.insertNode(this.root, newNode)
    }
  }
  //递归查找函数
  insertNode = (node, newNode) => {
    if (newNode.key < node.key) {
      //向左查找
      if (node.left === null) {
        node.left = newNode
      } else {
        this.insertNode(node.left, newNode)
      }
    } else {//向右查找
      if (node.right === null) {
        node.right = newNode
      } else {
        this.insertNode(node.right, newNode)
      }
    }
  }

  //先序遍历
  preOrderTraversal = () => {
    const result = []
    this.preOrderTraversalNode(this.root, result)
    return result
  }
  preOrderTraversalNode = (node, result) => {
    if (node === null) {
      return result
    }
    result.push(node.key)
    this.preOrderTraversalNode(node.left, result)
    this.preOrderTraversalNode(node.right, result)
  }
  //中序遍历
  midOrderTraversal = () => {
    const result = []
    this.midOrderTraversalNode(this.root, result)
    return result
  }
  midOrderTraversalNode = (node, result) => {
    if (node === null) {
      return result
    }
    this.midOrderTraversalNode(node.left, result)
    result.push(node.key)
    this.midOrderTraversalNode(node.right, result)
  }
  //后序遍历
  postOrderTraversal = () => {
    const result = []
    this.postOrderTraversalNode(this.root, result)
    return result
  }
  postOrderTraversalNode = (node, result) => {
    if (node === null) {
      return result
    }
    this.postOrderTraversalNode(node.left, result)
    this.postOrderTraversalNode(node.right, result)
    result.push(node.key)
  }

  //最大值
  MAX = () => {
    if (!this.root) {
      return null
    }
    let node = this.root
    while (node.right !== null) {
      node = node.right
    }
    return node.key
  }
  //最小值
  MIN = () => {
    if (!this.root) {
      return null
    }
    let node = this.root
    while (node.left !== null) {
      node = node.left
    }
    return node.key
  }

  //查找
  search = (key) => {
    let node = this.root
    while (node !== null) {
      if (key < node.key) {
        node = node.left
      } else if (key > node.key) {
        node = node.right
      } else {
        return true
      }
    }
    return false
  }
}
