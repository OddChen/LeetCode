/**
 * 不使用任何内建的哈希表库设计一个哈希集合（HashSet）。
 * 实现 MyHashSet 类：
 * void add(key) 向哈希集合中插入值 key 。
 * bool contains(key) 返回哈希集合中是否存在这个值 key 。
 * void remove(key) 将给定值 key 从哈希集合中删除。
 * 如果哈希集合中没有这个值，什么也不做。
 * Initialize your data structure here.
 */
var MyHashSet = function () {
  this.storage = []
}

/**
 * @param {number} key
 * @return {void}
 */
MyHashSet.prototype.add = function (key) {
  this.storage[key] = 1
}

/**
 * @param {number} key
 * @return {void}
 */
MyHashSet.prototype.remove = function (key) {
  this.storage[key] = 0
}

/**
 * Returns true if this set contains the specified element
 * @param {number} key
 * @return {boolean}
 */
MyHashSet.prototype.contains = function (key) {
  return this.storage[key] === 1
}

/**
 * Your MyHashSet object will be instantiated and called as such:
 * var obj = new MyHashSet()
 * obj.add(key)
 * obj.remove(key)
 * var param_3 = obj.contains(key)
 */

// 自己写的
var MyHashSet = function () {
  this.storage = []
}
MyHashSet.prototype.add = function (key) {
  for (let hashkey of this.storage) {
    if (hashkey === key) {
      return
    }
  }
  this.storage.push(key)
}
MyHashSet.prototype.remove = function (key) {
  for (let i = 0; i < this.storage.length; i++) {
    if (this.storage[i] === key) {
      this.storage.splice(i, 1)
    }
  }
}
MyHashSet.prototype.contains = function (key) {
  for (let hashkey of this.storage) {
    if (hashkey === key) {
      return true
    }
  }
  return false
}
