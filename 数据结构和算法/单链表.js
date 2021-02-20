function LinkedList() {
  //内部节点类
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
      this.head.next = newnode
    } else {
      let current = this.head
      while (current.next) {
        current = current.next
      }
      current.next = newnode
    }
    this.length += 1
  }
}