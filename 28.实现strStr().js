/**
 * 实现 strStr() 函数。
 * 给定一个 haystack 字符串和一个 needle 字符串，在 haystack 字符串中找出 needle 字符串出现的第一个位置 (从0开始)。
 * 如果不存在，则返回  -1。
 *
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function (haystack, needle) {
  let n = needle.length
  let len = haystack.length
  if (needle === '') {
    return 0
  }
  for (let i = 0; i < len; i++) {
    //console.log(i, haystack.substring(i, i + n))
    if (haystack.substring(i, i + n) === needle) {
      return i
    }
  }
  return -1
}
