//基于数组
function Queue() {
  //属性
  this.items = []
  //这里要注意对比查看ES6的构造函数写法
  function QueueElement(element, priority) {
      this.element = element
      this.priority = priority
  }
  //操作
  //1.将元素加入到队列中
  Queue.prototype.enqueue = (element, priority) => {
    let queueElement = new QueueElement(element, priority)
    if (this.items.length === 0) {
      this.items.push(queueElement)
    } else {
      let added = false
      for (let i = 0; i < this.items.length; i++) {
        //小的优先
        if (queueElement.priority < this.items[i].priority) {
          this.items.splice(i, 0, queueElement)
          added = true
          break
        }
      }
      if (!added) {
        this.items.push(queueElement)
      }
    }
  }
  //2.从队列中删除前端的元素
  Queue.prototype.dequeue = () => {
    return this.items.shift()
  }
  //3.查看队列前端的元素
  Queue.prototype.front = () => {
    return this.items[0]
  }
  //4.查看队列是否为空
  Queue.prototype.isEmpty = () => {
    return this.items.length === 0
  }
  //5.查看队列中元素个数
  Queue.prototype.size = () => {
    return this.items.length
  }
  //5.toString()方法
  Queue.prototype.toString = () => {
    let resultString = ''
    for (let i = 0; i < this.items.length; i++) {
      resultString += this.items[i].element + '-' + this.items[i].priority + ' '
    }
    return resultString
  }
}