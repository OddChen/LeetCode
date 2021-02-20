//基于数组
function Stack() {
  //属性
  this.items = []
  //操作
  //1.将元素压入栈
  Stack.prototype.push = (element) => {
    this.items.push(element)
  }
  //2.从栈中取出元素
  Stack.prototype.pop = () => {
    return this.items.pop()
  }
  //3.查看栈顶元素
  Stack.prototype.peek = () => {
    return this.items[this.items.length-1]
  }
  //4.判端栈是否为空
  Stack.prototype.isEmpty = () => {
    return this.items.length === 0
  }
  //5.获取栈中元素个数
  Stack.prototype.size = () => {
    return this.items.length
  }
  //6.toString方法
  Stack.prototype.toString = () => {
    let resultString = ''
    for (let i = 0; i < this.items.length; i++) {
      resultString += this.items[i] + ' '
    }
    return resultString
  }
}

//例子：十进制转二进制
const dec2bin = (x) => {
  let stack = new Stack()

  while (x > 0) {
    stack.push(x % 2)
    x = Math.floor(x / 2);
  }
  let newnum = ""
  while (!stack.isEmpty()) {
    newnum += stack.pop()
  }
  return newnum
}