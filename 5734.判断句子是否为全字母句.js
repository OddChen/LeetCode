/**
 * 全字母句 指包含英语字母表中每个字母至少一次的句子。
 * 给你一个仅由小写英文字母组成的字符串 sentence ，请你判断 sentence 是否为全字母句 。
 * 如果是，返回 true ；否则，返回 false 。
 * @param {string} sentence
 * @return {boolean}
 */
var checkIfPangram = function (sentence) {
  let n = sentence.length
  if (n < 26) {
    return false
  }
  let map = {
    a: 0,
    b: 0,
    c: 0,
    d: 0,
    e: 0,
    f: 0,
    g: 0,
    h: 0,
    i: 0,
    j: 0,
    k: 0,
    l: 0,
    m: 0,
    n: 0,
    o: 0,
    p: 0,
    q: 0,
    r: 0,
    s: 0,
    t: 0,
    u: 0,
    v: 0,
    w: 0,
    x: 0,
    y: 0,
    z: 0,
  }
  for (let values of sentence) {
    map[values] += 1
  }
  for (let values of Object.values(map)) {
    if (values === 0) {
      return false
    }
  }
  return true
}
