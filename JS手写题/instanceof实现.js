/**
 * instanceof 运算符用于判断构造函数的 prototype 属性是否出现在对象的原型链中的任何位置。
 */
function MyInstanceof(left, right) {
  //对象原型
  let proto = Object.getPrototypeOf(left)
  //获取构造函数的prototype对象
  let prototype = right.prototype

  //判断构造函数的prototype对象是否在对象原型链上
  while (true) {
    if (!proto) {
      return false
    }
    if (proto === prototype) {
      return true
    } else {
      proto = Object.getPrototypeOf(proto)
    }
  }
}
