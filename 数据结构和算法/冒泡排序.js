let arr = [28, 12, 89, 73, 65, 18, 96, 50, 8, 36]

function BubbleSort(arr) {
  let n = arr.length
  for (let i = 0; i < n - 1; i++) {
    // 每次把最大的一个数移到最后
    for (let j = 0; j < n - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        let cur = arr[j]
        arr[j] = arr[j + 1]
        arr[j + 1] = cur
      }
    }
  }
}

BubbleSort(arr)
console.log(arr)
