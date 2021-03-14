/**
 * 不使用任何内建的哈希表库设计一个哈希映射（HashMap）。
 * 实现 MyHashMap 类：
 * MyHashMap() 用空映射初始化对象
 * void put(int key, int value) 向 HashMap 插入一个键值对 (key, value) 。如果 key 已经存在于映射中，则更新其对应的值 value 。
 * int get(int key) 返回特定的 key 所映射的 value ；如果映射中不包含 key 的映射，返回 -1 。
 * void remove(key) 如果映射中存在 key 的映射，则移除 key 和它所对应的 value 。
 * Initialize your data structure here.
 */

//按官方解法思路写的
var MyHashMap = function () {
  this.BASE = 863
  this.data = new Array(this.BASE).fill(0).map(() => new Array())

  MyHashMap.prototype.hash = (key) => {
    return key % this.BASE
  }
}

/**
 * value will always be non-negative.
 * @param {number} key
 * @param {number} value
 * @return {void}
 */
MyHashMap.prototype.put = function (key, value) {
  let index = this.hash(key)
  let bucket = this.data[index]
  for (let i = 0; i < bucket.length; i++) {
    let turple = bucket[i]
    if (turple[0] === key) {
      turple[1] = value
      return
    }
  }
  bucket.push([key, value])
}

/**
 * Returns the value to which the specified key is mapped, or -1 if this map contains no mapping for the key
 * @param {number} key
 * @return {number}
 */
MyHashMap.prototype.get = function (key) {
  let index = this.hash(key)
  let bucket = this.data[index]
  for (let i = 0; i < bucket.length; i++) {
    let turple = bucket[i]
    //console.log(turple)
    if (turple[0] === key) {
      return turple[1]
    }
  }
  return -1
}

/**
 * Removes the mapping of the specified value key if this map contains a mapping for the key
 * @param {number} key
 * @return {void}
 */
MyHashMap.prototype.remove = function (key) {
  let index = this.hash(key)
  let bucket = this.data[index]
  for (let i = 0; i < bucket.length; i++) {
    let turple = bucket[i]
    if (turple[0] === key) {
      bucket.splice(i, 1)
    }
  }
}

/**
 * Your MyHashMap object will be instantiated and called as such:
 * var obj = new MyHashMap()
 * obj.put(key,value)
 * var param_2 = obj.get(key)
 * obj.remove(key)
 */

// 利用数组，比较简单的写法
var MyHashMap = function () {
  this.storage = []
}
/**
 * value will always be non-negative.
 * @param {number} key
 * @param {number} value
 * @return {void}
 */
MyHashMap.prototype.put = function (key, value) {
  this.storage[key] = value
}
/**
 * Returns the value to which the specified key is mapped, or -1 if this map contains no mapping for the key
 * @param {number} key
 * @return {number}
 */
MyHashMap.prototype.get = function (key) {
  //console.log(this.storage[key])
  return this.storage[key] !== undefined ? this.storage[key] : -1
}
