const arr = [1, [2, [3, [4, 5]]], 6] // => [1, 2, 3, 4, 5, 6]

/**
 * 方法一，使用flat()
 * flat() 方法会按照一个可指定的深度递归遍历数组，并将所有元素与遍历到的子数组中的元素合并为一个新数组返回。
 * flat() 方法会移除数组中的空项
 */
const result1 = arr.flat(Infinity)

/**
 * ES5实现
 */
function flatten(arr) {
  var result = []
  for (var i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      result = result.concat(flatten(arr[i]))
    } else {
      result.push(arr[i])
    }
  }
  return result
}

/**
 * ES6
 */
function flatten(arr) {
  while (arr.some((item) => Array.isArray(item))) {
    arr = [].concat(...arr)
  }
  return arr
}
