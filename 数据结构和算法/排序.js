function ArrayList() {
  this.array = []

  ArrayList.prototype.insert = (item) => {
    this.array.push(item)
  }
  ArrayList.prototype.toString = () => {
    return this.array.join()
  }

  //冒泡排序
  ArrayList.prototype.bubbleSort = () => {
    let length = this.array.length

    for (let i = length - 1; i >= 0; i--) {
      for (let j = 0; j < i; j++) {
        if (this.array[j] > this.array[j+1]) {
          this.swap(j, j+1)
        }
      }
    }
  }
}