function DBLinkedList() {
  //节点构造函数
  function Node(data) {
    this.data = data
    this.next = null
    this.prev = null
  }
  //属性
  this.head = null
  this.tail = null
  this.length = 0

  //1.添加元素
  DBLinkedList.prototype.append = (data) => {
    let newNode = new Node(data)
    //判断是否是第一个节点
    if (this.length === 0) {
      this.head = newNode
      this.tail = newNode
    } else {
      this.tail.next = newNode
      newNode.prev = this.tail
      this.tail = newNode
    }
    this.length += 1
  }
  //2.转成字符串形式
  //2.1.toString()
  DBLinkedList.prototype.toString = () => {
    return this.backwardString()
  } 
  //2.2.forwwardString方法
  DBLinkedList.prototype.forwardString = () => {
    let current = this.tail
    let resultString = ''
    while (current) {
      resultString += current.data + ' '
      current = current.prev
    }
    return resultString
  }
  //2.3.backwardString方法
      DBLinkedList.prototype.backwardString = () => {
    let current = this.head
    let resultString = ''
    while (current) {
      resultString += current.data + ' '
      current = current.next
    }
    return resultString
  }
  //3.插入元素
  DBLinkedList.prototype.insert = (position, data) => {
    if (position < 0 || position > this.length) {
      return false
    }
    let newNode = new Node(data)
    if (this.length === 0) {
      this.head = newNode
      this.tail = newNode
    } else {
      if (position === 0) {
        newNode.next = this.head
        this.head.prev = newNode
        this.head = newNode
      } else if (position === this.length) {
        newNode.prev = this.tail
        this.tail.next = newNode
        this.tail = newNode
      } else {
        let index = 0
        let current = this.head
        while (index++ < position) {
          current = current.next
        }
        newNode.next = current
        newNode.prev = current.prev
        current.prev.next = newNode
        current.prev = newNode
      }
    }
    this.length += 1
    return true
  }
  //4.获取某个位置元素的值
  DBLinkedList.prototype.get = (position) => {
    //不在范围内
    if (position < 0 || position >= this.length) {
      return null
    }
    //优化方法：this.length / 2 > position 从前往后遍历 同理 从后往前
    let current = this.head
    for (let i = 0; i < position; i++) {
        current = current.next
    }
    return current.data
  }
  //5.某个元素在链表中的索引
  DBLinkedList.prototype.indexOf = (data) => {
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
  DBLinkedList.prototype.update = (position, newdata) => {
    //不在范围内返回false
    if (position < 0 || position >= this.length) {
      return false
    }
    //优化方法：this.length / 2 > position 从前往后遍历 同理 从后往前
    let current = this.head
    for (let i = 0; i < position; i++) {
      current = current.next
    }
    current.data = newdata
    return true
  }
  //7.移除某个位置的元素
  DBLinkedList.prototype.removeAt = (position) => {
    //不在范围内
    if (position < 0 || position >= this.length) {
      return null
    }
    let current = this.head
    if (this.length === 1) {
      this.head = null
      this.tail = null
    } else {
      if (position === 0) {
        this.head.next.prev = null
        this.head = this.head.next
      } else if (position === this.length - 1) {
          current = this.tail
          this.tail.prev.next = null
          this.tail = this.tail.prev
        } else {
          for (let i = 0; i < position; i++) {
            current = current.next
          }
          current.prev.next = current.next
          current.next.prev = current.prev
        }
    }
    this.length -= 1
    return current.data
  }
  //8.移除某个值的元素
  DBLinkedList.prototype.remove = (data) => {
    let position = this.indexOf(data)
    return this.removeAt(position)
  }
  //9.判断是否为空
  DBLinkedList.prototype.isEmpty = () => {
    return this.length === 0
  }
  //10.链表元素个数
  DBLinkedList.prototype.size = () => {
    return this.length
  }
}