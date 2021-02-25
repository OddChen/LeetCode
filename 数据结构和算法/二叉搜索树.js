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

  /*
    删除：
    1、删除叶子节点 
    2、删除只有一个子节点的节点
    3、删除有两个子节点的节点
  */
  remove = (key) => {
  //寻找要删除的节点
    let current = this.root
    let parent = null
    let isleftChild = true
    while (current.key !== key) {
      parent = current
      if (key < current.key) {
        isleftChild = true
        current = current.left
      } else {
        isleftChild = false
        current = current.right
      }
      if (current === null) {
        return false
      }
    }
    //删除节点
    //删除叶子节点
    if (current.left === null && current.right === null) {
      if (current === this.root) {
        this.root = null
      } else if (isleftChild) {
        parent.left = null
      } else {
        parent.right = null
      }
    } else if (current.right === null) { //删除只有一个子节点的节点
        if (current === this.root) {
          this.root = current.left
        } else if (isleftChild) {
          parent.left = current.left
        } else {
          parent.right = current.left
        }
    } else if (current.left === null) {
        if (current === this.root) {
          this.root = current.right
        } else if (isleftChild) {
          parent.left = current.right
        } else {
          parent.right = current.right
        }
    } else { //删除有两个节点的节点 用前驱或者后继来替换
      let successor = this.getSuccssor(current)
      if (current === this.root) {
        this.root = successor
      } else if (isleftChild) {
        parent.left = successor
      } else {
        parent.right = successor
      }
      successor.left = current.left
    }
  }
  //找后继节点
  getSuccssor = (delNode) => {
    let successor = delNode
    let current = delNode.right
    let successorParent = delNode
    //循环查找
    while (current !== null) {
      successorParent = successor
      successor = current
      current = current.left
    }
    //判断寻找的后继节点是否是delNode的right节点
    if (successor !== delNode.right) {
      successorParent.left = successor.right
      successor.right = delNode.right
    }
    return successor
  }
}
