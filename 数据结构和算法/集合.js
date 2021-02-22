class Set {
  //属性
  constructor() {
    this.items = {}
  }
  //方法
  //添加
  add = (value) => {
    if (this.has(value)){
      return false
    }
    this.items[value] = value
    return true
  }
  //has()方法
  has = (value) => {
    return this.items.hasOwnProperty(value)
  }
  //删除元素
  remove = (value) => {
    if (!this.has(value)) {
      return false
    }
    delete this.items[value]
    return true
  }
  //移除集合中所有项
  clear = () => {
    this.items = {}
  }
  //size()
  size = () => {
    return Object.keys(this.items).length
  }
  //获取所有的值
  values = () => {
    return Object.keys(this.items)
  }

  //集合之间的操作
  //并集
  /*
   * 换用ES6的写法之前测试有问题
   */
  union = (otherSet) => {
    // 1、创建一个新集合
    let unionSet = new Set();
    // 2、将当前集合（this）的所有 value，添加到新集合（unionSet）中
    for (let value of this.values()) {
      unionSet.add(value);
    }
    // 3、将 otherSet 集合的所有 value，添加到新集合（unionSet）中
    for (let value of otherSet.values()) {
      unionSet.add(value); // add() 已经有重复判断
    }
    return unionSet;
  }
  //交集
  intersection = (otherSet) => {
    let intersectionSet = new Set()
    for (let value of this.values()) {
      if (otherSet.has(value)) {
        intersectionSet.add(value)
      }
    }
    return intersectionSet
  }
  //差集
  difference = (otherSet) => {
    let differenceSet = new Set()
    for (let value of this.values()) {
      if (!otherSet.has(value)) {
        differenceSet.add(value)
      }
    }
    return differenceSet
  }
  //子集
  subset = (otherSet) => {
    for (let value of this.values()) {
      if (!otherSet.has(value)) {
        return false
      }
    }
    return true
  }
}