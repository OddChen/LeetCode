//哈希函数
//1.将字符串转化为一个比较大的数字，hashCode
//2.将数字压缩到数组范围内
const hashFunc = (str, size) => {
  let hashCode = 0
  //霍纳算法，计算hashCode的值
  for (let i = 0; i < str.length; i++) {
    hashCode = 37 * hashCode + str.charCodeAt(i)
  }
  //取余
  let index = hashCode % size
  return index
}