//基于数组
function Queue() {
  //属性
  this.items = []
  //操作
  //1.将元素加入到队列中
  Queue.prototype.enqueue = (element) => {
    this.items.push(element)
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
      resultString += this.items[i] + ' '
    }
    return resultString
  }
}

/*例子：击鼓传花
* 几个朋友一起玩一个游戏, 围成一圈, 开始数数
* 数到某个数字的人自动淘汰.
* 最后剩下的是原来在哪一个位置上的人?
*/
const passGame = (nameList, num) => {
  let queue = new Queue()
  //存入队列中
  for (let i = 0; i < nameList.length; i++) {
    queue.enqueue(nameList[i])
  }
  //开始计数
  while (queue.size() > 1) {
    for (let i = 0; i < num; i++) {
      queue.enqueue(queue.dequeue())
    }
    //淘汰一个人
    queue.dequeue()
  }
  //最后剩下的人的位置
  return nameList.indexOf(queue.dequeue())
}