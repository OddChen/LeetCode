/**
 * 给定一个字符串，请你找出其中不含有重复字符的 最长子串 的长度。
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  let n = s.length
  if (n <= 1) {
    return n
  }
  let queue = []
  let maxlen = 0
  for (let i = 0; i < n; i++) {
    let index = queue.indexOf(s[i])
    if (index === -1) {
      queue.push(s[i])
    } else {
      //console.log(index, maxlen)
      queue.splice(0, index + 1)
      //console.log(queue)
      queue.push(s[i])
      //console.log(queue)
    }
    if (maxlen < queue.length) {
      maxlen = queue.length
    }
  }
  return maxlen
}
