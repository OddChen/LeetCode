/**
 * 给你一个整数数组 perm ，它是前 n 个正整数的排列，且 n 是个 奇数 。
 * 它被加密成另一个长度为 n - 1 的整数数组 encoded ，满足 encoded[i] = perm[i] XOR perm[i + 1] 。
 * 比方说，如果 perm = [1,3,2] ，那么 encoded = [2,1] 。
 * 给你 encoded 数组，请你返回原始数组 perm 。题目保证答案存在且唯一。
 * @param {number[]} encoded
 * @return {number[]}
 */
var decode = function (encoded) {
  const n = encoded.length + 1
  let total = 0

  for (let i = 0; i <= n; i++) {
    total ^= i
  }
  let odd = 0
  for (let i = 1; i < n - 1; i += 2) {
    odd ^= encoded[i]
  }
  const perm = new Array(n).fill(0)
  perm[0] = total ^ odd
  for (let i = 0; i < n - 1; i++) {
    perm[i + 1] = perm[i] ^ encoded[i]
  }
  return perm
}
