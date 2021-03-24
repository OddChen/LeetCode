/**
 * @param {number[]} nums
 * @return {boolean}
 */
//自己写的 O(n^2)
var find132pattern = function (nums) {
  let len = nums.length
  if (len < 3) {
    return false
  }
  let min = 0
  while (min < len) {
    let stack = [nums[min]]
    for (let i = min; i < len; i++) {
      //console.log(stack)
      // if (nums[i] < nums[min]) {
      //     min = i
      // }
      if (nums[i] > stack[0]) {
        if (stack.length < 2) {
          stack.push(nums[i])
          continue
        }
        //console.log(nums[i])
        if (nums[i] < stack[1]) {
          return true
        } else {
          stack.pop()
          stack.push(nums[i])
        }
      }
    }
    min++
  }
  return false
}

/**
 * 看了官方解后写的
 * 1->min 2->max 3->mid
 * 132 -> min mid max
 * 将次大的值出栈并赋值给mid，最大的值入栈，如果下一个数字小于mid则满足要求
 */
var find132pattern = function (nums) {
  let n = nums.length
  let stack = [nums[n - 1]]
  let mid = -Infinity
  for (let i = n - 2; i >= 0; i--) {
    if (nums[i] < mid) {
      return true
    }
    while (stack && nums[i] > stack[stack.length - 1]) {
      mid = stack.pop()
    }
    if (nums[i] > mid) {
      stack.push(nums[i])
    }
  }
  return false
}
