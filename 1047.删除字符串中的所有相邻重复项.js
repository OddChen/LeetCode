/**
 * 给出由小写字母组成的字符串 S，重复项删除操作会选择两个相邻且相同的字母，并删除它们。
 * 在 S 上反复执行重复项删除操作，直到无法继续删除。
 * 在完成所有重复项删除操作后返回最终的字符串。答案保证唯一。
 * @param {string} S
 * @return {string}
 */
//官方推荐   自己没想到==
var removeDuplicates = function (S) {
  let stack = []
  for (let value of S) {
    if (stack && stack[stack.length - 1] === value) {
      stack.pop()
    } else {
      stack.push(value)
    }
  }
  return stack.join('')
}
//递归......效率极低......
var removeDuplicates = function (S) {
  let arr = S.split('')
  let isDel = false
  let len = arr.length
  if (len === 1) {
    return arr.join('')
  }
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === arr[i + 1]) {
      arr.splice(i, 2)
      isDel = true
    }
  }
  let result = arr.join('')
  if (isDel) {
    isDel = false
    result = removeDuplicates(result)
  }
  return result
}
