function ArrayList() {
  this.array = []

  ArrayList.prototype.insert = (item) => {
    this.array.push(item)
  }
  ArrayList.prototype.toString = () => {
    return this.array.join()
  }
  ArrayList.prototype.swap = (m, n) => {
    let temp = this.array[m]
    this.array[m] = this.array[n]
    this.array[n] = temp
  }

  /**
   * 简单排序算法、从小到大
   */

  //冒泡排序 O(n^2) 稳定
  ArrayList.prototype.bubbleSort = () => {
    let length = this.array.length

    for (let i = length - 1; i >= 0; i--) {
      //相邻两两比较，进行交换位置
      for (let j = 0; j < i; j++) {
        if (this.array[j] > this.array[j + 1]) {
          this.swap(j, j + 1)
        }
      }
    }
  }

  //选择排序 O(n^2) 不稳定
  ArrayList.prototype.selectionSort = () => {
    let length = this.array.length

    for (let i = 0; i < length - 1; i++) {
      let min = i
      //每次循环选出最小值和第i个位置的交换
      for (let j = length - 1; j >= 0; j--) {
        if (this.array[min] > this.array[j]) {
          min = j
        }
      }
      this.swap(i, min)
    }
  }

  //插入排序 O(n^2) 稳定
  ArrayList.prototype.insertionSort = () => {
    let length = this.array.length

    for (let i = 1; i < length; i++) {
      let temp = this.array[i]
      //未排序的第一个元素同已经排好的进行比较，并将大的元素后移
      let j = i
      while (j > 0 && this.array[j - 1] > temp) {
        this.array[j] = this.array[j - 1]
        j--
      }
      this.array[j] = temp
    }
  }

  /**
   * 高级排序
   */

  //希尔排序 O(nlogn) 不稳定
  ArrayList.prototype.shellSort = () => {
    let length = this.array.length
    //设置增量
    let k = Math.floor(length / 2)

    while (k > 0) {
      //插入排序
      for (let i = k; i < length; i++) {
        let temp = this.array[i]
        let j = i
        while (j > k - 1 && this.array[j - k] > temp) {
          this.array[j] = this.array[j - k]
          j -= k
        }
        this.array[j] = temp
      }

      //调整增量
      k = Math.floor(k / 2)
    }
  }

  //快速排序 O(nlogn) 不稳定
  //枢纽选择：取左中右的中位数
  ArrayList.prototype.median = (left, right) => {
    let center = Math.floor((left, right) / 2)

    if (this.array[left] > this.array[center]) {
      this.swap(left, center)
    }
    if (this.array[center] > this.array[right]) {
      this.swap(center, right)
    }
    if (this.array[left] > this.array[right]) {
      this.swap(left, right)
    }
    //之后交换的时候pivot不需要再移动
    this.swap(center, right - 1)

    return this.array[right - 1]
  }
  ArrayList.prototype.quickSortRec = (left, right) => {
    if (left >= right) {
      return
    }
    let pivot = this.median(left, right)
    let i = left
    let j = right - 1
    while (true) {
      while (this.array[i] < pivot) {
        i++
      }
      while (this.array[j] > pivot) {
        j--
      }
      if (i < j) {
        this.swap(i, j)
      } else {
        break
      }
    }
    this.swap(i, right - 1)
    this.quickSortRec(left, i - 1)
    this.quickSortRec(i + 1, right)
  }
  ArrayList.prototype.quickSort = () => {
    this.quickSortRec(0, this.array.length - 1)
  }

  //另一种快排
  // let quickSorttwo = function (arr) {
  //   if (arr.length <= 1) {
  //     return arr
  //   }

  //   let pivotIndex = Math.floor(arr.length / 2)
  //   let pivot = arr.splice(pivotIndex, 1)[0]
  //   let left = []
  //   let right = []

  //   for (let i = 0; i < arr.length; i++) {
  //     if (arr[i] < pivot) {
  //       left.push(arr[i])
  //     } else {
  //       right.push(arr[i]);
  //     }
  //   }

  //   return quickSorttwo(left).concat([pivot], quickSorttwo(right))
  // }

  //归并排序 O(nlogn)
  ArrayList.prototype.MergeSort = () => {
    let length = this.array.length
    const mid = Math.floor(length / 2)
    const front = this.array.slice(0, mid)
    const end = this.array.slice(mid)
    return merge(MergeSort(front), MergeSort(end))
  }
  ArrayList.prototype.merge = (front, end) => {
    const temp = []
    while (front.length && end.length) {
      if (front[0] < end[0]) {
        temp.push(front.shift())
      } else {
        temp.push(end.shift())
      }
    }

    while (front.length) {
      temp.push(front.shift())
    }
    while (end.length) {
      temp.push(end.shift())
    }

    return temp
  }
}
