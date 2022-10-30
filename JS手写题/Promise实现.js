class Promise {
  constructor(executor) {
    // 初始化等待态
    this.state = 'pending'
    // 成功的值
    this.value = undefined
    // 失败的原因
    this.reason = undefined
    // 成功存放的数组
    this.onResolvedCallbacks = []
    // 失败存放的数组
    this.onRejectedCallbacks = []

    let resolve = (value) => {
      if (this.state === 'pending') {
        this.state = 'fulfilled'
        this.value = value
        // resolve执行的时候，调用成功数组的函数
        this.onResolvedCallbacks.forEach((fn) => fn())
      }
    }

    let reject = (reason) => {
      if (this.state === 'pending') {
        this.state = 'rejected'
        this.reason = reason
        // reject执行，调用失败数组的函数
        this.onRejectedCallbacks.forEach((fn) => fn())
      }
    }

    try {
      executor(resolve, reject)
    } catch (err) {
      reject(err)
    }

    let then = (onFulfilled, onRejected) => {
      if (this.state === 'fulfilled') {
        onFulfilled(this.value)
      }
      if (this.state === 'rejected') {
        onRejected(this.reason)
      }
    }
  }
}
