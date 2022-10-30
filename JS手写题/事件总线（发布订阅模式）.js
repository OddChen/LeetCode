/**
 * 实现思路:
 * 创建一个对象
 * 在该对象上创建一个缓存列表（调度中心）
 * on 方法用来把函数 fn 都加到缓存列表中（订阅者注册事件到调度中心）
 * emit 方法取到 arguments 里第一个当做 event，根据 event 值去执行对应缓存列表中的函数（发布者发布事件到调度中心，调度中心处理代码）
 * off 方法可以根据 event 值取消订阅（取消订阅）
 * once 方法只监听一次，调用完毕后删除缓存函数（订阅一次）
 */

class EventEmitter {
  constructor() {
    this.cache = {}
  }
  // 注册事件
  on(name, fn) {
    if (this.cache[name]) {
      this.cache[name].push(fn)
    } else {
      this.cache[name] = [fn]
    }
  }
  // 取消订阅
  off(name, fn) {
    let tasks = this.cache[name]
    if (tasks) {
      const index = tasks.findIndex((f) => f === fn || f.callback === fn)
      if (index >= 0) {
        tasks.splice(index, 1)
      }
    }
  }
  // 发布
  emit(name, once = false, ...args) {
    if (this.cache[name]) {
      // 创建副本，如果回调函数内继续注册相同事件会死循环
      let tasks = this.cache[name].slice()
      for (let fn of tasks) {
        fn(...args)
      }
      // 只发布一次
      if (once) {
        delete this.cache[name]
      }
    }
  }
}

let eventBus = new EventEmitter()
let fn1 = function (name, age) {
  console.log(`${name} ${age}`)
}
let fn2 = function (name, age) {
  console.log(`hello, ${name} ${age}`)
}

eventBus.on('aaa', fn1)
eventBus.on('aaa', fn2)
eventBus.emit('aaa', false, '布兰', 12)
