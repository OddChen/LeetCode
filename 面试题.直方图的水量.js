/**
 * 给定一个直方图(也称柱状图)，假设有人从上面源源不断地倒水，最后直方图能存多少水量?直方图的宽度为1。
 * 数组 [0,1,0,2,1,0,1,3,2,1,2,1] 表示的直方图，在这种情况下，可以接 6 个单位的水。
 *
 *
 * 和接雨水相同，有三种解法：
 * 动态规划 单调栈  双指针
 *
 *
 * @param {number[]} height
 * @return {number}
 */
//动态规划
var trap = function (height) {
  let len = height.length
  let leftMax = [height[0]]
  let rightMax = [height[len - 1]]
  for (let i = 1, j = len - 2; i < len, j >= 0; i++, j--) {
    if (height[i] > leftMax[leftMax.length - 1]) {
      leftMax.push(height[i])
    } else {
      leftMax.push(leftMax[i - 1])
    }
    if (height[j] > rightMax[rightMax.length - 1]) {
      rightMax.push(height[j])
    } else {
      rightMax.push(rightMax[i - 1])
    }
  }
  //console.log(leftMax, rightMax)
  let result = 0
  for (let i = 0; i < len; i++) {
    let cur = Math.min(leftMax[i], rightMax[len - i - 1]) - height[i]
    if (cur) {
      result += cur
    }
  }
  //console.log(result)
  return result
}

//双指针法
var trap = function (height) {
  let n = height.length
  let left = 0
  let leftMax = height[0]
  let right = n - 1
  let rightMax = height[n - 1]
  let result = null
  while (left < right) {
    if (leftMax >= rightMax) {
      result += rightMax - height[right]
      right--
      if (height[right] > rightMax) {
        rightMax = height[right]
      }
    } else {
      result += leftMax - height[left]
      left++
      if (height[left] > leftMax) {
        leftMax = height[left]
      }
    }
  }
  return result
}

//单调栈（没太理解......
var trap = function (height) {
  let result = 0
  const stack = []
  const n = height.length
  for (let i = 0; i < n; i++) {
    while (stack.length && height[i] > height[stack[stack.length - 1]]) {
      const top = stack.pop()
      if (!stack.length) {
        break
      }
      const left = stack[stack.length - 1]
      const width = i - left - 1
      const high = Math.min(height[i], height[left]) - height[top]
      result += width * high
    }
    stack.push(i)
  }
  return result
}
