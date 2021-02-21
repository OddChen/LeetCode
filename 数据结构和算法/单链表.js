function LinkedList() {
  //节点构造函数
  function Node(data) {
    this.data = data
    this.next = null
  }
  //属性
  this.head = null
  this.length = 0

  //1.添加元素
  LinkedList.prototype.append = (data) => {
    let newnode = new Node(data)
    //判断是否是第一个节点
    if (this.length === 0) {
      this.head = newnode
    } else {
      let current = this.head
      while (current.next) {
        current = current.next
      }
      current.next = newnode
    }
    this.length += 1
  }
  //toString()方法
  LinkedList.prototype.toString = () => {
    let current = this.head
    let liststring = ''

    while (current) {
      liststring += current.data + ' '
      current = current.next
    }

    return liststring
  }
  //3.在任意位置插入元素
  LinkedList.prototype.insert = (position, data) => {
    if (position < 0 || position > this.length) {
      return false
    }
    let newNode = new Node(data)
    if (position === 0) {
      newNode.next = this.head
      this.head = newNode
    } else {
      let current = this.head
      let previous = null
      let index = 0
      while (index++ < position) {
        previous = current
        current = current.next
      }

      newNode.next = current
      previous.next = newNode
    }
    this.length += 1
    return true
  }
  //4.获取某个位置元素的值
  LinkedList.prototype.get = (position) => {
    //不在范围内
    if (position < 0 || position >= this.length) {
      return null
    }
    let current = this.head
    for (let i = 0; i <= position; i++) {
      if (i === position) {
        return current.data
      }
      current = current.next
    }
  }
  //5.某个元素在链表中的索引
  LinkedList.prototype.indexOf = (data) => {
    let current = this.head
    for (let index = 0; index < this.length; index++) {
      if (current.data === data) {
        return index
      }
      current = current.next
    }
    return -1
  }
  //6.修改某个位置的元素
  LinkedList.prototype.update = (position, newdata) => {
    //不在范围内返回false
    if (position < 0 || position >= this.length) {
      return false
    }
    let current = this.head
    for (let i = 0; i <= position; i++) {
      if (i === position) {
        current.data = newdata
        return true
      }
      current = current.next
    }
  }
  //7.移除某个位置的元素
  LinkedList.prototype.removeAt = (position) => {
    //不在范围内返回false
    if (position < 0 || position >= this.length) {
      return null
    }
    let current = this.head
    let previous = null
    if (position === 0) {
      this.head = current.next
    } else {
        for (let i = 0; i < position; i++) {
          previous = current
          current = current.next
        }
        previous.next = current.next
      }
    this.length -= 1
    return current.data
  }
  //8.移除某个值的元素
  LinkedList.prototype.remove = (data) => {
    let position = this.indexOf(data)
    return this.removeAt(position)
  }
  //9.判断是否为空
  LinkedList.prototype.isEmpty = () => {
    return this.length === 0
  }
  //10.链表元素个数
  LinkedList.prototype.size = () => {
    return this.length
  }
}