/**
 * 句子 是一个单词列表，列表中的单词之间用单个空格隔开，且不存在前导或尾随空格。
 * 每个单词仅由大小写英文字母组成（不含标点符号）。
 * 例如，"Hello World"、"HELLO" 和 "hello world hello world" 都是句子。
 * 给你一个句子 s​​​​​​ 和一个整数 k​​​​​​ ，请你将 s​​ 截断 ​，​​​使截断后的句子仅含 前 k​​​​​​ 个单词。
 * 返回 截断 s​​​​​​ 后得到的句子。

 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var truncateSentence = function (s, k) {
  let n = s.length
  let count = 0
  let result = ''
  for (let i = 0; i < n; i++) {
    if (s[i] === ' ') {
      count++
    }
    if (count === k) {
      break
    }
    result += s[i]
  }
  return result
}
