//链地址法
class HashTable {
  //属性
  constructor() {
    this.storage = []
    //当前元素数量 loadactor > 0.75 时需要扩容 < 0.25的时候缩小
    this.count = 0
    this.limit = 7
  }

  //操作
  //哈希函数
  hashFunc = (str, size) => {
    let hashCode = 0
    //霍纳算法，计算hashCode的值
    for (let i = 0; i < str.length; i++) {
      hashCode = 37 * hashCode + str.charCodeAt(i)
    }
    //取余
    let index = hashCode % size
    return index
  }
  //1.插入和修改数据
  put = (key, value) => {
    //根据key获取索引值
    let index = this.hashFunc(key, this.limit)
    //根据索引值取出bucket
    let bucket = this.storage[index]
    if (bucket === undefined) {
      bucket = []
      this.storage[index] = bucket
    }
    //判断新增还是修改
    for (let i = 0; i < bucket.length; i++) {
      let tuple = bucket[i]
      if (tuple[0] === key) {
        tuple[1] = value
        return
      }
    }
    bucket.push([key, value])
    this.count += 1
  }
  //2.获取
  get = (key) => {
    let index = this.hashFunc(key, this.limit)
    let bucket = this.storage[index]
    if (bucket === undefined) {
      return null
    }
    for (let i = 0; i < bucket.length; i++) {
      let tuple = bucket[i]
      if (tuple[0] === key) {
        return tuple[1]
      }
    }
    return null
  }
  //3.删除
  remove = (key) => {
    let index = this.hashFunc(key, this.limit)
    let bucket = this.storage[index]
    if (bucket === undefined) {
      return null
    }
    for (let i = 0; i < bucket.length; i++) {
      let tuple = bucket[i]
      if (tuple[0] === key) {
        bucket.splice(i, 1)
        this.count -= 1
        return tuple[1]
      }
    }
    return null
  }
  //4.判断是否为空
  isEmpty = () => {
    if (this.count === 0) {
      return true
    }
    return false
  }
  //5.size
  size = () => {
    return this.count
  }
}